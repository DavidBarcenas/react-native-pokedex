import ImageColors from 'react-native-image-colors'

export const getImageColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {
        fallback: '#f44336'
    })

    let primary, secondary;

    if (colors.platform === 'android') {
        primary = colors.dominant
        secondary = colors.darkMuted
    } else {
        primary = colors.primary
        secondary = colors.secondary
    }

    return [primary, secondary]
}