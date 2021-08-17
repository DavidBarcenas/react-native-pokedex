import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';

export const SearchScreen = () => {
    // const {top} = useSafeAreaInsets()
    const [term, setTerm] = useState('')

    return (
        <View>
            <SearchInput onDebounce={setTerm} />
        </View>
    )
}
