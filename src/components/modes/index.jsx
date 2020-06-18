import { connect } from 'react-redux';
import { profileGet} from '../../redux/auth/actions';
import Main from './Main';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = {
  profileGet
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);