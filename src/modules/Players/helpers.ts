import * as Facebook from 'expo-facebook';

import { FB_APP_ID } from 'src/config';

export const initSocialLogin = async () => {
  try {
    await Facebook.initializeAsync({
      appId: FB_APP_ID,
      appName: 'Scrabbler',
    });
  } catch (e) {
    console.log(e);
  }
};
