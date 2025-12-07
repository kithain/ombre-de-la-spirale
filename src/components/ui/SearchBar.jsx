import React from "react";
import PropTypes from "prop-types";
import { Search } from "lucide-react";
import { cn } from "../../utils/cn";

function SearchBar({ value, onChange, placeholder, className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-md border border-stone-800 bg-stone-950/70",
        "focus-within:border-amber-700 focus-within:shadow-[0_0_0_1px_rgba(217,119,6,0.35)]",
        className
      )}
    >
      <Search size={18} className="text-stone-500" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none w-full text-sm text-stone-200 placeholder:text-stone-600"
        aria-label={placeholder || "Recherche"}
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
