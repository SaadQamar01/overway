import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import InputField from "../../components/InputField/InputFiled";
import { requiredFiled } from '../../constants/errors';
import CustomButton from '../../components/customButton/CustomButton'
import Header from "../../components/header/Header";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import ActionSheetInputField from "../../components/actionSheetInputField/ActionSheetInputField";
import styles from "./style";
import { navigate } from "../../navigation/RootNavigation";

const Add = () => {
  // const GOOGLE_PLACES_API_KEY = 'AIzaSyAiFnViXmgRZ4c9i7ADMRxSS5Vud4mfwAY'; // never save your real api key in a snack!

  const [ categories, setCategories ]= useState([
    {type:'Rickshaw',capacity: 4},
    {type:'Bike',capacity: 2},
    {type:'Coaster',capacity: 15},
    {type:'Hiroof',capacity: 6},
    {type:'Car',capacity: 4},   
  ]) 

  const [isShow, setIsShow ] = useState(false)

  const [detail, setDetail] = useState({
    source: '',
    destination: '',
    from:  JSON.stringify(new Date().toString()) ,
    to:  JSON.stringify(new Date().toString()) ,
    category:'',
    capacity: ''
  });

  const [detailFieldsError, setDetailFieldsError] = useState({
    source: requiredFiled('Source location'),
    destination: requiredFiled('Destination location'),
    from: requiredFiled('Start time'),
    to: requiredFiled('End time'),
    capacity: requiredFiled('Capacity'),
  });
  const [invalidFields, setInvalidFields] = useState({
    source: false,
    destination: false,
    from: false,
    to: false,
    capacity: false,
  });

  const setFieldValues = (value, fieldName, propertyName) => {
    let errorMsg = '';
    if (value.length === 0) {
      errorMsg = requiredFiled(fieldName);
    }
    setDetail(prev => ({
      ...prev,
      [propertyName]: value,
    }));
    setInvalidFields(prev => ({
      ...prev,
      [propertyName]: errorMsg !== '',
    }));
    setDetailFieldsError(prev => ({
      ...prev,
      [propertyName]: errorMsg,
    }));
  };

  const showActionSheet = () => {
    SheetManager.show("helloworld_sheet");
  }

  const onClose = (item) => {
    SheetManager.hide("helloworld_sheet");
    setDetail({...detail, category: item.type, capacity: item.capacity})
    
  }
  const verified = () => {
    navigate('driverInfo')
  };
  
  const fromTime = detail.from.slice(17, 22)
  const toTime = detail.to.slice(17, 22)


  return (
    <View style={styles.container}>
      <Header title="Testing header" logo={true} />
      <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.inputView, styles.startInput]}>
          <InputField
            label={'Source'}
            invalid={invalidFields.source}
            placeholder={'Source location'}
            value={detail.source}
            keyboardType={'text'}
            setInputValue={source => {
              setFieldValues(source, 'Source', 'source');
            }}
            errorMessage={detailFieldsError.source || null}
          />
        </View>
        <View style={styles.inputView}>
          <InputField
            label={'Destination'}
            invalid={invalidFields.destination}
            placeholder={'Destination location'}
            value={detail.destination}
            keyboardType={'text'}
            setInputValue={destination => {
              setFieldValues(destination, 'Destination', 'destination');
            }}
            errorMessage={detailFieldsError.destination || null}
          />
        </View>
        <View style={styles.inputView}>
          <InputField
            label={'Start Time'}
            // invalid={false}
            value={fromTime}
            datePicker={true}
            setInputValue={from => {
              setFieldValues(from, 'From', 'from');
            }}
            errorMessage={null}
          />
        </View>
        <View style={styles.inputView}>
          <InputField
            label={'End Time'}
            // invalid={false}
            value={toTime}
            datePicker={true}
            setInputValue={to => {
              setFieldValues(to, 'To', 'to');
            }}
            errorMessage={null}
          />
        </View>
        <View style={styles.actionCover}>
            <ActionSheetInputField title={'Select vehicle category'} value={detail.category} showActionSheet = {showActionSheet} isShow={isShow} setIsShow={setIsShow}/>
        </View>
        <View style={styles.inputView}>
          <InputField
            label={'Capacity'}
            invalid={invalidFields.capacity}
            placeholder={'Capacity'}
            value={detail.capacity?.toString()}
            readOnly={true}
            errorMessage={detailFieldsError.capacity || null}
          />
        </View>
        <View style={styles.buttonView}>
          <CustomButton title={'Submit'} onPress={verified} />
        </View>
        <ActionSheet id="helloworld_sheet" >
            <View style={{ height: 220 }}>
              <ScrollView>
                {
                  categories?.map((item, index) => {
                    return (
                      <View style={styles.actionSheet} key={index}>
                        <TouchableOpacity onPress={() => onClose(item)}>
                          <Text style={styles.actionSheetText}> {` ${item.type}  ${item.capacity}  `}</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </ScrollView>
            </View>
          </ActionSheet>
      </ScrollView>
      </View>
    </View>
  )
}

export default Add;




