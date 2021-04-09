import React from 'react';
import SegmentedControlTabBase, {
  SegmentedControlTabProperties,
} from 'react-native-segmented-control-tab';
import { useSelector } from 'react-redux';
import { css } from '@emotion/native';

import { selectTheme } from 'src/modules/Settings/store/selectors';

const SegmentedControlTab: React.FC<SegmentedControlTabProperties> = (
  props,
) => {
  const { color } = useSelector(selectTheme);

  return (
    <SegmentedControlTabBase
      {...props}
      tabsContainerStyle={css({
        marginTop: 10,
      })}
      tabStyle={css({
        backgroundColor: color.board,
        borderColor: color.boardField,
      })}
      tabTextStyle={css({
        color: color.boardField,
      })}
      activeTabStyle={css({
        backgroundColor: color.boardField,
      })}
    />
  );
};

export default SegmentedControlTab;
