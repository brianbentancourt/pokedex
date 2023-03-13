import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { AddPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite'

export default function Favorite({ id }) {
    const [isFavorite, setIsFavorite] = useState(undefined)

    useEffect(() => {
        (async function () {
            try {
                const response = await isPokemonFavoriteApi(id)
                setIsFavorite(response)
            } catch (error) {
                setIsFavorite(false)
            }
        })()
    }, [id])

    const handleFavorite = async () => {
        if (isFavorite) {
            await removePokemonFavoriteApi(id)
            return setIsFavorite(false)
        }
        await AddPokemonFavoriteApi(id)
        setIsFavorite(true)
    }

    return (
        <Icon
            name='heart'
            color={'#fff'}
            size={20}
            onPress={handleFavorite}
            style={{ marginRight: 20 }}
            solid={isFavorite}
        />
    )
}