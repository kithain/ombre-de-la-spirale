import { useEffect, useMemo, useState } from "react";
import { buildSearchEngine, filterSearch } from "../utils/searchUtils";

export function useSearch() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const { fuse } = useMemo(() => buildSearchEngine(), []);

  useEffect(() => {
    setResults(filterSearch(term, fuse));
  }, [term, fuse]);

  return {
    term,
    setTerm,
    results,
    clear: () => setTerm(""),
  };
}
