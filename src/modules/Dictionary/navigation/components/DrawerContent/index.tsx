import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItemList,
} from '@react-navigation/drawer';

import Logo from 'src/layout/components/Logo';
import { color } from 'src/theme';

type Props = React.PropsWithChildren<
  DrawerContentComponentProps<DrawerContentOptions>
>;

const DrawerContent: React.FC<Props> = (props) => (
  <>
    <Logo />
    <DrawerItemList
      {...props}
      activeTintColor={color.white}
      inactiveTintColor={color.white}
    />
  </>
);

export default DrawerContent;
