import { Users, Shield, Sparkles, Eye } from "lucide-react";

export const factionsData = [
  {
    name: "Le Conseil (Politique)",
    type: "Administration",
    desc: "Le Bourgmestre est un humain honnête mais dépassé. Il est obsédé par le maintien de la paix entre Nains et Mages pour que le commerce tourne.",
    icon: Users,
    color: "text-blue-400 border-blue-900 bg-blue-950/30",
    hierarchy: [
      { role: "Bourgmestre", npcId: "bourgmestre", notes: "Autorité civile, cherche l'équilibre." },
      { role: "Capitaine de la Garde urbaine", npcId: "capitaine_garde_urbaine", notes: "Sécurité, couvre-feu, siège." },
      { role: "Geôlier du Conseil", npcId: "geolier_principal", notes: "Prisons politiques, interrogatoires." }
    ],
    npcIds: ["bourgmestre", "capitaine_garde_urbaine", "geolier_principal"]
  },
  {
    name: "Faction Nains",
    type: "Foi & Mineurs",
    desc: "Le bloc nain réunit les mineurs et le Temple-Forgeron : gardiens du savoir ancestral, protecteurs des galeries et des reliques sacrées.",
    icon: Shield,
    color: "text-amber-400 border-amber-900 bg-amber-950/30",
    hierarchy: [
      { role: "Chef de la Guilde des Mineurs", npcId: "durnik_chef_mineur", notes: "Voix des mineurs, meneur de grève." },
      { role: "Haut Clerc / Prêtre du Temple-Forgeron", npcId: "thorgar_pretre_nain", notes: "Avertit sur la Spirale, soutien moral." },
      { role: "Contremaître sécurité mine", npcId: "contremaitre_nain_mine", notes: "Logistique, sécurité des galeries." },
      { role: "Capitaine de la Garde du Temple", npcId: "capitaine_garde_temple", notes: "Organise la défense et les patrouilles sacrées." },
      { role: "Gardien du Cimetière", npcId: "gardien_cimetiere", notes: "Veille sur les sépultures et détecte les profanations." }
    ],
    npcIds: [
      "durnik_chef_mineur",
      "thorgar_pretre_nain",
      "contremaitre_nain_mine",
      "capitaine_garde_temple",
      "gardien_cimetiere"
    ]
  },
  {
    name: "La Guilde des Mages",
    type: "Les Ambitieux",
    desc: "Prestige intellectuel et force militaire. Officiellement contre la nécromancie, mais Thade Coren a infiltré le Cercle Intérieur et radicalise les étudiants.",
    icon: Sparkles,
    color: "text-purple-400 border-purple-900 bg-purple-950/30",
    hierarchy: [
      { role: "Cercle Intérieur", npcId: "thade_coren", notes: "Antagoniste, contrôle la Tour." },
      { role: "Archimage défecteur", npcId: "archimage_defecteur", notes: "Sabote Thade de l'intérieur." },
      { role: "Maître loyaliste", npcId: "magi_tuteur_loyal", notes: "Défend la Tour contre tous." },
      { role: "Apprenti favori", npcId: "kaelen_vampire", notes: "Garde du toit, bras droit vampirique." }
    ],
    npcs: ["thade_coren", "archimage_defecteur", "magi_tuteur_loyal", "kaelen_vampire", "bibliothecaire_interdits"]
  },
  {
    name: "Réseau des Ombres",
    type: "Assassins & Informateurs",
    desc: "Intermédiaires discrets, chasseurs de primes et opportunistes qui profitent du chaos pour tirer les ficelles dans l'ombre.",
    icon: Eye,
    color: "text-emerald-300 border-emerald-900 bg-emerald-950/30",
    hierarchy: [
      { role: "Courtier invisible", npcId: "marchand_fou_mercane", notes: "Marchand d'informations et d'artefacts." },
      { role: "Assassin Masqué", npcId: "assassin_masque", notes: "Tueur à gages lié aux complots urbains." },
      { role: "Éclaireuse perdue", npcId: "lysa_exploratrice_perdue", notes: "Guide occasionnelle pour qui paye ou sauve sa peau." }
    ],
    npcs: ["marchand_fou_mercane", "assassin_masque", "lysa_exploratrice_perdue"]
  }
];
