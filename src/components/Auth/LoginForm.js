import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Keyboard
} from 'react-native'


export default function LoginForm() {

    const onLogin = () => {

    }

    return (
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                autoCapitalize='none'
                secureTextEntry={true}
            />
            <Button title='Entrar' onPress={onLogin} />
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
})