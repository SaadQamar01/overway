import { StyleSheet } from 'react-native'
import appColors from '../../styles/colors'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: appColors.secondary,
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  titleHead: {
    color: appColors.white,
    fontSize: 20
  },
  backIcon:{
    marginLeft:-25
  }

})

export default styles