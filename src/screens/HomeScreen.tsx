import React from 'react'
import { Image, Text } from 'react-native'

export const HomeScreen = () => {
    return (
        <>
            <Text>Hola mundo</Text>
            <Image
                source={require('../assets/pokebola.png')}
                style={{ width: 150, height: 150 }}
            />
        </>
    )
}
