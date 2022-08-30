import { StyleSheet } from 'react-native';
import appColors from './../../styles/colors';

const styles = StyleSheet.create({
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },
  heading1: (large,isBold) => ({
    fontSize: large ? 35 : 24,
    fontWeight: isBold ? 'bold' : '700',
    color: appColors.primary,
    marginRight: 8,
  }),
  heading2: (large,isBold ) => ({
    fontSize: large ? 35 : 24,
    fontWeight: isBold ? 'bold' : '700',
    color: appColors.black,
  }),
  underlineContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underline: {
    marginTop: 12,
    borderBottomWidth: 2,
    borderBottomColor: appColors.primary,
    backgroundColor: 'red',
    width: 120,
  },
});

export default styles;
