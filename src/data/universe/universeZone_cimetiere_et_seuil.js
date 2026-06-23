export const zoneCimetiereEtSeuil = {
  id: "cimetiere_et_seuil",
  nom: "Cimetière des Terrasses",
  resume:
    "Aménagé sur le flanc de la colline, en contrebas du quartier des Mineurs, le Cimetière des Terrasses accueille depuis des siècles les morts des clans nains de Valombre. Ses sépultures austères descendent en gradins tribunaux entre des murs de granit sombre, loin des tombeaux monumentaux et des statues héroïques de la ville humaine. Au centre des terrasses reposent les Sept Thanes, anciens fondateurs dont les noms sont encore honorés alors même que la véritable fonction de leurs tombes a été oubliée.",
  details: [
    "Le cimetière est construit en terrasses étroites retenues par d’épais murs de granit. Des escaliers tribunaux relient les différents niveaux, chacun réservé à un clan, une lignée ou une ancienne confrérie de mineurs.",
    "Les tombes naines ne portent ni portraits ni longues épitaphes. Une rune familiale, un nom et quelques marques indiquant les serments tenus par le défunt suffisent à préserver sa mémoire.",
    "Des lanternes funéraires en pierre bordent les allées, afin de guider les âmes des morts sur leur dernier chemin.",
    "Les visiteurs humains y sont rares. Aucun décret ne leur interdit officiellement l’accès, mais ceux qui s’y rendent sans raison particulière sont rarement bien accueillis.",
  ],
  emplacements: [
    {
      id: "cimetiere_thanes",
      nom: "Terrasses des Sept Thanes",
      resume:
        "Les plus anciennes sépultures du cimetière occupent sept gradins disposés autour d’une allée centrale. Chacun abrite la tombe de l’un des Thanes qui conduisirent les premiers clans sous la montagne. Leurs dalles massives, dépourvues d’ornements précieux, semblent modestes au regard de l’importance que leur accordent encore les prêtres nains.",
      details: [
        "Les sept tombes sont fermées par de lourdes dalles de granit sombre posée sur un soubassement profondément ancré dans la colline. Les pierres sont parfaitement ajustées, sans mortier visible ni serrure accessible.",
        "Au premier regard, les sépultures des Sept Thanes ne présentent rien d’inhabituel et ressemblent aux autres tombes anciennes du cimetière.",
        "Les dalles portent seulement le nom de chaque Thane, sa rune de clan et quelques signes anciens dont la signification s’est perdue.",
        "Le lieu est régulièrement entretenu par les familles et les prêtres du Temple-Forgeron. Les allées sont propres et aucune offrande ne reste longtemps abandonnée.",
      ],
      idsPnj: ["jaren_velt"],
    },
    {
      id: "mausolee_seuil",
      nom: "Mausolée du Seuil",
      resume:
        "À l’extrémité basse du cimetière se trouve un ancien mausolée nain, construit avant l’aménagement des terrasses actuelles. Il n’abrite aucun défunt connu et reste fermé en dehors de certaines cérémonies du Temple-Forgeron.",
      details: [
        "Le bâtiment est bas, massif et entièrement construit en granit sombre. Sa façade ne porte aucune statue ni décoration.",
        "Une lourde porte de pierre en ferme l’entrée. Les runes gravées autour de son cadre sont anciennes et difficiles à lire.",
        "L’intérieur se compose d’une salle circulaire presque vide. Une grande dalle de pierre en occupe le centre.",
        "Des signes liés au rite d’Edhrek-Murn sont gravés sur la dalle et le long des murs, mais même les prêtres nains ne connaissent plus leur signification complète.",
        "Le mausolée est froid et silencieux. Thorgar s’y retire parfois pour prier loin du reste du temple.",
      ],
      idsPnj: ["thorgar_pretre_nain"],
    },
    {
      id: "puits_spirale_abime",
      nom: "Puits de l’Abîme",
      resume:
        "Sous la dale centrale du mausolée se trouve un ancien puits vertical taillé dans la roche. Son ouverture est habituellement dissimulée et les prêtres du Temple-Forgeron n’en connaissent plus l’usage exact.",
      details: [
        "Le bord du puits est entouré d’anneaux de fer noir et de plusieurs attaches anciennes, rongées par la rouille.",
        "Des encoches régulières ont été taillées dans les parois, mais les premières sont trop éloignées pour permettre une descente sans équipement.",
        "Un courant d’air froid remonte des profondeurs et fait parfois vibrer les anneaux de fer.",
        "Quelques runes très anciennes sont encore visibles autour de l’ouverture. Elles sont trop abîmées pour être traduites avec certitude.",
        "La profondeur du puits est impossible à estimer depuis le mausolée. La lumière des lanternes disparaît rapidement dans l’obscurité.",
      ],
      idsPnj: [],
    },
  ],
};