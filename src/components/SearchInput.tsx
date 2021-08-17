import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDebounce } from '../hooks/useDebounce';

export const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('')
    const debouncedValue = useDebounce(searchValue)

    useEffect(() => {
        console.log(debouncedValue)
    }, [debouncedValue])

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder='Search Pokemon'
                autoCorrect={false}
                autoCapitalize='none'
                style={{
                    borderColor: 'black',
                    borderWidth: 2
                }}
                value={searchValue}
                onChangeText={setSearchValue}
            />
            <Text>{JSON.stringify(searchValue, null, 4)}</Text>
        </View>
    )
}
