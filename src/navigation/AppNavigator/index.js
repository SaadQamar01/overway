import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   callInProcess1,
//   callInProcess2,
// } from './../../store/core/core.actions';
import AppNavigator from './AppNavigator';


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    //   callInProcess1,
    //   callInProcess2,
    },
    dispatch,
  );

const mapStateToProps = state => {
  const { core, auth } = state;
  return {
    // initialLoading: core.initialLoading,
    // isLoggedIn: auth.isLoggedIn,
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
