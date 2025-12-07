import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-stone-900 border border-stone-800 rounded-sm p-6 shadow-xl relative overflow-hidden",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-transparent before:via-stone-700 before:to-transparent before:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: "",
};

export default Card;
