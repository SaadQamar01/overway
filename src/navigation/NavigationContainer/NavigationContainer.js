/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../AppNavigator';
import { rootNavigationRef } from '../RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';


const NavigatorContainer = ({
  // ACTIONS
//   identifyAuthUser,

  // STORE
//   token,
}) => {
  const [initialState, setInitialState] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [active, setActive] = useState(null);

//   useEffect(() => {
//     identifyAuthUser({ token });
//   }, [ identifyAuthUser, token ]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const visited = await AsyncStorage.getItem('visited');
//         const savedStateString = await AsyncStorage.getItem('navigation_state');
//         const state = savedStateString
//           ? JSON.parse(savedStateString)
//           : undefined;
//         // app start first time or restart second time
//         if (!state) {
//           // not first time
//           if (visited) {
//             // alert('vsiited');
//             // setActive('DrawerNavigator');
//             setIsReady(true);
//           } else {
//             // first time
//             // setActive('PickLanguageCountry');
//             setIsReady(true);
//           }
//         } else {
//           // state exist
//           if (visited) {
//             setActive(state); //todo: check
//             // setActive('DrawerNavigator');
//             setIsReady(true);
//           } else {
//             setInitialState(state);
//             AsyncStorage.removeItem('navigation_state');
//             // setActive('PickLanguageCountry');
//             setIsReady(true);
//           }
//         }
//       } catch (e) {}
//     })();
//   }, [ identifyAuthUser, token]);

//   if (!isReady || !active) {
//     return (
//       <PageContainer>
//         <View
//           style={{
//             ...commonStyles.safeArea,
//             ...commonStyles.centeredContainer,
//           }}>
//           <ActivityIndicator size="large" color={appColors.primary} />
//         </View>
//       </PageContainer>
//     );
//   }
  const initialRoute = {
    index: 1,
    routes: [
      {
        name: active,
      },
    ],
  };
  return (
    <NavigationContainer
      ref={rootNavigationRef}
    //   initialState={initialState ?? initialRoute}
      >
        <AppNavigator />
    </NavigationContainer>
  );
};

// NavigatorContainer.propTypes = {};

export default NavigatorContainer;
