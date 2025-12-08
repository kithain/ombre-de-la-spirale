import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

function Breadcrumb({ items, className }) {
  return (
    <nav aria-label="Fil d’Ariane" className={cn("text-sm text-content-muted", className)}>
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <a
                href={item.href}
                className="text-accent-light hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-content">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="text-content-subtle">/</span>}
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
