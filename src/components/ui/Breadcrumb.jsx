import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

function Breadcrumb({ items, className }) {
  return (
    <nav aria-label="Fil d’Ariane" className={cn("text-sm text-stone-400", className)}>
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <a
                href={item.href}
                className="text-amber-300 hover:text-amber-200 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-stone-200">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="text-stone-600">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  className: "",
};

export default Breadcrumb;
