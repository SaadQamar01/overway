import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import MainNavigator from '../MainNavigator';

const AppNavigator = ({
  // IMPORT STORE STATES
  // initialLoading,
  // IMPORT ACTIONS

  // callInProcess1,
  // callInProcess2,
  // isLoggedIn,
  // IMPORT PROPS
}) => {
  // useEffect(() => {
  //   callInProcess1(true);
  //   callInProcess2(true);
  // }, [callInProcess1, callInProcess2]);


  // if (initialLoading) {
  //   return (
  //     <View
  //       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color='red' />
  //     </View>
  //   );
  // }
  return (
    <View style={styles.shownContent}>
      <MainNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  shownContent: {
    flex: 1,
    opacity: 1,
  },
});


export default AppNavigator;
