import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const variants = {
  solid: "bg-amber-600 text-stone-950 hover:bg-amber-500 border-transparent",
  outline: "bg-transparent text-amber-300 border border-amber-700 hover:bg-amber-900/20",
  ghost: "bg-transparent text-stone-200 hover:bg-stone-800/60 border-transparent",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

function Button({ children, variant, size, className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded transition-colors font-medium tracking-wide",
        "focus:outline-none focus-visible:ring focus-visible:ring-amber-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  variant: "solid",
  size: "md",
  className: "",
};

export default Button;
