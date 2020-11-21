import React from "react";
import {
  FilterIcon,
  ArrowDownIcon,
  XIcon,
  CheckIcon,
} from "@primer/octicons-react";

function Icon({ icon }) {
  switch (icon) {
    case "filter":
      return <FilterIcon size={16} />;
    case "xicon":
      return <XIcon size={16} />;
    case "arrowDown":
      return <ArrowDownIcon size={10} />;
    case "check":
      return <CheckIcon size={10} />;
    default:
      return <div style={{ width: "16px" }}></div>;
  }
}

export default Icon;
