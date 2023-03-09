import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { getColorByPokemonType } from '../../utils/getColorByPokemonType'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Header({ name, order, image, type }) {
    const color = getColorByPokemonType(type)

    const bgStyle = [{ backgroundColor: color, ...styles.bg }]

    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 2)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27,
        textTransform: 'capitalize'
    },
    order: {
        color: '#fff',
        fontWeight: 'bold'
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: 'contain'
    }
})