import React from 'react';
import {
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

import Logo from 'src/layout/components/Logo';
import { GameScreen } from 'src/modules/Game/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import { useTranslation } from 'react-i18next';

type Props = React.PropsWithChildren<
  DrawerContentComponentProps<DrawerContentOptions>
>;

const DrawerContent: React.FC<Props> = (props) => {
  const { t } = useTranslation('game');
  const { color } = useSelector(selectTheme);

  return (
    <>
      <Logo />
      <DrawerItem
        label={t('newGame.title')}
        onPress={() => props.navigation.navigate(GameScreen.NewGame)}
        activeTintColor={color.white}
        inactiveTintColor={color.white}
      />
    </>
  );
};

export default DrawerContent;
