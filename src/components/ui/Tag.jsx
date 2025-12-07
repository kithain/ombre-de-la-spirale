import React from "react";
import PropTypes from "prop-types";
import { TAG_VARIANTS } from "../../utils/constants";
import { cn } from "../../utils/cn";

function Tag({ type, children, className }) {
  const style = TAG_VARIANTS[type] || "bg-stone-800 text-stone-400 border-stone-700";

  return (
    <span
      className={cn(
        "text-xs px-2 py-1 rounded border uppercase tracking-wider font-semibold",
        style,
        className
      )}
    >
      {children || type}
    </span>
  );
}

Tag.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Tag.defaultProps = {
  type: "",
  children: null,
  className: "",
};

export default Tag;
