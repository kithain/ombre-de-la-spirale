import React, { useEffect } from "react";
import { NavLink, Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Map, Shield, Skull, ScrollText } from "lucide-react";
import { cn } from "./utils/cn";
import SearchBar from "./components/ui/SearchBar";
import { useSearch } from "./hooks/useSearch";
import { usePersistentState } from "./hooks/usePersistentState";

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
  const [lastRoute, setLastRoute] = usePersistentState("last-route", null);

  useEffect(() => {
    if (location.pathname !== "/") {
      setLastRoute(location.pathname + location.search);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/" && lastRoute && lastRoute !== "/") {
      navigate(lastRoute, { replace: true });
    }
  }, [location.pathname, lastRoute, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-raised to-surface text-content">
      <header className="border-b border-surface-border bg-surface/80 backdrop-blur-md sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-accent-surface border border-accent-muted text-accent">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-content-subtle">Wiki de campagne</p>
              <h1 className="text-xl font-serif text-accent-light">L&apos;Ombre de la Spirale</h1>
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
                <div className="absolute mt-2 w-full bg-surface border border-surface-border rounded-md shadow-xl z-20 max-h-72 overflow-auto animate-slide-down">
                  <ul className="divide-y divide-surface-border">
                    {results.map((item, idx) => (
                      <li key={`${item.type}-${idx}`}>
                        <Link
                          to={item.path}
                          onClick={clear}
                          className="flex flex-col gap-1 px-3 py-2 hover:bg-surface-raised transition-colors"
                        >
                          <span className="text-xs uppercase tracking-widest text-accent">
                            {item.type}
                          </span>
                          <span className="text-sm text-content">{item.title}</span>
                          {item.description && (
                            <span className="text-xs text-content-muted line-clamp-2">
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
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 border",
                    "border-surface-border bg-surface-raised/60 hover:border-accent-muted hover:text-accent-light",
                    isActive && "text-accent-light border-accent-dark bg-surface-raised shadow-glow"
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
