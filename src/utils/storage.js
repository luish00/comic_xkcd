// eslit-disabeld no-unused-vars
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeValue = async ({ value, key }) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const storeData = async ({ value, key }) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getValue = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (e) {
    return null;
    // error reading value
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
    // error reading value
  }
};

const KEY_FAVORITIES = '@CDkcd_favorities';

export async function getFavorities() {
  const favorities = await getData(KEY_FAVORITIES);

  return favorities || [];
}

export async function addFavority(value) {
  const lastFavorities = await getFavorities();

  storeData({ value: [value, ...lastFavorities], key: KEY_FAVORITIES });
}

export async function removeFavority(page) {
  const lastFavorities = await getFavorities();

  storeData({
    value: lastFavorities.filter((item) => item.page !== page),
    key: KEY_FAVORITIES,
  });
}
