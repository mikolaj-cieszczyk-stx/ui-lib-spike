import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';

export const Icon: React.FC<FontAwesomeIconProps> = (props) => {
  return <FontAwesomeIcon {...props} />;
};
