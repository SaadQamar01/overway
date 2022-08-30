import React, { useState } from "react";
import { View, Text, ScrollView } from 'react-native'
import UnderHeading from "../../../components/UnderHeading/UnderHeading";
import CustomButton from "../../../components/customButton/CustomButton";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { navigate } from '../../../navigation/RootNavigation' 
import styles from './style'

const OtpVerification = ({ route }) => {

  const [otpCode, setOtpCode ] = useState('') 
  const { phoneNumber } =  route.params.phoneNumber

  const verified = ({} ) => {
    console.log('otp is --->', otpCode)
    navigate('signup')
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
          <View style={styles.OtpContent}>
            <View style={styles.otpHead}>
              <UnderHeading heading1={'OTP Verification'} isShowUnderline={false} isBold={true} />
            </View>
            <View>
              <Text>Enter the OTP you received to</Text>
              <Text style={styles.number}>{phoneNumber}</Text>
            </View>
            <View>
              <OTPInputView
                style={{ width: '100%', height: 100}}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => setOtpCode(code)}
              />
            </View>
            <View style={styles.message}>
              <Text style={styles.textColor} onPress={()=> alert('pop')}> Resend OTP? </Text>
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

export default OtpVerification;