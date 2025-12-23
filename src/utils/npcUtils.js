export function getFpVariant(fp) {
  const num = parseFp(fp);
  if (num >= 10) return "Boss";
  if (num >= 7) return "Combat";
  if (num >= 4) return "Tension";
  return "Social";
}

export function parseFp(fp) {
  if (fp === undefined || fp === null) return 0;
  if (typeof fp === 'number') return fp;
  const str = String(fp).trim();
  if (str.includes('/')) {
    const parts = str.split('/');
    if (parts.length === 2) {
      return parseFloat(parts[0]) / parseFloat(parts[1]);
    }
  }
  return parseFloat(str) || 0;
}

export function getCategoryBadge(category) {
  switch (category) {
    case 'monstres':
      return { label: 'Monstre', className: 'bg-purple-900/20 text-purple-300 border-purple-800/30' };
    case 'ennemis':
      return { label: 'Ennemi', className: 'bg-red-900/20 text-red-300 border-red-800/30' };
    case 'allies':
      return { label: 'Allié', className: 'bg-blue-900/20 text-blue-300 border-blue-800/30' };
    default:
      return null;
  }
}
