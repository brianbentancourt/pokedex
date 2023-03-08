import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import FavoriteScreen from '../screens/Favorite'
import AccountScreen from '../screens/Account'
import PokedexNavigation from '../Navigation/PokedexNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {

    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarLabel: "Favoritos",
                    title: "Favoritos",
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (<Icon name="heart" color={color} sixe={size} />)
                }}
            />
            <Tab.Screen
                name="Pokedex"
                component={PokedexNavigation}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    headerTitleAlign: 'center',
                    tabBarIcon: renderPokeball
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: "Mi Cuenta",
                    title: "Mi Cuenta",
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => (<Icon name="user" color={color} sixe={size} />)
                }}
            />
        </Tab.Navigator>
    )
}


const renderPokeball = () =>
    <Image
        source={require("../assets/pokeball.png")}
        style={{ width: 75, height: 75, top: -15 }}
    />

