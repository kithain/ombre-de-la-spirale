import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const variants = {
  solid: "bg-accent text-surface hover:bg-accent-light border-transparent font-semibold",
  outline: "bg-transparent text-accent-light border border-accent-dark hover:bg-accent-surface",
  ghost: "bg-transparent text-content-secondary hover:bg-surface-overlay/60 border-transparent",
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
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
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
