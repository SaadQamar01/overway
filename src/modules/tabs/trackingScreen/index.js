import TrackingScreen from './TrackingScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { showToast } from '../../../store/toast/toast.actions';
// import { callInProcess } from '../../../store/core/core.actions';
// import { login } from '../store/auth.actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    //   showToast,
    //   callInProcess,
    //   login,
    },
    dispatch,
  );

const mapStateToProps = state => {
//   const { core } = state;
  return {
    // isCallInProcess: core.callInProcess,
    // languageText: core.languageText, //cahneg
    // isLanguageTextLoading: core.isLanguageTextLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackingScreen);
