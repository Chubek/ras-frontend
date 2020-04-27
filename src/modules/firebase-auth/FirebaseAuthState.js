/* Authored by Chubak Bidpaa: chubakbidpaa@gmail.com - 2020 - Corona Times */

import auth from '@react-native-firebase/auth';
import * as CONSTANTS from './FirebaseAuthConstants';

// initialState

const initialState = {
  userSignedIn: false,
  userProfile: {},
  error: null,
};

// thunk functions
export function onAuthStateChanged() {
  return new Promise((resolve, reject) => {
    return dispatch => {
      auth()
        .onAuthStateChanged()
        .then(user => {
          if (user) {
            resolve({ user, userChanged: true });
            dispatch({ type: CONSTANTS.SET_USER, payload: user });
          } else {
            reject();
          }
        })
        .catch(e => reject(e));
    };
  });
}

export function registerWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    return dispatch => {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          resolve({ userCreated: true });
          dispatch({ type: CONSTANTS.SET_USER, payload: true });
        })
        .catch(e => {
          reject(e);
        });
    };
  });
}

export function signOut() {
  return new Promise((resolve, reject) => {
    return dispatch => {
      auth()
        .signOut()
        .then(() => {
          resolve({ signedOut: true });
          dispatch({ type: CONSTANTS.SET_LOGGEDIN, payload: false });
        })
        .catch(e => reject(e));
    };
  });
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
  return new Promise((resolve, reject) => {
    return dispatch => {
      try {
        const { name, email, uid } = auth().currentUser;

        if (name && email && uid) {
          resolve({ currentUser: auth().currentUser });
          dispatch({
            type: CONSTANTS.SET_PROFILE,
            payload: auth().currentUser,
          });
        }
      } catch (e) {
        reject(e);
      }
    };
  });
}

export function sendVerificationEmail() {
  return new Promise((resolve, reject) => {
    auth()
      .currentUser.sendEmailVerification()
      .then(() => resolve({ emailSent: true }))
      .catch(e => reject(e));
  });
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
  return new Promise((resolve, reject) => {
    auth()
      .currentUser.updatePassword(newPassword)
      .then(() => {
        resolve({ passwordChanged: true });
      })
      .catch(e => reject(e));
  });
}

export function updatePasswordResendEmail(email) {
  return new Promise((resolve, reject) => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        resolve({ emailSent: true });
      })
      .catch(e => reject(e));
  });
}

export function reAuthenticateUserAndChangePassword(
  email,
  oldPassword,
  newPassword,
) {
  return new Promise((resolve, reject) => {
    const user = auth().currentUser;
    const credential = auth.EmailAuthProvider.credential(email, oldPassword);
    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        user
          .updatePassword(newPassword)
          .then(() => {
            resolve({ passwordChange: true });
          })
          .catch(e => {
            reject(e);
          });
      })
      .catch(e => reject(e));
  });
}

export function reAuthenticateUserAndChangeEmail(email, password, newEmail) {
  return new Promise((resolve, reject) => {
    return dispatch => {
      const user = auth().currentUser;
      const credential = auth.EmailAuthProvider.credential(email, password);
      user
        .reauthenticateWithCredential(credential)
        .then(() => {
          user
            .updateEmail(newEmail)
            .then(() => {
              resolve({ emailchanged: true });
              dispatch({ type: CONSTANTS.SET_EMAIL, payload: newEmail });
            })
            .catch(e => {
              reject(e);
            });
        })
        .catch(e => reject(e));
    };
  });
}

export function deleteCurrentUser() {
  return new Promise((resolve, reject) => {
    auth()
      .currentUser.delete()
      .then(() => {
        resolve({ userDeleted: true });
      })
      .catch(e => reject(e));
  });
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
    default:
      return state;
  }
}
