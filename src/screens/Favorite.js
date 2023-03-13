import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonsFavoriteApi } from '../api/favorite'

export default function Favorite() {
    const [favorites, setFavorites] = useState(null)

    useEffect(() => {
        (async () => setFavorites(await getPokemonsFavoriteApi()))()
    }, [])


    return (
        <SafeAreaView>
            <Text>Favorite</Text>
        </SafeAreaView>
    )
}