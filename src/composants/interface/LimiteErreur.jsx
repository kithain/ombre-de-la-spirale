import React from "react";
import { AlertTriangle } from "lucide-react";

/**
 * Composant LimiteErreur - Error Boundary pour capturer les erreurs de rendu React
 * Affiche un message d'erreur convivial au lieu d'un écran blanc
 */
class LimiteErreur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aUneErreur: false, erreur: null };
  }

  static getDerivedStateFromError(erreur) {
    return { aUneErreur: true, erreur };
  }

  componentDidCatch(erreur, infoErreur) {
    console.error("[LimiteErreur] Erreur capturée :", erreur, infoErreur);
  }

  render() {
    if (this.state.aUneErreur) {
      return (
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center space-y-4">
          <AlertTriangle className="w-12 h-12 text-amber-400" />
          <h2 className="text-lg font-serif text-accent-light">
            Une erreur est survenue
          </h2>
          <p className="text-sm text-content-muted max-w-md">
            Cette section a rencontré un problème. Essayez de recharger la page
            ou de naviguer vers une autre section.
          </p>
          {this.state.erreur && (
            <pre className="text-xs text-content-subtle bg-surface-raised border border-surface-border p-3 max-w-lg overflow-auto">
              {this.state.erreur.message}
            </pre>
          )}
          <button
            onClick={() => this.setState({ aUneErreur: false, erreur: null })}
            className="px-4 py-2 text-sm border border-accent-muted text-accent-light hover:border-accent transition-colors"
          >
            Réessayer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default LimiteErreur;
