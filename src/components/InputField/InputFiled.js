import React, { useState } from 'react';
import { TouchableOpacity, Platform, Text, View, TextInput as Input } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import appColors from '../../styles/colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CountryPicker from 'react-native-country-picker-modal';
import styles from './style';

const InputField = ({
  label,
  invalid,
  placeholder,
  value,
  datePickerValueIOS,
  secureField = false,
  datePicker,
  setPickerValue,
  setInputValue,
  errorMessage,
  keyboardType,
  readOnly = false,
  minDate = null,
  maxDate = new Date(),
  isLabelCaptilize = false,
  country,
  selectCountry,
  countryCode,
  countryPicker
}) => {

  const [hidePassword, setHidePassword] = useState(true);
  const [countryModal, setCountryModal] = useState(false);
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(false)
  let dateProps = {};
  if (datePicker && minDate) dateProps.minimumDate = minDate;
  if (datePicker && maxDate) dateProps.maximumDate = maxDate;

  return (
    <View style={styles.inputMainContainer}>
      <Text style={[styles.inputLabel(isLabelCaptilize), invalid ? styles.errorText : '']}>
        {label}
      </Text>
      <View style={[styles.inputContainer, invalid ? styles.errorInput : '']}>
        {
          country && (
            <View style={styles.flagSymbol}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setCountryModal(true)}>
                <CountryPicker
                  withFlag={true}
                  countryCode={countryCode.cca2}
                  onSelect={value => selectCountry(value)}
                  onClose={() => setCountryModal(false)}
                  translation="eng"
                  withFlagButton={true}
                  withCallingCode={true}
                  withAlphaFilter={true}
                  withCallingCodeButton={true}
                  withFilter={true}
                  visible={countryModal}
                />
              </TouchableOpacity>
            </View>
          )
        }
        <View style={styles.inputInnerContainer(datePicker)}>
          {
            !datePicker && (
              <Input
                value={value}
                style={styles.inputField}
                placeholder={placeholder}
                placeholderTextColor={appColors.grey}
                onChangeText={inputText => setInputValue(inputText)}
                secureTextEntry={secureField && hidePassword}
                keyboardType={keyboardType ? keyboardType : 'default'}
                editable={!readOnly}
              />
            )
          }
          {
            datePicker && (
              <View style={styles.dateTimeField}>
                <View style={styles.dateIcon}>
                  <Icon name="calendar-outline" size={25} color="gray" />
                </View>
                <View style={styles.dateTimeWrapper}>
                  <TouchableOpacity  onPress={() => setOpen(true)} activeOpacity={0.7} style={styles.dateWrapper}>
                    <DateTimePickerModal
                      // value={value}
                      isVisible={open}
                      mode="time"
                      style={{ color: 'black' }}
                      onConfirm={(dateTime) => {
                        setOpen(false)
                        let date = new Date(dateTime)
                        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                        date.toISOString()
                        console.log('selected Timme --> ', typeof(date) )
                        setTime(JSON.stringify(date))
                        setInputValue(dJSON.stringify(date))
                      }}
                      onCancel={() => {
                        setOpen(false)
                      }}
                    />
                    <Text style={styles.dateText} >
                      {time?.slice(12,17) || value}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            )
          }
        </View>
        {secureField && (
          <Icon
            name={hidePassword ? 'eye-off' : 'eye'}
            style={{ color: appColors.grey }}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {errorMessage && invalid && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};
export default InputField;
