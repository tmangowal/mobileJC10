import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import EditProfileReducer from './EditProfileReducer';
import PostReducer from './PostReducer';

export default combineReducers({
   auth: AuthReducer,
   registerForm: RegisterReducer,
   loginForm: LoginReducer,
   editProfile: EditProfileReducer,
   post: PostReducer
});
