import React from "react";
import { View, Text } from 'react-native' 
import appColors from "../../../styles/colors";

const Settings = () => {
    return (
        <View style={{flex:1, backgroundColor: appColors.grayBack }}>
            <Text>Settings page</Text>
        </View>
    )
}

export default Settings;