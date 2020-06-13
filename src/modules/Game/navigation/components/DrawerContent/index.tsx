import React from 'react';
import {
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import { color } from 'src/theme';
import Logo from 'src/layout/components/Logo';
import { GameScreen } from 'src/modules/Game/interfaces';

type Props = React.PropsWithChildren<
  DrawerContentComponentProps<DrawerContentOptions>
>;

const DrawerContent: React.FC<Props> = (props) => (
  <>
    <Logo />
    <DrawerItem
      label={GameScreen.NewGame}
      onPress={() => props.navigation.navigate(GameScreen.NewGame)}
      activeTintColor={color.white}
      inactiveTintColor={color.white}
    />
  </>
);

export default DrawerContent;
