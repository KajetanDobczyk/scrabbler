import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

import Logo from 'src/layout/components/Logo';
import { selectTheme } from 'src/modules/Settings/store/selectors';

type Props = React.PropsWithChildren<
  DrawerContentComponentProps<DrawerContentOptions>
>;

const DrawerContent: React.FC<Props> = (props) => {
  const { color } = useSelector(selectTheme);

  return (
    <>
      <Logo />
      <DrawerItemList
        {...props}
        activeTintColor={color.white}
        inactiveTintColor={color.white}
      />
    </>
  );
};

export default DrawerContent;
