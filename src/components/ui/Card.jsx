import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-surface-raised border border-surface-border rounded-md p-6 shadow-xl relative overflow-hidden transition-shadow duration-300 hover:shadow-glow",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-surface-border before:to-transparent",
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
