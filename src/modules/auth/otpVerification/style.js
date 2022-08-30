import { StyleSheet } from "react-native";
import appColors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColors.grayBack
  },
  containerWrapper: {
    flex: 1,
    width: '70%',
  },
  top: {
    height: 200,
    justifyContent: 'center',
    alignItems: "center",
  },
  OtpContent: {
    height: 300,
    paddingTop: 30
  },
  bottom: {
    height: 100,
    justifyContent: 'flex-end',
  },

  heading: {
    flexDirection: 'row',
  },
  otpHead: {
    height: 50
  },
  underline: {
    borderBottomWidth: 4,
    borderBottomColor: appColors.primary,
    backgroundColor: 'red',
    width: 80,
  },
  textColor: {
    color: appColors.primary,
    fontWeight:'bold'
  },
  message: {
    marginTop: 20,
    alignItems: 'flex-end'
  },
  number:{
    color: appColors.black,
    fontWeight:'bold',
    fontSize:16,
    marginTop:5
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 2,
    color: 'black',
    fontSize: 20,
    borderColor: appColors.lightDeepGrey
  },

  underlineStyleHighLighted: {
    borderColor: appColors.primary,
  },



})


export default styles