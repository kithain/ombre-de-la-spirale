import React from "react";
import PropTypes from "prop-types";
import { Search } from "lucide-react";
import { cn } from "../../utils/cn";
import { useTranslation } from "react-i18next";

function SearchBar({ value, onChange, placeholder, className }) {
  const { t } = useTranslation();
  
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-md border border-surface-border bg-surface/70 transition-all duration-200",
        "focus-within:border-accent-dark focus-within:shadow-glow",
        className
      )}
    >
      <Search size={18} className="text-content-subtle" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || t("search.placeholder")}
        className="bg-transparent outline-none w-full text-sm text-content placeholder:text-content-subtle"
        aria-label={placeholder || t("search.placeholder")}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "Rechercher...",
  className: "",
};

export default SearchBar;
