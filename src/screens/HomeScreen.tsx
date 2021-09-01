import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pokeball } from '../components/Pokeball'

interface HomeProps extends StackScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: HomeProps) => {
    return (
        <SafeAreaView>
            <View style={styles.titleContainer}>
                <Pokeball />
                <Text style={styles.title}>What Pokemon</Text>
                <Text style={styles.title}>are you looking for?</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Pokedex')}>
                <Text>Pokedex</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Search')}>
                <Text>Search</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#fc6c6d',
        minHeight: '30%',
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#fff'
    }
})