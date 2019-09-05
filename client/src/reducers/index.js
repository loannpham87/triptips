import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import authReducer from "./authReducer";
import photoReducer from './photo';
import userReducer from './user';
import errorReducer from "./errorReducer";

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  errors: errorReducer,
  photos: photoReducer,
  user: userReducer
});