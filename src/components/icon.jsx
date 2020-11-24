import React from "react";
import {
  FilterIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DashIcon,
  XIcon,
  CheckIcon,
  ZapIcon,
} from "@primer/octicons-react";

function Icon({ icon }) {
  switch (icon) {
    case "filter":
      return <FilterIcon size={16} />;
    case "xicon":
      return <XIcon size={16} />;
    case "arrowDown":
      return <ArrowDownIcon size={14} />;
    case "arrowUp":
      return <ArrowUpIcon size={14} />;
    case "dash":
      return <DashIcon size={14} />;
    case "check":
      return <CheckIcon size={10} />;
    case "zap":
      return <ZapIcon size={10} verticalAlign="" />;
    default:
      return <div style={{ width: "16px" }}></div>;
  }
}

export default Icon;
