import React from 'react'
import { Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePokemoList } from '../hooks/usePokemoList'

export const HomeScreen = () => {
    usePokemoList()
    return (
        <SafeAreaView>
            <Image
                source={require('../assets/pokeball.png')}
                style={{
                    width: 300,
                    height: 300,
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    opacity: 0.15
                }}
            />
            <Text style={{
                fontSize: 35,
                fontWeight: 'bold',
                marginLeft: 20,
                marginTop: 40
            }}>Pokedex</Text>
        </SafeAreaView>
    )
}
