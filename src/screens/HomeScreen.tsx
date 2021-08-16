import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Image, Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface HomeProps extends StackScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: HomeProps) => {
    return (
        <SafeAreaView>
            <Image source={require('../assets/pokeball.png')} style={styles.img} />
            <Text style={styles.title}>What Pokemon</Text>
            <Text style={styles.title}>are you looking for?</Text>
            <Pressable onPress={() => navigation.navigate('Pokedex')}>
                <Text>Pokedex</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: -100,
        right: -100,
        opacity: 0.15
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 20,
    }
})