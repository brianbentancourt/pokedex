import { ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'

export default function Pokemon({ route: { params }, navigation }) {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailsApi(params.id)
                setPokemon(response)
            } catch (error) {
                navigation.goBack()
            }
        })()
    }, [params])

    if (!pokemon)
        return null;

    return (
        <ScrollView>
            <Header
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other['official-artwork'].front_default}
                type={pokemon.types[0].type.name}
            />
        </ScrollView>
    )
}