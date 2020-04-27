import auth from '@react-native-firebase/auth';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

export function login({ email, password }) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST, email });
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILED, error: err });
      });
  };
}

export function checkAuthentication() {
  auth().onAuthStateChanged(user => {
    this.props.navigation.navigate(user ? 'Main' : 'Auth');
  });
}

export function isLoggedIn() {
  let loggedIn = false;
  auth().currentUser(user => {
    if (user) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    return loggedIn;
  });
}

const initialState = {
  authenticated: false,
  isLoggingIn: false,
  loginFailed: false,
  test: null,
};

export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authenticated: false,
        isLoggingIn: true,
        loginFailed: false,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        isLoggingIn: false,
        loginFailed: false,
        loginError: null,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        authenticated: false,
        isLoggingIn: false,
        loginFailed: true,
        loginError: action.error,
      };

    default:
      return state;
  }
}
