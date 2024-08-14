import React from "react";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export const Icon: React.FC<FontAwesomeIconProps> = (props) => {
  return <FontAwesomeIcon {...props} />;
};
