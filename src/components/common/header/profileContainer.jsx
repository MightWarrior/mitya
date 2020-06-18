import { connect } from 'react-redux';
import { profileToggle } from '../../../redux/auth/actions';
import Profile from './profile';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isProfileToggled: state.authReducer.isProfileToggled
});

const mapDispatchToProps = {
  profileToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);