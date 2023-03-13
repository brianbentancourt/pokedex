import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorite({ id }) {

    const addFavorite = () => { }

    return (
        <Icon name='heart' color={'#fff'} size={20} onPress={addFavorite} style={{ marginRight: 20 }} />
    )
}