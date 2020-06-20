import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItem,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Logo from 'src/layout/components/Logo';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import { DictionaryScreen } from 'src/modules/Dictionary/interfaces';

type Props = React.PropsWithChildren<
  DrawerContentComponentProps<DrawerContentOptions>
>;

const DrawerContent: React.FC<Props> = (props) => {
  const { t } = useTranslation('dictionary');
  const { color } = useSelector(selectTheme);

  return (
    <>
      <Logo />
      <DrawerItem
        label={t('routeName')}
        onPress={() => props.navigation.navigate(DictionaryScreen.Home)}
        activeTintColor={color.white}
        inactiveTintColor={color.white}
      />
      <DrawerItem
        label={t('twoLettersWords')}
        onPress={() =>
          props.navigation.navigate(DictionaryScreen.TwoLettersWords)
        }
        activeTintColor={color.white}
        inactiveTintColor={color.white}
      />
    </>
  );
};

export default DrawerContent;
