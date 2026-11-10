/**
 * BANQUE DE QUESTIONS - MISES EN SITUATION OPÉRATIONNELLES (PROGRAMMADS)
 * 5 modules x 5 cas concrets = 25 questions pratiques
 */

window.ALL_QUESTIONS = [
  // ==========================================
  // MODULE 1 : Écosystème programmatique (Cas opérationnels)
  // ==========================================
  {
    id: 1,
    module: "Écosystème programmatique",
    question: "En tant que trader chez Programmads, vous lancez une campagne sur DV360 en enchères ouvertes (Open Auction), mais votre Line Item ne délivre quasiment aucune impression malgré une audience large. Quel réglage prioritaire inspectez-vous sur votre configuration d'enchère ?",
    options: [
      "Le Floor Price (prix plancher) fixé par les éditeurs côté SSP, qui est probablement supérieur à votre CPM max configuré",
      "Le protocole HTTP de l'ad server de l'annonceur qui refuse les connexions sécurisées",
      "Le quota de bande passante alloué au DSP sur le réseau local de l'agence",
      "Le paramètre de géolocalisation qui exige une validation manuelle par l'ARCOM"
    ],
    correct: 0
  },
  {
    id: 2,
    module: "Écosystème programmatique",
    question: "Un client premium souhaite sécuriser un emplacement exclusif 'Habillage desktop' sur un site média majeur pour le lancement d'un produit vendredi prochain, avec obligation de délivrer 500 000 impressions à 12 € du CPM. Quel type d'achat devez-vous impérativement négocier avec la régie ?",
    options: [
      "Un Programmatic Guaranteed (PG) validé entre le DSP et la SSP de la régie",
      "Un Preferred Deal sans engagement de volume sur l'Open RTB",
      "Une enchère privée (Private Marketplace) avec un plancher souple",
      "Une campagne standard en Open Auction avec un bid multiplier x5"
    ],
    correct: 0
  },
  {
    id: 3,
    module: "Écosystème programmatique",
    question: "Sur un audit financier de vos campagnes display, vous remarquez que le CPM moyen net facturé est passé de 2,10 € à 3,40 € suite au passage généralisé du marché au First-Price Auction. Comment expliquez-vous cette hausse à votre responsable de compte ?",
    options: [
      "En First-Price, le DSP paie exactement le montant de l'offre soumise ; il faut calibrer des algorithmes de Bid Shading pour éviter de surpayer",
      "En First-Price, la régie média applique systématiquement une taxe de 30% sur chaque clic sortant",
      "Les ad servers facturent désormais le double pour stocker les créatives au format responsive",
      "Le Second-Price forçait le DSP à enchérir 1 centime de plus que son budget journalier total"
    ],
    correct: 0
  },
  {
    id: 4,
    module: "Écosystème programmatique",
    question: "Durant la phase de test d'un deal direct avec Le Figaro, la régie vous indique qu'elle envoie bien les impressions vers votre Seat DSP, mais vous ne voyez aucune requête dans vos logs. Que devez-vous demander en priorité à la régie pour débloquer la situation ?",
    options: [
      "Le Deal ID exact configuré dans la SSP et l'ID de votre compte DSP (Seat ID) pour valider l'association technique",
      "Le nom de domaine complet du registrar du site web de l'éditeur",
      "Une copie du contrat commercial signé avec le syndicat des éditeurs",
      "L'adresse IP publique de la machine du responsable de régie"
    ],
    correct: 0
  },
  {
    id: 5,
    module: "Écosystème programmatique",
    question: "Un éditeur média partenaire passe son architecture de monétisation du Waterfall classique au Header Bidding (Prebid). Quel bénéfice direct constatez-vous côté acheteur lors de la diffusion de vos campagnes ?",
    options: [
      "Un accès simultané et équitable à 100% de l'inventaire en temps réel, sans passer après les deals prioritaires de l'ad server primaire",
      "La disparition définitive de tous les formats publicitaires interstitiels sur mobile",
      "L'obligation de payer les factures en cryptomonnaie directement au DSP",
      "Une garantie contractuelle que le taux de visibilité sera toujours supérieur à 95%"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 2 : Ciblage & audiences (Cas opérationnels)
  // ==========================================
  {
    id: 6,
    module: "Ciblage & audiences",
    question: "Une marque de prêt-à-porter de luxe refuse d'apparaître sur les navigateurs où les cookies tiers sont restreints (Safari, Firefox), mais souhaite acquérir de nouveaux clients sans recycler sa base CRM. Quelle alternative d'audience recommandez-vous ?",
    options: [
      "Un ciblage contextuel sémantique basé sur le contenu des pages mode/tendances combiné aux ID alternatifs (Universal ID)",
      "Une campagne de retargeting dynamique sur les visiteurs n'ayant pas finalisé leur commande",
      "Un ciblage par exclusion stricte de toutes les adresses IP résidentielles en France",
      "Un Line Item ciblant uniquement les personnes inscrites à la newsletter depuis moins de 48 heures"
    ],
    correct: 0
  },
  {
    id: 7,
    module: "Ciblage & audiences",
    question: "Lors d'un point hebdomadaire, votre client se plaint : 'Mes collègues et moi voyons notre propre publicité 15 fois par jour sur les mêmes sites média !'. Quelle correction technique appliquez-vous immédiatement sur le DSP ?",
    options: [
      "Resserrer le Frequency Capping à 2 ou 3 impressions par internaute unique par 24 heures au niveau du Line Item",
      "Augmenter le budget quotidien pour diluer les impressions sur l'ensemble du territoire",
      "Désactiver immédiatement tous les formats bannières 300x250",
      "Supprimer les listes d'exclusion de domaines dans les paramètres de marque"
    ],
    correct: 0
  },
  {
    id: 8,
    module: "Ciblage & audiences",
    question: "Pour optimiser le ROAS d'un site d'assurance en ligne, vous devez segmenter votre audience First-Party issue du CRM. Quelle structure de listes d'audience est la plus efficace pour générer de nouveaux souscripteurs ?",
    options: [
      "Exclure la liste des clients déjà assurés et créer un segment Lookalike (jumeaux statistiques) à partir des clients à plus haute valeur",
      "Cibler exclusivement la liste complète des clients déjà détenteurs d'un contrat",
      "Mélanger les profils inactifs et les prospects chauds sans appliquer d'enchère différenciée",
      "Désactiver l'exclusion des convertis récents pour maximiser le nombre d'impressions servies"
    ],
    correct: 0
  },
  {
    id: 9,
    module: "Ciblage & audiences",
    question: "Votre campagne de remarketing dynamique affiche un taux de clic anormalement bas et des créatives génériques sans image produit. En analysant la page de confirmation du site client, que découvrez-vous comme anomalie ?",
    options: [
      "Les variables du pixel (Product ID / Category) sont vides ou renvoient la valeur 'undefined' dans le flux de données",
      "Le site du client utilise un protocole HTTPS récent au lieu d'une connexion standard HTTP",
      "Le catalogue de produits du client contient plus de 10 références actives",
      "Le gestionnaire de balises Google Tag Manager est déclenché sur toutes les pages"
    ],
    correct: 0
  },
  {
    id: 10,
    module: "Ciblage & audiences",
    question: "Vous construisez une audience similaire (Lookalike) sur un DSP. Pour obtenir un volume important d'impressions lors d'une campagne de notoriété massive, quel curseur d'élargissement devez-vous choisir ?",
    options: [
      "Privilégier la 'Portée' (Reach / 5% à 10%) plutôt que la 'Similarité stricte' (1%), quitte à accepter une précision comportementale moindre",
      "Régler la similarité sur 0,1% pour forcer l'algorithme à n'admettre que des clones parfaits",
      "Ajouter une liste d'exclusion géographique sur l'ensemble du pays hôte",
      "Forcer une enchère au clic (CPC) à 0,01 € sans ciblage d'inventaire"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 3 : Formats & créas (Cas opérationnels)
  // ==========================================
  {
    id: 11,
    module: "Formats & créas",
    question: "Un annonceur automobile veut lancer une campagne vidéo pour faire découvrir son nouveau SUV. Le budget est modéré et il n'a pas accès à des inventaires YouTube réservés. Quel format vidéo devez-vous privilégier pour diffuser au cœur des articles de presse auto ?",
    options: [
      "Format vidéo Outstream (In-article ou In-feed) qui se déclenche silencieusement au scroll du lecteur",
      "Format vidéo Instream Pre-roll exclusif de 60 secondes non skippable",
      "Bannière animée GIF de 15 secondes en format 120x600 skyscraper",
      "Format Audio digital diffusé sur les applications de podcasts"
    ],
    correct: 0
  },
  {
    id: 12,
    module: "Formats & créas",
    question: "L'ad server du DSP rejette le zip HTML5 fourni par le graphiste avec l'erreur : 'ClickTag issue detected'. En inspectant le fichier index.html de l'archive, quelle ligne de code est la cause du rejet ?",
    options: [
      "window.open('https://www.site-annonceur.com') codé en dur sans passer par la variable window.clickTag",
      "window.open(window.clickTag, '_blank') correctement déclaré dans la balise de clic",
      "Une balise standard <canvas> utilisée pour exécuter une transition graphique CSS",
      "L'insertion d'une balise meta viewport paramétrée à width=device-width"
    ],
    correct: 0
  },
  {
    id: 13,
    module: "Formats & créas",
    question: "Vous achetez un inventaire vidéo Instream sur une place de marché privée. Le rapport de diffusion indique 100 000 impressions servies mais un taux de visibilité (Viewability) de seulement 32%. Quelle est l'explication la plus probable ?",
    options: [
      "Le lecteur vidéo démarre en arrière-plan sous la ligne de flottaison sans que l'internaute n'ait le player visible à l'écran",
      "La vidéo a été encodée au format MP4 haute résolution au lieu du format WebM",
      "Les utilisateurs ont branché des écouteurs filaires sur leur ordinateur",
      "Le DSP a automatiquement converti la vidéo en format texte pour accélérer le chargement"
    ],
    correct: 0
  },
  {
    id: 14,
    module: "Formats & créas",
    question: "L'équipe créa vous soumet une maquette vidéo mobile qui démarre automatiquement avec le son à 100% et qui masque tout l'écran sans bouton de fermeture pendant 15 secondes. Que devez-vous leur notifier avant validation ?",
    options: [
      "Cette créative enfreint les standards de la Coalition for Better Ads et sera bloquée par Chrome et les DSP tiers",
      "Cette créative est parfaitement conforme et obtiendra un VTR de 100% sur tous les terminaux",
      "Il suffit d'ajouter un logo de l'agence en filigrane pour lever toute restriction technique",
      "Ce format est réservé aux sites d'information publique avec dérogation ministérielle"
    ],
    correct: 0
  },
  {
    id: 15,
    module: "Formats & créas",
    question: "Pour une activation desktop à fort impact sur les pages d'accueil des portails médias français, quel pack de formats IAB devez-vous impérativement exiger du studio créatif ?",
    options: [
      "Megabannière (728x90) ou Billboard (970x250) accompagné du Pavé (300x250) et Demi-Page (300x600)",
      "Vignette 1x1, Favicon dynamique et Bannière mobile 320x50",
      "Carrousel d'images 1080x1920 vertical exclusivement adapté aux Stories",
      "Notification push riche au format brut JSON"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 4 : Tracking & mesure (Cas opérationnels)
  // ==========================================
  {
    id: 16,
    module: "Tracking & mesure",
    question: "Votre client compare les résultats de sa campagne programmatique : Google Analytics (GA4) n'enregistre que 12 conversions (en attribution dernier clic direct), tandis que Campaign Manager 360 en attribue 140. Comment justifiez-vous cet écart sans paniquer le client ?",
    options: [
      "CM360 mesure l'attribution post-view (conversions après exposition sans clic direct), que GA4 ne peut pas voir par défaut via de simples balises UTM",
      "Google Analytics a subi une panne technique générale et supprime aléatoirement 90% des ventes",
      "Le DSP a compté 10 fois chaque clic par erreur de facturation automatique",
      "Les paramètres UTM ont été volontairement falsifiés par les régies publicitaires"
    ],
    correct: 0
  },
  {
    id: 17,
    module: "Tracking & mesure",
    question: "Sur un site e-commerce avec un panier moyen à 800 €, le cycle d'achat dure en moyenne 18 jours entre la première visite et la validation finale. Quelle configuration de fenêtre d'attribution devez-vous recommander dans l'Ad Server ?",
    options: [
      "Une fenêtre post-clic d'au moins 30 jours et une fenêtre post-view resserrée (ex: 24h à 7 jours) pour ne valoriser que l'impact récent",
      "Une fenêtre d'attribution de 5 minutes chrono pour éliminer toute influence de la marque",
      "Une fenêtre post-view de 365 jours pour attribuer systématiquement toutes les ventes de l'année",
      "Désactiver l'attribution pour ne mesurer que les impressions servies sans lien avec les ventes"
    ],
    correct: 0
  },
  {
    id: 18,
    module: "Tracking & mesure",
    question: "Dans le bilan de visibilité (MRC) d'une campagne display desktop, un Line Item affiche un taux de visibilité décevant de 28%. Selon les normes officielles IAB / MRC, que signifie ce chiffre concrètement ?",
    options: [
      "Seulement 28% des impressions servies ont eu au moins 50% de leurs pixels visibles à l'écran pendant 1 seconde continue",
      "La publicité n'a été cliquée que par 28 internautes sur l'ensemble de la campagne",
      "Les serveurs de l'ad server ont rejeté 72% des appels publicitaires pour contenu illégal",
      "28% des visiteurs ont visionné l'intégralité d'un diaporama de 10 diapositives"
    ],
    correct: 0
  },
  {
    id: 19,
    module: "Tracking & mesure",
    question: "Un directeur marketing souhaite abandonner le modèle d'attribution 'Dernier Clic' (Last Interaction) au profit d'un modèle algorithmique 'Data-Driven' sur ses campagnes cross-canal. Quel sera l'impact visible immédiat pour vos campagnes Display programmatiques de haut de tunnel ?",
    options: [
      "Le Display programmatique verra sa valeur réhaussée car le modèle attribue une part de crédit aux points de contact initiateurs du parcours d'achat",
      "Toutes les conversions seront automatiquement réattribuées aux annonces Search marque à 100%",
      "Le coût par clic de la campagne augmentera immédiatement de 50%",
      "Les balises de conversion sur le site de l'annonceur cesseront de comptabiliser les montants d'achat"
    ],
    correct: 0
  },
  {
    id: 20,
    module: "Tracking & mesure",
    question: "En optimisant une campagne vidéo pour un service de streaming, vous constatez un VTR (View-Through Rate / Taux de complétion vidéo) exceptionnel de 85% mais un taux de rebond de 95% sur le site d'atterrissage. Quel est le diagnostic le plus lucide ?",
    options: [
      "La vidéo captive ou est diffusée sur des formats non skippables (bons visionnages), mais la promesse créative ou la landing page ne convertit pas l'intention",
      "L'ad server a comptabilisé les vidéos en boucle sur le serveur de preview interne de l'agence",
      "Les internautes ont tous désactivé leur connexion Internet après 10 secondes de lecture",
      "Le pixel de tracking Floodlight a été installé à l'envers sur la page d'accueil"
    ],
    correct: 0
  },

  // ==========================================
  // MODULE 5 : Privacy, brand safety & qualité (Cas opérationnels)
  // ==========================================
  {
    id: 21,
    module: "Privacy, brand safety & qualité",
    question: "Suite à la mise à jour d'un bandeau de consentement (CMP) aux normes TCF v2.2 sur un média partenaire, vous constatez que votre DSP n'envoie plus aucune enchère sur ses pages. Que vérifiez-vous en priorité dans la chaîne TC String reçue ?",
    options: [
      "Si l'utilisateur a donné son consentement pour la Finalité 1 (Purpose 1 : Stockage / accès aux traceurs) et si votre DSP fait bien partie de la liste des vendors autorisés",
      "Si la police d'écriture du bandeau de consentement est bien une typographie officielle Google Fonts",
      "Si le bouton 'Accepter' a été cliqué depuis un appareil mobile situé en dehors de l'Union Européenne",
      "Si l'éditeur a payé sa cotisation annuelle à l'IAB Europe avant le 1er du mois"
    ],
    correct: 0
  },
  {
    id: 22,
    module: "Privacy, brand safety & qualité",
    question: "Une compagnie aérienne cliente chez Programmads vous alerte : un crash aérien vient de se produire et fait la une de l'actualité. Quelles mesures d'urgence de Brand Suitability devez-vous déployer dans l'heure sur le DSP ?",
    options: [
      "Activer une liste noire contextuelle d'urgence (mots-clés : crash, accident, victime, avion) et exclure la catégorie sémantique 'Catastrophes aériennes' via un outil tiers (IAS / DoubleVerify)",
      "Diminuer les enchères de 10% sur l'ensemble des sites de voyage",
      "Créer une nouvelle bannière publicitaire avec un message promotionnel sur les billets d'avion",
      "Basculer toutes les impressions en enchères ouvertes au second prix"
    ],
    correct: 0
  },
  {
    id: 23,
    module: "Privacy, brand safety & qualité",
    question: "Avant de lancer un investissement important de 50 000 € sur le site d'un nouvel éditeur influent, vous inspectez l'URL 'site-editeur.com/ads.txt'. Le fichier renvoie une erreur 404 (introuvable). Quel risque encourez-vous si vous achetez quand même cet inventaire sur le DSP ?",
    options: [
      "Acheter de l'inventaire frauduleux issu d'un faux domaine (Domain Spoofing) vendu par des intermédiaires non autorisés par le véritable propriétaire du site",
      "Être poursuivi pénalement pour non-respect des droits d'auteur des photos publiées",
      "Provoquer le blocage automatique de l'ensemble de votre compte bancaire par Stripe",
      "Voir toutes les créatives de l'agence transformées en pages blanches par les navigateurs"
    ],
    correct: 0
  },
  {
    id: 24,
    module: "Privacy, brand safety & qualité",
    question: "Sur un Line Item d'Open Auction, un outil d'audit (IAS ou Moat) détecte 42% de trafic invalide sophistiqué (SIVT) sur une application mobile de lampe torche. Quelles sont les caractéristiques réelles de ce trafic ?",
    options: [
      "Des fermes de téléphones physiques ou des serveurs automatisés simulant des clics et des impressions invisibles en arrière-plan pour siphonner le budget média",
      "Des vrais utilisateurs qui cliquent plusieurs fois très vite sur le bouton d'allumage de la torche",
      "Des robots de Google qui indexent le code source de l'application mobile pour le référencement",
      "Des requêtes de serveurs météo synchronisées avec les prévisions satellites"
    ],
    correct: 0
  },
  {
    id: 25,
    module: "Privacy, brand safety & qualité",
    question: "En audit de conformité RGPD / ePrivacy chez Programmads, vous analysez le déclenchement des balises Floodlight sur le site d'un client e-commerce. Quelle situation constitue une infraction caractérisée passible d'une mise en demeure ?",
    options: [
      "Déclencher les tags publicitaires du DSP et déposer des cookies marketing dès le chargement de la page d'accueil avant tout choix de l'internaute sur la CMP",
      "Attendre le clic sur 'Tout accepter' avant d'exécuter le script de mesure d'audience",
      "Permettre à l'internaute de refuser les traceurs publicitaires aussi facilement que de les accepter",
      "Conserver les données de navigation anonymisées pendant une durée n'excédant pas 13 mois"
    ],
    correct: 0
  }
];
