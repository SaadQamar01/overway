import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, PLATFORM, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Login from '../../modules/auth/login'
import OtpVerification from '../../modules/auth/otpVerification';
import Signup from '../../modules/auth/signup'

import MainScreen from '../../modules/tabs/mainScreen'
import Tracking from '../../modules/tabs/trackingScreen';
import Notification from '../../modules/tabs/notification';
import Settings from '../../modules/tabs/settings';
import appColors from '../../styles/colors';
import Add from '../../modules/tabs/add/Add';
import DriverInfo from '../../modules/driver/driverInfo/DriverInfo';


const isIOS = Platform.OS === 'ios';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();;

const MainNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={({ navigation }) => ({
        headerShown: false,
        headerTitleStyle: styles.headerTitle,
        // headerLeft: () => (
        //   <BackIcon
        //     name='keyboard-arrow-left'
        //     style={styles.leftIcon}
        //     onPress={() => goBackPossible(navigation)}
        //   />
        // ),
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="otpVerification" component={OtpVerification} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="tabs" component={TabNavigator} />
      <Stack.Screen name="driverInfo" component={DriverInfo} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        title: '',
        tabBarIcon: ({ focused, color = 'red', size }) => {
          let icon;
          if (route.name === 'home') {
            icon = {
              name: focused ? 'home' : 'home-outline',
              tabName: focused ? 'Home' : 'home',
              size: 23,
            };
          }
          else if (route.name === 'tracking') {
            icon = {
              name: focused ? 'subway' : 'subway-outline',
              tabName: focused ? 'Track' : 'track',
              size: 28,
            };
          }
          else if (route.name === 'add') {
            icon = {
              name: 'add-circle',
              // tabName: focused ? 'Add':  'Add',
              size: 43,
              color: appColors.primary
            };
          }
          else if (route.name === 'notification') {
            icon = {
              name: focused ? 'notifications-sharp' : 'notifications-outline',
              tabName: focused ? 'Notification' : 'notification',
              size: 28,
            };
          }
          else if (route.name === 'settings') {
            icon = {
              name: focused ? 'settings' : 'settings-outline',
              tabName: focused ? 'Settings' : 'settings',
              size: 28,
            };
          }

          // You can return any component that you like here!
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Icon name={icon?.name} size={icon?.size} color={icon?.color || color} />
              <Text style={{ fontSize: 10 }}>{icon?.tabName}</Text>
            </View>
          )
        },
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: appColors.gray,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        // headerLeft: () => (
        //   <BackIcon
        //     name='keyboard-arrow-left'
        //     style={styles.leftIcon}
        //     onPress={() => navigation.navigate('Home')}
        //   />
        // ),
        // headerTitleAlign: 'center',

      })}
    >
      <Tab.Screen name="home" component={MainScreen} />
      <Tab.Screen name="tracking" component={Tracking} />
      <Tab.Screen name="add" component={Add}
        options={
          {
            tabBarItemStyle: {
              backgroundColor: '#E8E8E8',

              height: 60,
              width: 70,
              // position: 'relative',
              bottom: 30,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40
            },
            // headerTitle: "Create Match",
            // headerStyle: { backgroundColor: appColors.gray },
            // headerTitleStyle: { color: '#343434' },
            // tabBarHideOnKeyboard: true,
            tabBarStyle: {
              display: 'none'
            }

          }
        }
      />
      <Tab.Screen name="notification" component={Notification} />

      <Tab.Screen name="settings" component={Settings} />


    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  leftIcon: {
    color: 'lightgray',
    fontSize: 30,
    marginLeft: 4,
    paddingHorizontal: 8,
  },
  headerTitle: { color: 'lightgrey', textTransform: 'capitalize' },
});

// MainNavigator.propTypes = {
//   // initialRouteName: PropTypes.string.isRequired,
// };

export default MainNavigator;
