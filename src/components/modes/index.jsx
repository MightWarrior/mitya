import { connect } from 'react-redux';
import { profileGet, maxGet, productsGet, productChoose, productDelete, productCreate, productsBuy, profileEdit} from '../../redux/auth/actions';
import Main from './Main';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isProfileToggled: state.authReducer.isProfileToggled,
  maxItem: state.authReducer.maxItem,
  products: state.authReducer.products,
  basket: state.authReducer.basket,
  total: state.authReducer.total,
  needRefresh: state.authReducer.needRefresh,
  refreshMax: state.authReducer.refreshMax
});

const mapDispatchToProps = {
  profileGet,
  maxGet,
  productsGet,
  productChoose,
  productDelete,
  productCreate,
  productsBuy,
  profileEdit
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);