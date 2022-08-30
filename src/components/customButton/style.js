import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
    },
    container: ( isRounded ) => ({
        backgroundColor: 'red',
        height:50,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: isRounded ? 20 : 7
    }),
    buttonText: isBold => ({
        color:'white',
        fontSize:16,
        fontWeight: isBold ? 'bold' :''
    })

})

export  default styles;