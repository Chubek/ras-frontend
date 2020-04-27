import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import auth from '../modules/auth/AuthState';
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState';
import charts from '../modules/charts/ChartsState';
import chat from '../modules/chat/ChatState';
import resume from '../modules/resume/ResumeState';
import firebaseAuth from '../modules/firebase-auth/FirebaseAuthState';

export default combineReducers({
  // ## Generator Reducers
  auth,
  gallery,
  app,
  calendar,
  charts,
  chat,
  resume,
  firebaseAuth,
});
