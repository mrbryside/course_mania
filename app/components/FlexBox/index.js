/* eslint-disable no-unused-expressions */
/**
 *
 * FlexBox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FlexParent, FlexChild } from './styles/Flex';

function FlexBox(props) {
  if (props.type === 'parent') {
    return <FlexParent {...props}>{props.children}</FlexParent>;
  }
  if (props.type === 'child') {
    return <FlexChild {...props}>{props.children}</FlexChild>;
  }
  return <div>none flex</div>;
}

FlexBox.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
};

export default memo(FlexBox);
