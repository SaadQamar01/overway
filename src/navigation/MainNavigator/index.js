import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainNavigator from './MainNavigator';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
