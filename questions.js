/**
 * BANQUE DE QUESTIONS ALIGNÉE SUR LE PROGRAMME D'ONBOARDING JUNIOR (S1 / S2)
 * 5 modules x 5 questions = 25 questions adaptées
 */

window.ALL_QUESTIONS = [
  // ==========================================
  // MODULE 1 : Écosystème programmatique (Semaine 1)
  // Objectif : Rôle des acteurs, 4 types de deals, CM360 vs DV360
  // ==========================================
  {
    id: 1,
    module: "Écosystème programmatique",
    question: "Dans la suite Google Marketing Platform (GMP), pourquoi utilise-t-on conjointement Campaign Manager 360 (CM360) et Display & Video 360 (DV360) ?",
    options: [
      "CM360 sert d'Ad Server central pour héberger les créas et centraliser la mesure, tandis que DV360 est le DSP qui achète les inventaires aux enchères",
      "CM360 achète les espaces publicitaires sur les réseaux sociaux et DV360 gère la facturation comptable",
      "DV360 est réservé uniquement aux campagnes Search et CM360 aux campagnes Display",
      "Il est obligatoire d'utiliser les deux pour pouvoir acheter de l'espace sur YouTube"
    ],
    correct: 0
  },
  {
    id: 2,
    module: "Écosystème programmatique",
    question: "Un annonceur souhaite réserver en exclusivité la page d'accueil d'un grand quotidien pour le Black Friday, avec un volume garanti de 1 million d'impressions à un prix CPM fixe. Quel type de deal devez-vous mettre en place ?",
    options: [
      "Programmatic Guaranteed (PG)",
      "Preferred Deal",
      "Private Marketplace (PMP)",
      "Open Auction (Enchères ouvertes)"
    ],
    correct: 0
  },
  {
    id: 3,
    module: "Écosystème programmatique",
    question: "Lorsqu'un internaute charge une page web avec un espace publicitaire, quel acteur côté éditeur reçoit l'espace disponible et interroge les DSPs pour recevoir des offres d'enchères ?",
    options: [
      "La SSP (Supply-Side Platform)",
      "La DMP de l'annonceur",
      "L'Ad Server de l'agence média",
      "Le navigateur web de l'internaute"
    ],
    correct: 0
  },
  {
    id: 4,
    module: "Écosystème programmatique",
    question: "Quelle est la principale différence entre un Preferred Deal et une enchère privée (PMP - Private Marketplace) ?",
    options: [
      "Le Preferred Deal se fait à prix fixe (1 acheteur / 1 vendeur), tandis que le PMP est une enchère fermée entre plusieurs acheteurs invités au-dessus d'un prix plancher",
      "Le Preferred Deal garantit la diffusion de 100% du budget, pas le PMP",
      "Le PMP ne fonctionne que sur les formats vidéo sur smartphone",
      "Le Preferred Deal ne passe par aucune SSP"
    ],
    correct: 0
  },
  {
    id: 5,
    module: "Écosystème programmatique",
    question: "Dans le parcours d'une impression en Real-Time Bidding (RTB), que contient la 'Bid Request' envoyée au DSP ?",
    options: [
      "Les informations sur l'impression disponible (emplacement, format, URL de la page, appareil)",
      "La facture définitive du coût de l'affichage",
      "Le fichier image ou vidéo de la publicité finale prête à être affichée",
      "Le relevé bancaire de l'éditeur du site"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 2 : Ciblage & audiences (Semaine 2)
  // Objectif : Typologies d'audiences, capping, choix selon brief
  // ==========================================
  {
    id: 6,
    module: "Ciblage & audiences",
    question: "Un client e-commerce souhaite acquérir de nouveaux clients sans recibler les personnes qui ont déjà acheté sur son site ce mois-ci. Quelle configuration appliquez-vous sur votre Line Item ?",
    options: [
      "Exclure la liste d'audience 1st Party 'Acheteurs récents (30 jours)' du ciblage de la campagne",
      "Activer un ciblage géographique sur la ville du siège de l'entreprise uniquement",
      "Augmenter le CPM max pour dépasser la concurrence",
      "Cibler uniquement les personnes connectées en 4G"
    ],
    correct: 0
  },
  {
    id: 7,
    module: "Ciblage & audiences",
    question: "Pourquoi est-il indispensable de configurer un 'Frequency Capping' (limitation de la fréquence d'exposition) sur une campagne Display ?",
    options: [
      "Pour éviter de saturer le même internaute avec la même annonce et préserver le budget en maximisant la couverture sur des profils uniques",
      "Pour forcer l'internaute à cliquer au bout de la 3ème vue",
      "Pour limiter la vitesse de téléchargement de la page web",
      "Pour empêcher les concurrents d'apercevoir votre publicité"
    ],
    correct: 0
  },
  {
    id: 8,
    module: "Ciblage & audiences",
    question: "Comment qualifie-t-on une audience constituée des visiteurs de votre site web ou des adresses emails issues de votre propre CRM ?",
    options: [
      "Audience First-Party (1st Party)",
      "Audience Third-Party (3rd Party)",
      "Audience Contextuelle",
      "Audience d'inventaire Open Exchange"
    ],
    correct: 0
  },
  {
    id: 9,
    module: "Ciblage & audiences",
    question: "Pour une marque d'articles de randonnée qui souhaite toucher des passionnés de montagne sans utiliser de données personnelles ni de cookies, quel ciblage est le plus recommandé ?",
    options: [
      "Le ciblage contextuel (diffuser sur des pages et articles traitant de randonnée, trek et nature)",
      "Le retargeting des paniers abandonnés",
      "Le ciblage démographique exclusif des 18-24 ans",
      "L'achat de bases emails externes non qualifiées"
    ],
    correct: 0
  },
  {
    id: 10,
    module: "Ciblage & audiences",
    question: "Quel est le principe d'une audience 'Lookalike' (ou audience similaire) créée dans un DSP ?",
    options: [
      "L'algorithme analyse les caractéristiques communes d'une audience source (ex: vos meilleurs acheteurs) pour trouver de nouveaux internautes aux profils similaires",
      "Elle clone exactement les adresses IP de vos clients existants",
      "Elle diffuse la publicité uniquement aux abonnés des réseaux sociaux de vos concurrents",
      "Elle remplace automatiquement les créatives selon l'âge du visiteur"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 3 : Formats & créas (Semaine 2)
  // Objectif : Association format / funnel, conformité specs
  // ==========================================
  {
    id: 11,
    module: "Formats & créas",
    question: "Parmi les formats Display classiques, quelles dimensions correspondent au format très populaire appelé 'Pavé' (Medium Rectangle) ?",
    options: [
      "300 x 250 pixels",
      "728 x 90 pixels",
      "120 x 600 pixels",
      "320 x 50 pixels"
    ],
    correct: 0
  },
  {
    id: 12,
    module: "Formats & créas",
    question: "Lors du contrôle qualité (QA) d'un kit de bannières HTML5 fourni par le graphiste, quelle anomalie empêchera la mise en ligne sur le DSP ?",
    options: [
      "Le poids de l'archive ZIP dépasse la limite autorisée par le DSP (ex: le fichier pèse 1,2 Mo au lieu de 150 Ko max)",
      "La bannière utilise des couleurs vives non validées par Google",
      "Le texte de la bannière est rédigé en français",
      "La bannière comporte un logo situé dans le coin supérieur gauche"
    ],
    correct: 0
  },
  {
    id: 13,
    module: "Formats & créas",
    question: "Quelle est la particularité d'un format vidéo 'Outstream' par rapport à un format 'Instream' ?",
    options: [
      "L'Outstream s'affiche au cœur d'un article de texte au scroll de la page sans nécessiter de lecteur vidéo de contenu, alors que l'Instream est diffusé dans un contenu vidéo (Pre-roll/Mid-roll)",
      "L'Outstream ne peut être diffusé que sur les téléviseurs connectés",
      "L'Outstream dure obligatoirement plus de 2 minutes",
      "L'Outstream diffuse obligatoirement avec le son activé à 100%"
    ],
    correct: 0
  },
  {
    id: 14,
    module: "Formats & créas",
    question: "Quel format publicitaire est conçu pour s'intégrer harmonieusement à la charte éditoriale du site support (ressemblant aux articles du média) ?",
    options: [
      "Le format Native Advertising",
      "L'interstitiel plein écran",
      "Le Billboard 970x250",
      "Le pop-up d'alerte système"
    ],
    correct: 0
  },
  {
    id: 15,
    module: "Formats & créas",
    question: "À quelle étape du funnel de conversion le format 'Vidéo courte non skippable (6 à 15s)' ou le 'Grand habillage' est-il généralement le plus efficace ?",
    options: [
      "En haut de funnel (Notoriété / Awareness) pour maximiser la mémorisation de marque",
      "En bas de funnel pour inciter à la saisie du numéro de carte bancaire",
      "Uniquement sur les formulaires de désinscription",
      "En service après-vente pour former les clients existants"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 4 : Tracking & mesure (Semaine 2)
  // Objectif : Différence UTM / Floodlight, Post-clic vs Post-view
  // ==========================================
  {
    id: 16,
    module: "Tracking & mesure",
    question: "Quelle est la différence majeure entre un paramètre de tracking UTM (Google Analytics) et un tag d'Ad Server (Floodlight CM360) ?",
    options: [
      "L'UTM ne mesure que les visites issues d'un clic direct, tandis que le Floodlight permet de mesurer à la fois les conversions post-clic et post-view (après simple vue)",
      "L'UTM est payant alors que le Floodlight est gratuit",
      "Le Floodlight ne fonctionne que sur les téléphones Apple",
      "L'UTM permet de diffuser des bannières interactives sans DSP"
    ],
    correct: 0
  },
  {
    id: 17,
    module: "Tracking & mesure",
    question: "Un internaute voit une bannière Display le matin sur son ordinateur, ne clique pas, mais recherche la marque sur Google le soir même et effectue un achat. Dans Campaign Manager, comment est enregistrée cette conversion ?",
    options: [
      "Comme une conversion Post-View (ou post-impression)",
      "Comme une conversion Post-Clic",
      "Elle n'est pas mesurée car l'internaute n'a pas cliqué le matin",
      "Comme un clic invalide frauduleux"
    ],
    correct: 0
  },
  {
    id: 18,
    module: "Tracking & mesure",
    question: "Selon le standard de l'IAB / MRC, quand considère-t-on qu'une impression Display desktop a été 'visible' (Viewable) ?",
    options: [
      "Quand au moins 50% de la surface de la bannière est affichée à l'écran pendant au moins 1 seconde continue",
      "Quand l'internaute est resté plus de 30 secondes sur le site",
      "Quand la souris de l'internaute a survolé la bannière",
      "Dès que la page a fini de se charger entièrement"
    ],
    correct: 0
  },
  {
    id: 19,
    module: "Tracking & mesure",
    question: "Que désigne la 'fenêtre d'attribution' (Lookback window) configurée sur un pixel de conversion ?",
    options: [
      "La période de temps maximale (ex: 30 jours post-clic, 24h post-view) pendant laquelle une conversion peut être rattachée à une exposition publicitaire passée",
      "L'heure précise à laquelle l'internaute a le droit de cliquer sur l'annonce",
      "Le temps de chargement accordé au site avant d'annuler la visite",
      "Le délai de rétractation légal de la commande en ligne"
    ],
    correct: 0
  },
  {
    id: 20,
    module: "Tracking & mesure",
    question: "Dans une campagne vidéo, que mesure l'indicateur 'VTR' (View-Through Rate ou Taux de complétion vidéo) ?",
    options: [
      "Le pourcentage de vidéos visionnées jusqu'au bout (100%) par rapport au nombre total d'impressions servies",
      "Le pourcentage d'internautes ayant coupé le son",
      "Le nombre moyen de partages de la vidéo sur les réseaux sociaux",
      "Le ratio entre les clics sur la vidéo et le prix d'achat en euros"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 5 : Privacy, brand safety & qualité (Semaine 2)
  // Objectif : Rôle du consentement (TCF), Brand Safety, IVT
  // ==========================================
  {
    id: 21,
    module: "Privacy, brand safety & qualité",
    question: "Dans le cadre du RGPD en Europe, quelle est la règle d'or pour le déclenchement des cookies et pixels publicitaires sur le site d'un annonceur ?",
    options: [
      "Aucun cookie publicitaire ne doit être déposé tant que l'internaute n'a pas donné son consentement explicite sur le bandeau (CMP)",
      "Les cookies publicitaires peuvent être déposés dès l'arrivée si le site est en langue française",
      "Le consentement n'est obligatoire que si l'internaute achète un produit de plus de 100 €",
      "Seuls les internautes mineurs doivent voir apparaître un bandeau de cookies"
    ],
    correct: 0
  },
  {
    id: 22,
    module: "Privacy, brand safety & qualité",
    question: "Pour éviter qu'une publicité pour une marque automobile n'apparaisse à côté d'un article de presse relatant un accident de la route mortel, quel paramètre activez-vous sur le DSP ?",
    options: [
      "L'exclusion de mots-clés sensibles et de catégories Brand Safety (Brand Suitability)",
      "La limitation de diffusion le week-end uniquement",
      "Une enchère maximale fixée à 0,50 €",
      "L'obligation de diffuser uniquement sur les vidéos de musique"
    ],
    correct: 0
  },
  {
    id: 23,
    module: "Privacy, brand safety & qualité",
    question: "À quoi servent les outils de vérification tiers intégrés aux DSP (comme Integral Ad Science / IAS, DoubleVerify ou Moat) ?",
    options: [
      "À mesurer et garantir indépendamment la visibilité des annonces, la Brand Safety et le filtrage du trafic frauduleux",
      "À corriger automatiquement les fautes d'orthographe dans les bannières",
      "À créer des visuels publicitaires grâce à l'intelligence artificielle",
      "À envoyer automatiquement les factures aux clients finaux"
    ],
    correct: 0
  },
  {
    id: 24,
    module: "Privacy, brand safety & qualité",
    question: "Dans le domaine de la qualité de diffusion, qu'appelle-t-on le 'Trafic Invalide' (IVT - Invalid Traffic) ?",
    options: [
      "Des impressions ou clics non humains générés par des robots (bots), scripts automatisés ou fermes à clics",
      "Des internautes qui ferment la page avant qu'elle n'ait fini de charger",
      "Des utilisateurs qui naviguent depuis une connexion 3G lente",
      "Des personnes qui refusent de s'abonner à la newsletter du média"
    ],
    correct: 0
  },
  {
    id: 25,
    module: "Privacy, brand safety & qualité",
    question: "Quel fichier texte public, déposé à la racine du site d'un éditeur (ex: lemonde.fr/ads.txt), permet aux acheteurs de vérifier que le vendeur est bien autorisé à vendre son inventaire ?",
    options: [
      "Le fichier ads.txt (Authorized Digital Sellers)",
      "Le fichier robots.txt",
      "Le fichier sitemap.xml",
      "Le fichier rgpd.txt"
    ],
    correct: 0
  }
];
