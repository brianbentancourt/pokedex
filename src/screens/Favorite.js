import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import PokemonList from '../components/PokemonList'
import NoLogged from '../components/Auth/NoLogged'

export default function Favorite() {
    const [favorites, setFavorites] = useState([])
    const { auth } = useAuth()

    useFocusEffect(
        useCallback(() => {
            setFavorites([])
            auth && (async () => {
                const response = await getPokemonsFavoriteApi()
                const pokemonsArray = []
                for await (const id of response) {
                    const pokemonDetails = await getPokemonDetailsApi(id)
                    pokemonsArray.push({
                        id: pokemonDetails.id,
                        name: pokemonDetails.name,
                        type: pokemonDetails.types[0].type.name,
                        order: pokemonDetails.order,
                        image: pokemonDetails.sprites.other['official-artwork'].front_default
                    })
                }
                setFavorites(pokemonsArray)
            })()
        }, [auth])
    )


    if (!auth)
        return (<NoLogged />)

    return (
        <SafeAreaView>
            <PokemonList pokemons={favorites} />
        </SafeAreaView>
    )
}