import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Edit from 'react-native-vector-icons/Feather'


const ImageCard = ({ title, image ,onChangePhoto, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {
          image ? (
            <View style={styles.imageCover}>
              <Image source={require('../../assets/images/cnic.jpeg')} style={styles.image} />
              <TouchableOpacity style={styles.editIconCover} activeOpacity={0.7} onPress={()=> onChangePhoto(type)}>
                <Edit name="edit" size={30} color="red" />
              </TouchableOpacity>
            </View>
          ) :
            <TouchableOpacity style={styles.addCard} activeOpacity={0.7} onPress={()=> onChangePhoto(type)}>
              <Icon name="pluscircleo" size={30} color="gray" />
              <Text>{title}</Text>
            </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default ImageCard;


const styles = StyleSheet.create({
  container: {
    height: 190,
    alignItems: 'center',
    margin: 10,
  },
  wrapper: {
    flex: 1,
    width: '90%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  addCard: {
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between'
  },
  imageCover: {
    flex: 1,
    width: '100%',
    position:'relative'
  },
  image: {
    width: 332,
    height: 186,
    borderRadius: 12,
    resizeMode:'cover'

  },
  editIconCover:{
    position:'absolute',
    right:0,
  }

})