import { StyleSheet } from 'react-native'
import appColors from '../../styles/colors';

const styles = StyleSheet.create({
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      zIndex: 1,
      borderColor: appColors.grey,
      paddingVertical: 1,
      borderRadius: 6,
      paddingHorizontal: 10,
    },
    inputLabel: isLabelCaptilize => ({
      position: 'absolute',
      top: -12,
      left: 20,
      zIndex: 2,
      backgroundColor: appColors.grayBack,
      paddingHorizontal: 5,
      textTransform: isLabelCaptilize ? 'uppercase' : 'capitalize',
    }),
    inputMainContainer: {
      marginTop: 20,
      marginBottom: 10,
      position: 'relative',
    },
    errorText: {
      color: appColors.red,
      textAlign: 'left',
    },
    errorInput: {
      borderColor: appColors.red,
    },
    inputField: {
      fontSize: 15,
      paddingLeft: 15,
      paddingRight: 10,
      textAlign: 'left',
      width:'115%'
    },
    iconStyle: {
      fontSize: 20,
      color: appColors.grey,
      alignSelf: 'center',
      marginRight: 10,
    },
    errorContainer: {
      paddingHorizontal: 10,
    },
    dateTimeField: {
      flex:1,
      flexDirection:"row",
      height:50
    },
    dateIcon:{
      width:"15%",
      justifyContent:'center',
      alignItems:'center'
    },
    dateTimeWrapper:{
      width:'85%',
      justifyContent:'center',
    },
    inputInnerContainer: isDatePicker => ({
      width: isDatePicker ? '100%' : '90%',
      flexDirection: 'row',
    }),
    dateWrapper:{
      flex:1, 
      justifyContent:'center'
    },
    dateText:{
      paddingLeft:10
    }
  });

  export default styles;