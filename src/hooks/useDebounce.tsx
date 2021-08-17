import { useEffect, useState } from "react"

export const useDebounce = (input = '', time = 500) => {
    const [value, setValue] = useState(input);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setValue(input)
        }, time);

        return () => clearTimeout(debounce)
    }, [input])

    return value
}