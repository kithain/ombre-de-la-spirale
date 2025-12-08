import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

function TabButton({ to, label, icon: Icon, className }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-6 py-4 font-serif text-lg transition-all duration-300 relative overflow-hidden group border-b-2",
          "text-content-muted hover:text-content-secondary hover:bg-surface-raised/50 border-transparent",
          isActive && "text-accent-light bg-surface-raised border-accent shadow-glow",
          className
        )
      }
    >
      {({ isActive }) => (
        <>
          {Icon && (
            <Icon
              size={20}
              className={cn(
                "transition-transform duration-300 group-hover:text-content-muted",
                isActive && "scale-110 text-accent"
              )}
            />
          )}
          <span className="relative z-10">{label}</span>
        </>
      )}
    </NavLink>
  );
}

TabButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

TabButton.defaultProps = {
  icon: null,
  className: "",
};

export default TabButton;
