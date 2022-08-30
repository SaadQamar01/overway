import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { goBackPossible } from '../../navigation/RootNavigation'
import { useNavigation } from '@react-navigation/native'
import styles from './style'

const Header = ({ title, logo }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      <View style={styles.backIcon}>
        <Icon name="md-chevron-back" size={30} color="gray" onPress={() => goBackPossible(navigation)}/>
      </View>
      <View>
        <Text style={styles.titleHead}>{title || ''}</Text>
      </View>
      <View>
        {
          logo ? <Image source={require('../../assets/images/road.png')} style={{ width: 30, height: 30 }} /> : ''
        }
      </View>
    </View>
  )
}

export default Header;

