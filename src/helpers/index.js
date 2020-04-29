import AsyncStorage from '@react-native-community/async-storage';
import globalStr from '../../global';
import { showMessage, hideMessage } from 'react-native-flash-message';

export const showErrorMessage = errorMessage => {
  showMessage({
    message: errorMessage,
    type: 'warning',
  });
};

export const showSuccessMessage = successMessage => {
  showMessage({
    message: successMessage,
    type: 'success',
  });
};

export const getUserToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      showErrorMessage('No token is set!');
      return false;
    }

    return token;
  } catch (e) {
    showErrorMessage(e);
  }

  return true;
};

export const getEditDates = editCaptures => {
  let ret = [];
  ret = [];
  editCaptures.forEach(edit => {
    ret.push(edit.editDate);
  });

  return ret;
};

export const getDate = () => {
  return new Date().toISOString().substr(0, 10);
};

export const emailPattern = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
);
