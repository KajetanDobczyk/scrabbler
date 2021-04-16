import * as Facebook from 'expo-facebook';
import * as SecureStore from 'expo-secure-store';

import httpClient from 'src/services/httpClient';

export const api = {
  dictionary: {
    getWordDictionaryPage: async (word: string) => {
      const { data } = await httpClient.get(`https://sjp.pl/${word}`);

      return data;
    },
  },
  user: {
    loginByFacebook: async () => {
      const { token, type } = await Facebook.logInWithReadPermissionsAsync();

      // GET USER DATA FROM FB API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`,
      );
      const user = await response.json();

      // GET PROFILE IMAGE DATA FROM FB API
      // NOTE THAT I SET THE IMAGE WIDTH TO 500 WHICH IS OPTIONAL
      const pictureResponse = await fetch(
        `https://graph.facebook.com/v8.0/${user.id}/picture?width=500&redirect=false&access_token=${token}`,
      );
      const pictureOBject = await pictureResponse.json();

      await SecureStore.setItemAsync('fbToken', token);

      return {
        ...user,
        photoUrl: pictureOBject.data.url,
      };
    },
    getLoggedInToken: async () => {
      return await SecureStore.getItemAsync('fbToken');
    },
    logout: async () => {
      return await SecureStore.deleteItemAsync('fbToken');
    },
  },
};
