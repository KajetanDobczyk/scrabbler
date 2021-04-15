import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAsyncStorageData = async (
  key: string,
  value: string | Object,
) => {
  try {
    await AsyncStorage.setItem(
      key,
      typeof value === 'object' && value !== null
        ? JSON.stringify(value)
        : value,
    );
  } catch (e) {}
};

export const getAsyncStorageStringData = async (
  key: string,
): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (typeof value === 'string') {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    // error reading value
    return null;
  }
};

export const getAsyncStorageObjectData = async (
  key: string,
): Promise<Object | null> => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (typeof value === 'object') {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    // error reading value
    return null;
  }
};
