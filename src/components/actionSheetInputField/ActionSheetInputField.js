import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import appColors from '../../styles/colors'


const ActionSheetInputField = ({ isShow, title, setIsShow, showActionSheet, value }) => {
  const fireAction = () => {
    setIsShow(!isShow)
    showActionSheet()
  }
  return (
    <TouchableOpacity onPress={fireAction} activeOpacity={0.7}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{value || title}</Text>
        </View>
        <View>
          <Icon name={isShow ? 'angle-down' : 'angle-up'} size={30} color="gray"  />
        </View>
      </View>
    </TouchableOpacity>

  )
}
export default ActionSheetInputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 5,
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  title: {
    paddingLeft: 17,
    fontSize: 17,
  }
})