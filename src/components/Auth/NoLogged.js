import { StyleSheet, View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {
    const navigation = useNavigation()

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para ver esta pantalla necesitas iniciar sesión</Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Account')}>
                <Text style={styles.textButton} >Ir al login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 50
    },
    text: {
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000',
    },
})