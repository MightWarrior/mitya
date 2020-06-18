import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth/actions';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => ({
  loginErrors: state.authReducer.loginErrors,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);