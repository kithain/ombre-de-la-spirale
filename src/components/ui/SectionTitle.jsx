import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

function SectionTitle({ title, icon: Icon, subtitle, className }) {
  return (
    <div className={cn("mb-8 border-b border-stone-800 pb-4", className)}>
      <h2 className="text-3xl font-serif text-stone-200 flex items-center gap-3">
        {Icon && <Icon className="text-amber-600" size={28} aria-hidden="true" />}
        <span>{title}</span>
      </h2>
      {subtitle && <p className="text-stone-500 mt-2 font-serif italic">{subtitle}</p>}
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  icon: null,
  subtitle: "",
  className: "",
};

export default SectionTitle;
