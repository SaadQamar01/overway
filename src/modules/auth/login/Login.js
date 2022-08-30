import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import InputField from "../../../components/InputField/InputFiled";
import { requiredFiled, phoneInvalid } from '../../../constants/errors';
import UnderHeading from "../../../components/UnderHeading/UnderHeading";
import CustomButton from "../../../components/customButton/CustomButton";
import { navigate } from '../../../navigation/RootNavigation' 
import styles from './style'

const Login = () => {
  const [countryCode, setCountryCode] = useState({ "callingCode": ["92"], "cca2": "PK" });

  const [credential, setCredential] = useState({
    phoneNumber: '',
  });
  const [credentialFieldsError, setCredentialFieldsError] = useState({
    phoneNumber: requiredFiled('Phone'),
  });
  const [invalidFields, setInvalidFields] = useState({
    phoneNumber: false,
  });


  const setFieldValues = (value, fieldName, propertyName) => {
    let errorMsg = '';
    if (value.length === 0) {
      errorMsg = requiredFiled(fieldName);
    } else if (propertyName === 'phone') {
      errorMsg = phoneInvalid;
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

  const selectCountry = country => {
    setCountryCode(country);
  };


  const verified = () => {
    let data = { phoneNumber: `+${countryCode?.callingCode[0]} ${credential.phoneNumber}`}
    navigate('otpVerification', {phoneNumber: data})
  };

  return (

    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.heading}>
            <UnderHeading heading1={'Over'} isShowUnderline={false} large={true} />
            <UnderHeading heading2={'Ways'} isShowUnderline={false} large={true} />
          </View>
          <View style={styles.underline} />
        </View>
        <View style={styles.phoneContent}>
          <View style={styles.headPhone}>
            <UnderHeading heading1={'Your Phone!'} isShowUnderline={false} isBold={true} />
          </View>
          <View>
            <InputField
              label={'Phone Number'}
              invalid={invalidFields.phoneNumber}
              placeholder={'Phone Number'}
              value={credential.phoneNumber}
              keyboardType={'phone-pad'}
              country={true}
              selectCountry={selectCountry}
              countryCode={countryCode}
              setInputValue={phone => {
                setFieldValues(phone, 'Phone Number', 'phoneNumber');
              }}
              errorMessage={credentialFieldsError.phoneNumber || null}
            />
          </View>
          <View style={styles.message}>
            <Text style={styles.textColor}>A 4-digit OTP will be sent via SMS to </Text>
            <Text style={styles.textColor}>Verify your mobile number! </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <CustomButton title="Next" onPress={verified} isRounded={false} />
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Login;