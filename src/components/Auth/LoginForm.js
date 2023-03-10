import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Keyboard
} from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'


export default function LoginForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log('Formulario enviado...', formValue)
        }
    })


    return (
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                autoCapitalize='none'
                value={formik.values.userName}
                onChangeText={(text) => formik.setFieldValue('userName', text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <Button title='Entrar' onPress={formik.handleSubmit} />
            <Text style={styles.error}>{formik.errors.userName}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
        </View>
    )
}


function initialValues() {
    return {
        userName: '',
        password: ''
    }
}

function validationSchema() {
    return {
        userName: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria").min(4, "La contraseña debe contener al menos 4 caracteres").max(20, "La contraseña no puede contener mas de 20 caracteres"),
    }
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
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 20
    }
})