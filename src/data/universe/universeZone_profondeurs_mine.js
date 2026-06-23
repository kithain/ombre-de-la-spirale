export const zoneProfondeursMine = {
  id: "profondeurs_mine",
  nom: "Profondeurs de la Mine",
  resume:
    "La Mine d’Argent s’étend sous les Terrasses naines sur huit niveaux reliés par des cages de descente, des escaliers et des galeries en pente. Les niveaux supérieurs sont encore exploités, tandis que les galeries les plus profondes ont été fermées. La Guilde des Mineurs conserve les plans du réseau.",
  details: [
    "Les galeries sont soutenues par des arches de pierre et de lourdes charpentes en bois. Des rails permettent de faire remonter le minerai jusqu’aux cages de descente.",
    "Les niveaux supérieurs sont éclairés par des lampes à huile fixées aux parois. Plus bas, seules quelques lanternes de sécurité restent allumées.",
    "La chaleur augmente avec la profondeur. L’air est chargé de poussière, d’humidité et de fines particules d’argent.",
    "Des panneaux gravés et des marques peintes indiquent les niveaux, les sorties et les galeries condamnées.",
  ],
  emplacements: [
    {
      id: "mine_argent",
      nom: "Mine d’Argent",
      resume:
        "Les cinq premiers niveaux regroupent les galeries encore exploitées. Mineurs, contremaîtres et ouvriers y travaillent autour des veines d’argent qui assurent une grande partie de la richesse de Valombre.",
      details: [
        "Les galeries principales sont assez larges pour laisser passer les wagonnets et les équipes de mineurs. Des passages plus étroits conduisent aux zones d’extraction.",
        "Le bruit des pioches, des roues métalliques et des treuils se propage dans tout le réseau.",
        "Des salles de repos ont été aménagées près des cages de descente. On y trouve des bancs, des réserves d’eau, des outils et des tableaux indiquant les équipes présentes.",
        "Les mineurs portent des tabliers de cuir épais, des casques renforcés et de petites lampes suspendues à leur ceinture.",
      ],
      idsPnj: ["durnik_chef_mineur", "kessak_mineur"],
    },
    {
      id: "galeries_silencieuses",
      nom: "Galeries Silencieuses",
      resume:
        "Les sixième et septième niveaux correspondent à d’anciens chantiers aujourd’hui fermés. Les mineurs n’y descendent plus et les accès sont bloqués par des chaînes, des barrières ou de simples panneaux d’interdiction.",
      details: [
        "Les rails sont couverts de poussière et plusieurs wagonnets vides sont restés immobilisés dans les galeries.",
        "Des outils, des caisses et du matériel de forage ont été laissés dans les anciennes zones de travail.",
        "La plupart des lampes murales sont éteintes. Certaines galeries ne sont plus éclairées du tout.",
        "Des marques de craie rouge apparaissent par endroits sur les murs, les croisements et les anciens supports de mine.",
      ],
      idsPnj: [],
    },
    {
      id: "fissure_mine_valombre",
      nom: "Galerie 7",
      resume: "La Galerie 7 est un ancien tunnel d’extraction du septième niveau. Le forage s’est arrêté au fond de la galerie, là où les mineurs ont ouvert un passage étroit dans la roche.", 
	  details: [ 
		"Le tunnel descend légèrement et se rétrécit à proximité de l’ancien front de taille.",
		"Les parois portent encore les traces des pics et des outils utilisés pour dégager la roche.",
		"Des étais, des rails inachevés et quelques outils abandonnés occupent le fond de la galerie.", 
		"L’ouverture découverte par les mineurs est irrégulière et juste assez large pour laisser passer une personne.", 
		"Un courant d’air plus froid traverse le passage depuis les profondeurs.",
	  ],
      idsPnj: [],
    },
  ],
};
