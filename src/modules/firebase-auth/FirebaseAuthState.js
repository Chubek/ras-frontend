/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import auth from '@react-native-firebase/auth';
import * as CONSTANTS from './FirebaseAuthConstants';
import I18t from '../../translations';
// initialState

const initialState = {
  userSignedIn: false,
  userProfile: {},
  error: null,
  message: null,
};

// thunk functions
export function onAuthStateChanged() {
  return dispatch => {
    auth()
      .onAuthStateChanged()
      .then(user => {
        if (user) {
          dispatch({
            type: CONSTANTS.SET_MESSAGE,
            payload: I18t.t('messages.reAuth'),
          });
          dispatch({ type: CONSTANTS.SET_USER, payload: user });
        }
      })
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export function registerWithEmailAndPassword(email, password) {
  return dispatch => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: CONSTANTS.SET_LOGGEDIN, payload: true });
      })
      .catch(e => {
        dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message });
      });
  };
}

export function signOut() {
  return dispatch => {
    auth()
      .signOut()
      .then(() => {
        dispatch({ type: CONSTANTS.SET_LOGGEDIN, payload: false });
      })
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export function signIn(email, password) {
  return dispatch => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: CONSTANTS.SET_LOGGEDIN, payload: true });
      })
      .catch(e => {
        dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message });
      });
  };
}

export function getUserProfile() {
  return dispatch => {
    const { email, uid } = auth().currentUser;

    if (email && uid) {
      dispatch({
        type: CONSTANTS.SET_PROFILE,
        payload: auth().currentUser,
      });
    }
  };
}

export function sendVerificationEmail() {
  return dispatch => {
    auth()
      .currentUser.sendEmailVerification()
      .then(() =>
        dispatch({
          type: CONSTANTS.SET_MESSAGE,
          payload: I18t.t('messages.verificationEmailSent'),
        }),
      )
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export function updateEmail(email) {
  return new Promise((resolve, reject) => {
    return dispatch => {
      auth()
        .currentUser.updateEmail(email)
        .then(() => {
          resolve({ emailChanged: true });
          dispatch({ type: CONSTANTS.SET_EMAIL, payload: email });
        })
        .catch(e => reject(e));
    };
  });
}

export function updatePassword(newPassword) {
  return dispatch => {
    auth()
      .currentUser.updatePassword(newPassword)
      .then(() => {
        dispatch({
          type: CONSTANTS.SET_MESSAGE,
          payload: I18t.t('messsages.passwordChanged'),
        });
      })
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export function updatePasswordResendEmail(email) {
  return dispatch => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({
          type: CONSTANTS.SET_MESSAGE,
          payload: I18t.t('messages.passwordChangedEmailSent'),
        });
      })
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export function reAuthenticateUserAndChangePassword(oldPassword, newPassword) {
  return (dispatch, getState) => {
    const user = auth().currentUser;
    const { email } = getState().firebaseAuth.userProfile;
    const credential = auth.EmailAuthProvider.credential(email, oldPassword);
    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        user
          .updatePassword(newPassword)
          .then(() => {
            dispatch({
              type: CONSTANTS.SET_MESSAGE,
              payload: I18t.t('messages.passwordChanged'),
            });
          })
          .catch(e => {
            dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message });
          });
      })
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export function reAuthenticateUserAndChangeEmail(email, password, newEmail) {
  return dispatch => {
    const user = auth().currentUser;
    const credential = auth.EmailAuthProvider.credential(email, password);
    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        user
          .updateEmail(newEmail)
          .then(() => {
            dispatch({
              type: CONSTANTS.SET_MESSAGE,
              payload: I18t.t('messages.emailChanged'),
            });
            dispatch({ type: CONSTANTS.SET_EMAIL, payload: newEmail });
          })
          .catch(e => {
            dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message });
          });
      })
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export function deleteCurrentUser() {
  return dispatch => {
    auth()
      .currentUser.delete()
      .then(() => {
        dispatch({ type: CONSTANTS.SET_LOGGEDIN, payload: false });
      })
      .catch(e => dispatch({ type: CONSTANTS.SET_ERROR, payload: e.message }));
  };
}

export default function FirebaseAuthStateReducer(
  state = initialState,
  action = {},
) {
  switch (action.type) {
    case CONSTANTS.SET_USER:
      return {
        ...state,
        userSignedIn: true,
        userProfile: action.payload,
      };
    case CONSTANTS.SET_LOGGEDIN:
      return {
        ...state,
        userSignedIn: action.payload,
      };
    case CONSTANTS.SET_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case CONSTANTS.SET_EMAIL:
      return {
        ...state,
        'userProfile.email': action.payload,
      };
    case CONSTANTS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CONSTANTS.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
