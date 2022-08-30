import { StyleSheet } from "react-native";
import appColors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColors.grayBack
  },
  wrapper: {
    flex: 1,
    width: '90%',
  },
  inputView: {
    height: 100,
  },
  startInput: {
    paddingTop: 20,
    height: 120
  },
  buttonView: {
    justifyContent: 'center',
    height: 60
  },
  actionCover: {
    height: 75,
    justifyContent: 'center'
  },

  actionSheet: {
    height: 45,
    padding: 10,
    justifyContent: 'center',
    borderTopColor: appColors.grey,
    borderTopWidth: 1
  },
  actionSheetText: {
    fontSize: 18,
    color: 'black'

  }

})

export default styles;