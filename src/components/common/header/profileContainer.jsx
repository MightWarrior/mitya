import { connect } from 'react-redux';
//import { logoutUser } from '../../../redux/auth/actions';
import Profile from './profile';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = {
//  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);