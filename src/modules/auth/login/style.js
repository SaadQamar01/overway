import { StyleSheet } from "react-native";
import appColors from "../../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:appColors.grayBack
    },
    containerWrapper: {
        flex: 1,
        width: '70%',
    },
    top: {
        height: 200,
        justifyContent: 'center',
        alignItems: "center",
    },
    phoneContent:{
        height:300,
        paddingTop:30
    },
    bottom:{
        height:100,
        justifyContent:'flex-end',
    },

    heading: {
        flexDirection: 'row',
    },
    headPhone:{
        height:50
    },
    underline: {
        borderBottomWidth: 4,
        borderBottomColor: appColors.primary,
        backgroundColor: 'red',
        width: 80,
    },
    textColor: {
        color: appColors.lightDeepGrey
    },
    message:{
        marginTop:20
    }



})


export default styles