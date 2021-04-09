import React from 'react';
import SegmentedControlTabBase, {
  SegmentedControlTabProperties,
} from 'react-native-segmented-control-tab';
import { useSelector } from 'react-redux';

import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

const SegmentedControlTab: React.FC<SegmentedControlTabProperties> = (
  props,
) => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <SegmentedControlTabBase
      {...props}
      tabsContainerStyle={themedStyles.controlTabWrapper}
      tabStyle={themedStyles.controlTab}
      tabTextStyle={themedStyles.controlTabText}
      activeTabStyle={themedStyles.activeControlTab}
    />
  );
};

export default SegmentedControlTab;
