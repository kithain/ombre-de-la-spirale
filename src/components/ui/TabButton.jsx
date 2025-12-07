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
          "text-stone-500 hover:text-stone-300 hover:bg-stone-900/50 border-transparent",
          isActive && "text-amber-400 bg-stone-900 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
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
                "transition-transform duration-300 group-hover:text-stone-400",
                isActive && "scale-110 text-amber-500"
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
