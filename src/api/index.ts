import httpClient from 'src/services/httpClient';

export const api = {
  getWordDictionaryPage: async (word: string) => {
    const { data } = await httpClient.get(`https://sjp.pl/${word}`);

    return data;
  },
};
