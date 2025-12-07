import React, { useEffect } from "react";
import { NavLink, Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Map, Shield, Skull, ScrollText } from "lucide-react";
import { cn } from "./utils/cn";
import SearchBar from "./components/ui/SearchBar";
import { useSearch } from "./hooks/useSearch";

const navItems = [
  { to: "/univers", label: "Univers", icon: Map },
  { to: "/factions", label: "Factions", icon: Shield },
  { to: "/antagoniste", label: "Antagoniste", icon: Skull },
  { to: "/scenarios", label: "Scénarios", icon: ScrollText },
];

function Layout() {
  const { term, setTerm, results, clear } = useSearch();
  const location = useLocation();
  const navigate = useNavigate();

  // Persister la dernière route visitée et restaurer si on arrive sur /
  useEffect(() => {
    if (location.pathname !== "/") {
      window.localStorage.setItem("last-route", location.pathname + location.search);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/") {
      const last = window.localStorage.getItem("last-route");
      if (last && last !== "/") {
        navigate(last, { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      <header className="border-b border-stone-800 bg-stone-950/70 backdrop-blur-md sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-amber-900/20 border border-amber-800/50 text-amber-400">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500">Wiki de campagne</p>
              <h1 className="text-xl font-serif text-amber-300">L&apos;Ombre de la Spirale</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <SearchBar
                value={term}
                onChange={setTerm}
                placeholder="Rechercher (PNJ, lieux, scénarios...)"
              />
              {term.trim().length >= 2 && results.length > 0 && (
                <div className="absolute mt-2 w-full bg-stone-950 border border-stone-800 rounded-md shadow-xl z-20 max-h-72 overflow-auto">
                  <ul className="divide-y divide-stone-800">
                    {results.map((item, idx) => (
                      <li key={`${item.type}-${idx}`}>
                        <Link
                          to={item.path}
                          onClick={clear}
                          className="flex flex-col gap-1 px-3 py-2 hover:bg-stone-900 transition-colors"
                        >
                          <span className="text-xs uppercase tracking-widest text-amber-500">
                            {item.type}
                          </span>
                          <span className="text-sm text-stone-100">{item.title}</span>
                          {item.description && (
                            <span className="text-xs text-stone-500 line-clamp-2">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <nav className="flex items-center gap-2">
            {navItems.map(({ to, label, icon }) => {
              const IconComp = icon;
              return (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors border",
                    "border-stone-800 bg-stone-900/60 hover:border-amber-800/60 hover:text-amber-200",
                    isActive && "text-amber-300 border-amber-700 bg-stone-900 shadow-inner"
                  )
                }
              >
                <IconComp size={16} />
                {label}
              </NavLink>
              );
            })}
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
