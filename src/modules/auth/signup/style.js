import { StyleSheet } from "react-native";
import appColors from "../../../styles/colors";

const styles = StyleSheet.create({

  signupContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColors.grayBack
  },
  wrapper: {
    flex: 1,
    width: '90%',
  },

  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingCover: {
    height: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black"
  },

  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    position: 'relative'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: appColors.grey
  },
  changePhoto: {
    position: 'absolute',
    top: 0,
    right: -20,
    backgroundColor: appColors.yellow,
    padding: 5,
    borderRadius: 40,
    width: 40
  },
  changePhotoText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: appColors.navyBlue,
    textDecorationLine: 'underline',
    marginLeft: 50,
  },





  InputFieldContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContainer: {
    height: 199,
    justifyContent: 'center',

  },

  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  checkNameCover: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  checkName: {
    paddingLeft: 5
  },

  errorContainer: {
    marginTop:5
  },
  errorText: {
    color: appColors.red,
  },
})


export default styles