import AsyncStorage from '@react-native-async-storage/async-storage';
import { CONSTANTS } from '../constants/generalConstants';


export const getFromAsyncStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(`Error Occured While Getting ${key} from Async Storage`);
  }
};

export const isValidFileSizeUsingBytes = (bytes: number) => {
  return bytes <= CONSTANTS.fileSize;
};

export const isValidFileSizeUsingBase64 = (base64: string) => {
  const bytes = base64.length * (3 / 4) - 2;
  return (bytes / 1024).toFixed(2);
};
