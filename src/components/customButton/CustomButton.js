import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'


const CustomButton = ({ title, isRounded=true, isBold=false , onPress , disabled}) => {
    console.log('disbaled button ', disabled)

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={onPress} disabled={disabled}>
            <View style={styles.container(isRounded)} >
                <Text style={styles.buttonText(isBold)}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}
export default CustomButton;


