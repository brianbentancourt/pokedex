import { ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'

export default function Pokemon({ route: { params }, navigation }) {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <Icon
                name='arrow-left'
                color='#fff'
                size={20}
                style={{ marginLeft: 5 }}
                onPress={() => navigation.goBack()}
            />
        })
    }, [navigation, params])

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
            <Type types={pokemon.types} />
            <Stats stats={pokemon.stats} />
        </ScrollView>
    )
}