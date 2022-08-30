import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import InputField from '../../../components/InputField/InputFiled'
import Icon from 'react-native-vector-icons/Ionicons';
import PencilIcon from 'react-native-vector-icons/EvilIcons';
import CustomButton from "../../../components/customButton/CustomButton";
import { launchImageLibrary } from 'react-native-image-picker';
import { requiredFiled, nameLengthError, emailInvalid } from '../../../constants/errors';
import { validateEmail, validatePassword, checkNameIsValid } from '../../../constants/validators';
import styles from "./style";
import { navigate } from "../../../navigation/RootNavigation";

const Signup = () => {
  const [isCustomerCheck, setIsCustomerCheck] = useState(false)
  const [isDriverCheck, setIsDriverCheck] = useState(false)


  const [credential, setCredential] = useState({
    fullName: '',
    address: '',
    email: '',
    category: ''
  });
  const [credentialFieldsError, setCredentialFieldsError] = useState({
    fullName: requiredFiled('FullName'),
    address: requiredFiled('Address'),
    category: requiredFiled('Category'),
  });
  const [invalidFields, setInvalidFields] = useState({
    fullName: false,
    address: false,
    category: false,
  });


  const setFieldValues = (value, fieldName, propertyName) => {
    let errorMsg = '';
    if (value.length === 0) {
      errorMsg = requiredFiled(fieldName);
    } else if (propertyName === 'fullName' && !checkNameIsValid(value)) {
      errorMsg = nameLengthError;

    } else if (propertyName === 'email' && !validateEmail(value)) {
      errorMsg = emailInvalid;
    }
    setCredential(prev => ({
      ...prev,
      [propertyName]: value,
    }));
    setInvalidFields(prev => ({
      ...prev,
      [propertyName]: errorMsg !== '',
    }));
    setCredentialFieldsError(prev => ({
      ...prev,
      [propertyName]: errorMsg,
    }));
  };

  const onChangePhoto = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
    };
    launchImageLibrary(options, res => {
      if (res.uri) {
        let { fileSize, fileName, type, uri } = res;
        let newUri = uri;
        if (!fileName && isIOS) {
          let path = newUri;
          path = '~' + path.substring(path.indexOf('/Documents'));
          fileName = path.split('/').pop();
        }
        let obj = {
          size: fileSize,
          name: fileName,
          type,
          uri: newUri,
        };
        let avatar = new FormData();
        avatar.append('avatar', obj);
        setprofile({ avatar: obj, isSetProfile: true })
      }
    });
  };

  const getValueRadio = (value) => {
    if (value === 'user') {
      setFieldValues(value, 'Category', 'category');
      setIsCustomerCheck(!isCustomerCheck)
      setIsDriverCheck(false)
    } else {
      setFieldValues(value, 'Category', 'category');
      setIsDriverCheck(!isDriverCheck)
      setIsCustomerCheck(false)
    }
  }


  const registered = () => {
    // if ( !!credential.fullName && !!credential.address && !!credential.category) {
    //   if (!invalidFields.fullName && !invalidFields.address && !!invalidFields.category) {
    //     console.log('credential is == ', credential)
    //     navigate('tabs')

    //   }
    // }
    // else{
    //   setInvalidFields({ fullName: true, address: true , category: true})
    // }

    console.log('regitered data --->', credential)
    navigate('tabs')
  }


  return (
    <View style={styles.signupContainer}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.headingCover}>
            <Text style={styles.heading}>Enter Your Details</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              resizeMode='cover'
              style={styles.avatar}
              source={require('../../../assets/images/road.png')}
            />
            <PencilIcon name="pencil" size={30} color="black" style={styles.changePhoto} onPress={onChangePhoto} />
          </View>
        </View>
        <View style={styles.InputFieldContainer}>
          <View>
            <View>
              <InputField
                label={'Full Name'}
                invalid={invalidFields.fullName}
                placeholder={'Full name'}
                value={credential.fullName}
                keyboardType={'text'}
                setInputValue={fullName => {
                  setFieldValues(fullName, 'Full Name', 'fullName');
                }}
                errorMessage={credentialFieldsError.fullName || null}
              />
            </View>
            <View>
              <InputField
                label={'Home Address'}
                invalid={invalidFields.address}
                placeholder={'Address'}
                value={credential.address}
                keyboardType={'text'}
                setInputValue={address => {
                  setFieldValues(address, 'Address', 'address');
                }}
                errorMessage={credentialFieldsError.address || null}
              />
            </View>
            <View>
              <InputField
                label={'Email (optional)'}
                invalid={invalidFields.email}
                placeholder={'Email'}
                value={credential.email}
                keyboardType={'text'}
                setInputValue={email => {
                  setFieldValues(email, 'Email', 'email');
                }}
                errorMessage={credentialFieldsError.email || null}
              />
            </View>
            <View style={styles.checkContainer}>
              <View>
                <Text style={styles.categoryText}>Category</Text>
              </View>
              <View style={styles.checkNameCover}>
                <View>
                  <Icon name={isCustomerCheck ? 'checkmark-circle-sharp' : 'checkmark-circle-outline'} size={20} color="#900" onPress={() => getValueRadio('user')} />
                </View>
                <View>
                  <Text style={styles.checkName}>User</Text>
                </View>
              </View>
              <View style={styles.checkNameCover}>
                <View>
                  <Icon name={isDriverCheck ? 'checkmark-circle-sharp' : 'checkmark-circle-outline'} size={20} color="#900" onPress={() => getValueRadio('driver')} />
                </View>
                <View>
                  <Text style={styles.checkName}>Driver</Text>
                </View>
              </View>

            </View>
            {
              invalidFields.category ?
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>Choose one category</Text>
                </View>
                : <></>
            }



          </View>
        </View>
        <View style={styles.footerContainer}>
          <CustomButton title={'Signup'} isRounded={false} onPress={registered}/>
        </View>
      </View>


    </View>
  )
}

export default Signup;