import React from "react";
import { View, Text, AppState } from 'react-native' 
import appColors from "../../../styles/colors";

const TrackingScreen = () => {
    return (
        <View style={{flex:1, backgroundColor: appColors.grayBack }}>
            <Text>TrackingScreen page</Text>
        </View>
    )
}

export default TrackingScreen;