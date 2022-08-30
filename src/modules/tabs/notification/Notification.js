import React from "react";
import { View, Text } from 'react-native' 
import appColors from "../../../styles/colors";

const Notification = () => {
    return (
        <View style={{flex:1, backgroundColor: appColors.grayBack }}>
            <Text>Notification page</Text>
        </View>
    )
}

export default Notification;