export const zoneCentreCivique = {
  id: "centre_civique",
  nom: "Centre Civique",
  resume:
    "Cœur politique et religieux de Valombre, le Centre Civique rassemble les grandes institutions du pouvoir humain autour de la Place de la Fondation. Palais sévères, statues de héros et clochers de pierre claire y proclament l’ordre et la grandeur de la cité. Humains et nains s’y croisent continuellement. Les deux peuples vivent côte à côte sans véritable hostilité, mais leurs gestes, leurs coutumes et leurs silences semblent appartenir à deux mondes différents.",
  details: [
    "Les bâtiments officiels sont construits en pierre calcaire claire, selon le goût humain, mais reposent presque tous sur d’anciennes assises naines en granit sombre.",
    "Des bannières aux couleurs de Valombre pendent aux balcons, souvent ternies par la pluie, la fumée et les vents venus des montagnes.",
    "Des fonctionnaires pressés, des prêtres, des soldats, des artisans nains et des délégations étrangères encombrent les rues à toute heure du jour.",
    ],
  emplacements: [
    {
      id: "place_fondation",
      nom: "Place de la Fondation",
      resume:
        "Une vaste place pavée où convergent les principales avenues de Valombre. En son centre s’élève la statue des fondateurs humains de Valombre. Sous leurs silhouettes de marbre, presque effacées par la pluie, affleurent des blocs nains bien plus anciens.",
      details: [
        "Les dalles du pavement nain, claires et décoratives, demeurent intactes depuis des siècles, leurs dalles parfaitement ajustées semblent à la fois intemporelles et indestructibles.",
        "Les cérémonies officielles, les proclamations et les exécutions publiques ont lieu sur une estrade de pierre blanche installée devant l’Hôtel de Ville.",
        "Des marchands ambulants vendent des cierges, des rubans aux couleurs de la ville, des médailles de saints et de petites reproductions grossières des fondateurs.",
        "Les jours de pluie, l’eau disparaît dans d’antiques rigoles naines dont les humains ignorent le fonctionnement exact.",
      ],
      idsPnj: [],
    },
    {
      id: "conseil_valombre",
      nom: "Hôtel de Ville de Valombre",
      resume:
        "Siège du gouvernement humain, l’Hôtel de Ville domine la place par sa façade monumentale, ses hautes fenêtres et ses tours coiffées d’ardoise. Derrière ses portes de chêne se décident les taxes, les lois, les alliances et les guerres de Valombre. Les nains y sont reçus avec tous les égards dus à leurs clans, mais rarement avec une véritable compréhension de leurs intérêts.",
      details: [
        "La salle du Conseil est un vaste hémicycle de bois sombre, décoré de tapisseries représentant les grandes victoires humaines.",
        "Les couloirs sont remplis de scribes, de messagers, de nobles en attente d’audience et de pétitionnaires venus défendre leur cause.",
        "Les débats du Conseil sont réputés interminables. Les observateurs nains disent qu’un humain peut employer cent mots pour éviter d’en prononcer un seul qui l’engage.",
        "Une patrouille composée d’humains et de nains surveille les entrées. Elle est efficace, bien que ses membres communiquent surtout par gestes et habitudes.",
      ],
      idsPnj: ["patrouille_mixte_conseil", "envoye_caldris"],
    },
    {
      id: "cathedrale_saint_aldric",
      nom: "Cathédrale Saint-Aldric",
      resume:
        "La cathédrale élève ses deux flèches au-dessus des toits du Centre Civique. Consacrée à Saint-Aldric, protecteur des rois, des juges et des serments, elle accueille les couronnements, les funérailles officielles et les grandes célébrations de Valombre.",
      details: [
        "La nef est baignée par la lumière de vitraux représentant Saint-Aldric portant une épée dans une main et un livre de lois dans l’autre.",
        "Les tombeaux des anciens fondateurs sont alignés dans les chapelles latérales, gardés par des statues de chevaliers agenouillés.",
        "Les prêtres enseignent que les cloches protègent la cité contre les esprits malveillants. Les nains affirment qu’elles servent surtout à effrayer les oiseaux.",
        "Un grand portail de bronze, forgé par des artisans nains, représente la fondation de Valombre. Les commanditaires humains y occupent le premier plan, tandis que les forgerons ont discrètement gravé leurs propres ancêtres dans les bordures.",
        "Des cierges brûlent jour et nuit devant la statue de Saint-Aldric, mêlant leur odeur de cire à celle de la pierre humide et de l’encens.",
      ],
      idsPnj: ["geraud_veyre", "alix_marne"],
    },
    {
      id: "prison_conseil",
      nom: "Prison du Conseil",
      resume:
        "Adossée aux bâtiments administratifs, la Prison du Conseil est une forteresse basse et sans grâce, destinée aux criminels, aux espions et aux ennemis politiques. Ses niveaux supérieurs sont gardés par les hommes du Conseil, tandis que ses cachots les plus profonds, creusés dans l’ancien socle nain, semblent appartenir à une époque bien antérieure à Valombre.",
      details: [
        "Les cellules ordinaires sont étroites, froides et éclairées par de simples meurtrières donnant sur une cour intérieure.",
        "Les prisonniers importants sont détenus dans l’aile haute, où les portes sont solides mais les chambres relativement confortables.",
        "Les cachots inférieurs sont taillés directement dans le granit. Leurs portes naines ne possèdent ni serrure visible ni charnière accessible.",
        "Les gardiens humains évitent de descendre seuls dans les profondeurs, où les sons se propagent d’une manière étrange.",
        "Selon une rumeur, certains couloirs murés conduiraient à d’anciens tunnels nains passant sous l’Hôtel de Ville et la cathédrale.",
        ],
      idsPnj: [],
    },
  ],
};