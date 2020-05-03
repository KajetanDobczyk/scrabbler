export type Letter =
  | '?'
  | 'a'
  | 'ą'
  | 'b'
  | 'c'
  | 'ć'
  | 'd'
  | 'e'
  | 'ę'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'ł'
  | 'm'
  | 'n'
  | 'ń'
  | 'o'
  | 'ó'
  | 'p'
  | 'r'
  | 's'
  | 'ś'
  | 't'
  | 'u'
  | 'w'
  | 'y'
  | 'z'
  | 'ż'
  | 'ź';

export enum DictionaryScreen {
  Home = 'Słownik',
  TwoLettersWords = 'Dwuliterówki',
}

export type DictionaryTabParamList = Record<DictionaryScreen, any>;

export interface IWordSearch {
  word: string;
  isAllowed: boolean;
  description?: string;
}
