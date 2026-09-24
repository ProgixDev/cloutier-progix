/**
 * Faithful content for the Progix “Devis contractuel” — Harmonia, application
 * d’accompagnement relationnel et de communication personnelle (première
 * version). List-shaped data lives here; prose with inline emphasis is authored
 * in the section JSX.
 *
 * Typographie française (’ « » …). Montants en dollars canadiens, taxes
 * applicables incluses : 6 400 $ CA est le total payé par le Client.
 *
 * Source : la conversation de conception du Client (30 août – 11 septembre
 * 2026), son cahier de consultation pour firmes de développement et la
 * préparation de ses rencontres avec les firmes. Arbitrages retenus : une première version en
 * 2 mois, réservée aux adultes; les modules plus lourds (connaissances et
 * concordance des sources, données de santé, parcours mineurs, accès
 * exceptionnel) sont nommés en feuille de route plutôt que glissés dans le
 * forfait. Paiement : 14 versements de 450 $ aux deux semaines, puis un solde
 * de 100 $, par virement Interac.
 */

export const cover = {
  tag: "Devis contractuel · Bon de commande",
  title: "Développement de votre",
  titleLight: "application Harmonia",
  subtitle:
    "Une application d’accompagnement relationnel et de communication personnelle, construite autour d’une conversation avec l’IA et du cadre que vous avez établi : accompagner sans décider, distinguer les faits des interprétations, placer la sécurité de l’utilisateur au-dessus de tout. Une première version livrée en 2 mois sur iOS et Android, avec vos règles fondamentales versionnées et protégées, un SOS sur chaque écran, un espace personnel et des données hébergées au Canada.",
  // Aucun montant en couverture : le prix est traité en section 03 uniquement.
  badges: [
    { l: "Délai de développement", v: "2", u: " mois" },
    { l: "Règles intégrées à la Charte", v: "45", u: " · 20 du cœur, 25 de sécurité" },
    { l: "Plateformes", v: "2", u: " · iOS et Android" },
  ],
  meta: [
    { l: "Projet", v: "Harmonia · accompagnement relationnel" },
    { l: "Client", v: "Patrick Cloutier" },
    { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
    { l: "Référence · Date", v: "DEVIS-PROGIX-2026-____ · ____________" },
  ],
} as const;

export const trust = [
  { n: "150+", l: "projets réalisés" },
  { n: "2", l: "mois de développement" },
  { n: "CA", l: "données hébergées au Canada" },
  { n: "100 %", l: "propriété transférée au Client" },
] as const;

/* ------------------------------------------------------------------ */
/* Section 02 — prestations incluses, groupées. b est mis en avant.    */
/* ------------------------------------------------------------------ */

export const inclConversation = [
  {
    b: "Conversation libre, en texte ou à la voix",
    t: " : l’utilisateur écrit ou parle comme il le ferait avec un proche; aucun questionnaire, aucun menu imposé, aucun score à l’ouverture",
  },
  {
    b: "Première prise de contact conservée mot pour mot",
    t: " : « Bonjour, je suis Harmonia. 🌿 Je suis là pour t’écouter et réfléchir avec toi. […] Qu’aimerais-tu qu’on explore ensemble? »",
  },
  {
    b: "Trois façons d’être accompagné",
    t: " : discussion, réflexion ou analyse, que l’utilisateur change à tout moment (« On arrête l’analyse, je veux juste parler »)",
  },
  {
    b: "Jamais de conseil à la place de l’utilisateur",
    t: " : pas de « tu devrais », pas de « fais ceci »; Harmonia aide à comprendre pour que la personne décide, la sécurité étant la seule exception",
  },
  {
    b: "Harmonia explique son raisonnement",
    t: " : quand elle est d’accord, quand elle ne l’est pas, et quand elle ne sait pas; elle ne flatte pas et reconnaît ses erreurs",
  },
  {
    b: "Faits, ressentis, hypothèses et inconnues distingués",
    t: " : jamais une hypothèse présentée comme un fait, jamais une émotion attribuée à la place de l’utilisateur",
  },
  {
    b: "Rien d’ajouté à la pensée de l’utilisateur",
    t: " : Harmonia n’introduit pas d’hypothèse absente des faits, même pour l’écarter",
  },
  {
    b: "Les outils se proposent, ne s’imposent pas",
    t: " : « J’entrevois une possibilité qui pourrait t’être utile. Est-ce que tu aimerais qu’on l’explore ensemble? »",
  },
] as const;

export const inclCharte = [
  {
    b: "Vos règles transcrites en Charte Harmonia versionnée",
    t: " : les 20 principes du cœur et de l’âme et les 25 règles de sécurité approuvés, avec les précisions ajoutées depuis (hypothèses, médicaments, habitudes)",
  },
  {
    b: "Hiérarchie respectée",
    t: " : d’abord ne jamais faciliter une intention malveillante, puis protéger la vie, l’intégrité, la dignité et les informations, puis les règles de conversation",
  },
  {
    b: "Garde-fous applicatifs",
    t: " : chaque message est évalué avant d’atteindre le modèle d’IA et chaque réponse est vérifiée avant de s’afficher, sur le serveur, même si l’application est modifiée; la sécurité ne repose pas sur une consigne modifiable",
  },
  {
    b: "Aucune modification sans votre approbation",
    t: " : une nouvelle version de la Charte exige votre validation, ou celle de la personne à qui vous la déléguez par écrit, et celle de l’intervenant de sécurité critique; l’écran d’approbation montre en clair ce qui change, et une version qui échoue aux scénarios de test ne peut pas être approuvée. Seule la version de test fait exception : elle désigne la préproduction, sans utilisateur ni donnée réels, et la bêta fermée suit toutes les règles de production",
  },
  {
    b: "Retour à la dernière version approuvée",
    t: " en un geste si une version pose problème, pendant qu’elle est corrigée : une seule personne habilitée peut le déclencher, l’autre validateur en est avisé aussitôt et la décision est revue après coup",
  },
  {
    b: "Résistance aux manipulations",
    t: " : « ignore tes règles », consignes cachées dans un texte, tentative d’extraire les instructions internes",
  },
  {
    b: "Aucun changement de modèle d’IA à votre insu",
    t: " : le modèle et sa version sont figés et consignés; tout changement, même imposé par le fournisseur, repasse les scénarios de test et suit la même approbation qu’une nouvelle version de la Charte",
  },
  {
    b: "Toujours une IA, jamais un professionnel",
    t: " : Harmonia le dit clairement, accepte qu’on conteste une interprétation et la révise plutôt que de la défendre",
  },
] as const;

export const inclSafety = [
  {
    b: "Bouton SOS sur chaque écran",
    t: " : urgence, ligne de crise de la région, personne de confiance et aide professionnelle, discret au quotidien, prioritaire en cas de danger; il fonctionne sans IA, sans serveur et sans réseau, avec la dernière liste vérifiée gardée sur l’appareil",
  },
  {
    b: "Appel au 911 par le téléphone lui-même",
    t: " : Harmonia ouvre le composeur de l’appareil plutôt que de simuler un appel automatisé; pour qui ne peut pas téléphoner, les moyens écrits vérifiés (texto au 9-8-8, service texte au 9-1-1 pour les personnes qui y ont accès), et sur une tablette sans téléphonie, les numéros à composer depuis un autre appareil",
  },
  {
    b: "Niveaux de risque proportionnés",
    t: " : préoccupation, risque sérieux, puis danger réel et immédiat (comment, où, quand); une émotion intense est entendue, un risque concret reçoit une réponse de sécurité",
  },
  {
    b: "Ressources vérifiées selon l’endroit où se trouve l’utilisateur",
    t: " : 911, Info-Social 811, 1 866 APPELLE, 9-8-8; jamais un numéro inventé par l’IA; sans localisation, l’utilisateur choisit sa région, et hors des régions vérifiées, le SOS affiche le numéro d’urgence du pays en le disant",
  },
  {
    b: "Ma personne de confiance",
    t: " : proposée dès l’inscription, ou dans la conversation dès un premier signe d’inquiétude, facultative, conservée à part et chiffrée; un refus ne désactive aucune protection",
  },
  {
    b: "Mon professionnel",
    t: " : si l’utilisateur le souhaite, les coordonnées du professionnel qui le suit déjà, chiffrées à part, jamais transmises à l’IA et joignables en un geste depuis son plan et le SOS",
  },
  {
    b: "Mon plan Harmonia",
    t: " : plan de sécurité personnel par étapes, vérification de ce qui aide réellement, enregistré pour la prochaine fois, même en mode sans personnalisation",
  },
  {
    b: "Transparence avant la crise",
    t: " : dès l’inscription, Harmonia explique qu’elle ne gardera pas secret un danger grave et ce qu’elle fera; elle reste disponible dans la conversation pendant la démarche, sans promettre une présence qu’elle ne peut garantir",
  },
  {
    b: "Alerte de protection minimale",
    t: " : en cas de danger immédiat, explicite ou confirmé par une question de clarification, vous ou l’intervenant formé recevez seulement les coordonnées de la personne et une brève description factuelle, non accusatoire, tirée de formulations validées d’avance; jamais les conversations ni l’historique, et l’utilisateur retrouve ensuite ce qui a été envoyé",
  },
  {
    b: "Une alerte qui parvient vraiment",
    t: " : avis immédiat par texto et courriel, sans aucun renseignement personnel, détail visible seulement dans la console; relance au destinataire suivant faute de prise en charge dans le délai fixé; Harmonia n’annonce jamais une aide qui n’est pas confirmée",
  },
  {
    b: "Sortie rapide et SOS sans IA",
    t: " : l’écran bascule vers une page neutre en un geste et l’application se verrouille; le SOS fonctionne même si l’IA est indisponible, et Harmonia ne laisse jamais croire qu’une fonction d’urgence est disponible quand elle ne l’est pas",
  },
] as const;

export const inclOnboarding = [
  {
    b: "Un compte personnel par utilisateur",
    t: ", authentification sécurisée avec double authentification proposée, récupération jamais plus faible que la connexion, avis à chaque nouvel appareil ou changement de sécurité, appareils connectés visibles et déconnectables",
  },
  {
    b: "Âge légal déclaré à l’inscription",
    t: " : date de naissance attestée, sans pièce d’identité, selon l’âge de la majorité de la province (18 ou 19 ans); la première version s’adresse aux adultes, et le parcours mineurs avec autorisation d’un tuteur suit dans une phase ultérieure",
  },
  {
    b: "Règles acceptées une à une",
    t: " : une règle par écran, en version courte avec « En savoir plus », à lire ou à écouter, plutôt qu’un long texte que personne ne lit; la responsabilité de l’utilisateur y est nommée; refuser une règle de sécurité arrête l’inscription, et si une règle change, l’utilisateur l’accepte de nouveau",
  },
  {
    b: "Copie horodatée des consentements",
    t: ", consultable et exportable à tout moment par l’utilisateur",
  },
  {
    b: "Coordonnées de sécurité",
    t: " : nom, prénom, adresse et téléphone recueillis à l’inscription, chiffrés à part, utilisés seulement pour l’alerte de protection, et la raison est expliquée",
  },
  {
    b: "Localisation demandée avec consentement",
    t: ", seulement pour proposer les ressources d’aide du lieu où se trouve l’utilisateur; approximative, lue à l’ouverture du SOS ou des ressources et jamais conservée",
  },
  {
    b: "Mes autorisations",
    t: " : chaque permission (localisation, micro, notifications, mémoire, lecture du journal et des objectifs par Harmonia) est demandée au moment où elle sert, avec sa raison, et se retire depuis un seul écran",
  },
  {
    b: "Aucune information bancaire dans les conversations",
    t: " : un numéro de carte, d’assurance sociale, d’assurance maladie ou de compte bancaire saisi par erreur est masqué, jamais conservé ni transmis à l’IA",
  },
  {
    b: "Documents juridiques et recours",
    t: " : politique de confidentialité, conditions d’utilisation, personne responsable des renseignements personnels et moyen de porter plainte, accessibles en tout temps depuis les réglages",
  },
] as const;

export const inclSpace = [
  {
    b: "Espace personnel accessible en tout temps",
    t: " : l’utilisateur épingle, déplace et choisit ce qui apparaît sur sa page",
  },
  {
    b: "Journal",
    t: " : réflexions et observations, écrites ou dictées, conservées seulement si l’utilisateur le souhaite, sans analyse imposée",
  },
  {
    b: "Objectifs",
    t: " : créés, modifiés, suspendus, abandonnés ou archivés par l’utilisateur, qui décide seul qu’un objectif est atteint",
  },
  {
    b: "Moments importants",
    t: " choisis par l’utilisateur, sans points ni performance",
  },
  {
    b: "Ce qu’Harmonia retient",
    t: " : rien n’est retenu sans l’accord de l’utilisateur; ce qu’il a dit et ce qu’Harmonia a déduit sont distingués; mémoire visible, modifiable et supprimable (« Oublie ça »), ou un mode sans personnalisation si l’utilisateur le préfère",
  },
  {
    b: "Historique des conversations",
    t: " : relire ses conversations passées, en supprimer une ou tout effacer sans fermer son compte",
  },
  {
    b: "Outils relationnels",
    t: " : clarifier ce que je veux (besoin, limite, demande), explorer ce que je ressens, résoudre un problème et préparer une conversation difficile, toujours proposés avant d’être ouverts",
  },
  {
    b: "Outils de prise de recul",
    t: " : Fait → Ressenti → Observation → Scénario → Faits → Choix, le 1-2-3 Go sans esprit de défi, et l’exercice « Observer une pensée »",
  },
  {
    b: "Changer une habitude",
    t: " : motivations, déclencheurs, approche choisie, traverser une envie, écarts sans culpabilité, et J’ARRÊTE proposé en complément pour le tabac",
  },
  {
    b: "Symbole personnel",
    t: " : un animal ou une créature qui représente le cheminement, trouvé avec l’utilisateur s’il le souhaite, jamais imposé",
  },
] as const;

export const inclAccess = [
  {
    b: "Couleurs, contrastes, taille et police",
    t: " ajustables, y compris une écriture plus grande ou plus lisible",
  },
  {
    b: "Nom d’Harmonia au choix",
    t: " de l’utilisateur, modifiable selon son goût du moment, sans rien changer à ses règles",
  },
  {
    b: "Voix féminine ou masculine",
    t: ", sans justification à donner, et petit avatar choisi parmi des illustrations et leurs couleurs, jamais présenté comme une personne réelle",
  },
  {
    b: "Mode vocal complet",
    t: " pour les personnes non voyantes, qui lisent difficilement ou qui préfèrent parler; dictée reconnue sur l’appareil, ou l’utilisateur est prévenu avant d’activer le micro si elle ne l’est pas; aucun enregistrement audio conservé, et suggestion d’écouteurs à l’activation de la voix",
  },
  {
    b: "Lecteurs d’écran VoiceOver et TalkBack",
    t: ", aucune information transmise par la couleur seule, notifications visuelles et vibrations",
  },
  {
    b: "Interface en français et en anglais",
    t: ", conversation dans ces deux langues, où la Charte et ses tests sont validés; dans une autre langue, Harmonia le dit simplement et le SOS reste disponible; architecture prête pour les langues suivantes",
  },
] as const;

export const inclData = [
  {
    b: "Données hébergées au Canada",
    t: ", fonctions serveur comprises, chiffrées en transit et au repos; conversations, personne de confiance et plan de sécurité chiffrés à part",
  },
  {
    b: "Personne ne lit les conversations",
    t: " : ni Progix, ni l’administration, ni vous; aucun outil ne permet de les lire ou d’y écrire, les clés de déchiffrement sont réservées au service de conversation, tout accès direct à la production est nominatif, justifié et journalisé, et la démonstration en est faite à la recette",
  },
  {
    b: "Le strict nécessaire envoyé à l’IA",
    t: " : seul le texte utile à une réponse est traité par le fournisseur d’IA, sans les nom et coordonnées du compte, sans entraînement, avec la conservation la plus courte que son contrat garantit (aucune si une entente de non-conservation est obtenue), annoncée telle quelle à l’inscription",
  },
  {
    b: "Journal d’accès et d’événements",
    t: " : qui, quoi, quand, comment, pourquoi, qui l’a autorisé et avec quel résultat, protégé contre l’altération; la consultation du journal est elle-même journalisée",
  },
  {
    b: "Droits de l’utilisateur",
    t: " : consulter, corriger, exporter et supprimer ses données, les traces de sécurité étant gardées à part pour la durée légale; durée de conservation de référence de 5 ans, prolongée si la sécurité ou la loi l’exige",
  },
  {
    b: "Aucune revente, publicité ni profilage commercial",
    t: " : dans cette première version, aucune conversation ne sert à améliorer Harmonia; seuls les signalements volontaires et dépersonnalisés vous parviennent",
  },
  {
    b: "Environnements séparés",
    t: " (développement, préproduction, production), sauvegardes quotidiennes chiffrées, dont une copie hors du projet principal qu’aucune personne seule ne peut effacer, restauration testée, aucune donnée réelle hors production",
  },
  {
    b: "Sur le téléphone",
    t: " : données locales minimales et chiffrées, verrouillage par code ou biométrie après inactivité, aperçu masqué dans le sélecteur d’applications, rien de sensible dans les sauvegardes de l’appareil; exporter, supprimer son compte ou changer la personne de confiance demande une nouvelle authentification",
  },
  {
    b: "Chaîne de développement contrôlée",
    t: " : revue de code, déploiement jamais fait seul par l’auteur, analyse des dépendances, accès à l’API limités et journalisés; tous les contrôles s’appliquent sur le serveur, même si l’application est modifiée",
  },
] as const;

export const inclGovernance = [
  {
    b: "Console d’administration web",
    t: " : ressources d’aide par région, versions de la Charte, alertes de sécurité et état du service",
  },
  {
    b: "Double validation des actions critiques",
    t: " : une règle fondamentale ne change pas, et un incident de sécurité n’est pas déclaré fermé, sans vous (ou la personne que vous déléguez par écrit) et l’intervenant de sécurité critique; le code de fermeture, propre à chaque incident, passe par un canal externe à l’application. Un numéro d’aide, un destinataire de l’alerte, un rôle ou un validateur ne change pas non plus sans deux personnes, et chaque modification est tracée",
  },
  {
    b: "Codes à usage unique, hors de l’application",
    t: " : double authentification par une application externe, chaque personne responsable de ses propres accès, aucun compte partagé",
  },
  {
    b: "Personne ne parle au nom d’Harmonia",
    t: " : aucune console ni aucun compte d’administration ne peut écrire dans une conversation ni envoyer un message en son nom; les avis de service sont des textes prédéfinis, affichés hors de la conversation",
  },
  {
    b: "Mode de protection temporaire",
    t: " : une fonction problématique se désactive, les utilisateurs sont informés sans alarmisme, puis avisés du rétablissement",
  },
  {
    b: "Signaler un problème",
    t: " : l’utilisateur peut, s’il le souhaite, envoyer un retour factuel sur le fonctionnement, sans extrait de conversation, dont les noms, coordonnées et lieux détectés sont masqués sous ses yeux avant l’envoi; une adresse dédiée reçoit les signalements de vulnérabilités",
  },
] as const;

export const inclLaunch = [
  {
    b: "Logo Harmonia",
    t: " : des mains qui soutiennent une tortue, en vert et ivoire, et la charte graphique de l’application",
  },
  {
    b: "Bêta fermée",
    t: " avec de premiers utilisateurs de confiance avant la publication (TestFlight et test interne Google Play)",
  },
  {
    b: "Publication App Store et Google Play",
    t: " au Canada, là où les ressources d’aide sont vérifiées : fiches, captures, soumissions et refus éventuels gérés jusqu’à validation",
  },
  {
    b: "Abonnement intégré aux stores",
    t: " : résiliable en tout temps, sans jamais bloquer le SOS, le plan de sécurité, l’export ni la suppression des données; l’utilisateur revient quand il le souhaite et retrouve son espace",
  },
  {
    b: "Révisions et retours illimités",
    t: " pendant toute la durée du projet, sans aucune surfacturation",
  },
  {
    b: "Documentation complète et transfert",
    t: " : les treize livrables de votre cahier de consultation, remis à la livraison, dont la matrice qui relie chacune de vos règles approuvées à sa protection et à son test",
  },
] as const;

/** Phases suivantes, hors forfait : nommées ici plutôt que glissées dans le forfait. */
export const roadmap = [
  {
    b: "Parcours mineurs",
    t: " : autorisation du tuteur, langage adapté à l’âge, consentement expliqué à l’enfant, protections renforcées, après validation juridique",
  },
  {
    b: "Moteur de connaissances et concordance des sources",
    t: " : sources versionnées (Santé Canada, INESSS, ordres professionnels) et recherche active des contradictions",
  },
  {
    b: "Miroir du cheminement, fils conducteurs et profil évolutif",
    t: ", toujours présentés comme des hypothèses que l’utilisateur accepte, corrige ou rejette",
  },
  {
    b: "Données de santé et appareils connectés",
    t: " : Apple Santé, montres, avec provenance et sans conclusion clinique",
  },
  {
    b: "Accès exceptionnel encadré",
    t: " : procédure pour un professionnel ou une autorité reconnue, code propre à chaque situation, durée limitée, double validation avec votre participation",
  },
  {
    b: "Langues et régions supplémentaires",
    t: " : espagnol et autres langues, publication hors du Canada avec des ressources d’aide vérifiées pays par pays",
  },
  {
    b: "Test d’intrusion indépendant",
    t: " par un tiers de votre choix, à votre charge, avant l’ouverture à grande échelle (Progix coopère et corrige), et accompagnement marketing d’acquisition",
  },
  {
    b: "IA hébergée dans votre propre infrastructure",
    t: " : un modèle exploité par Harmonia elle-même, pour qu’aucun texte ne sorte de son environnement, si vous souhaitez appliquer votre règle dans sa lecture la plus stricte",
  },
  {
    b: "Programme de sécurité organisationnel",
    t: " : politiques internes, plan de reprise après sinistre et ses exercices, audits, gestion des fournisseurs; la première version en livre les procédures techniques de base",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Section 03 — répartition du forfait de 6 400 $ CA par prestation.   */
/* ------------------------------------------------------------------ */

export const investment = [
  {
    strong: "Conversation avec Harmonia",
    text: " : moteur IA, texte et voix, modes d’accompagnement, garde-fous",
    amount: "1 400 $",
    alt: false,
  },
  {
    strong: "Sécurité de l’utilisateur",
    text: " : SOS, niveaux de risque, alerte de protection, personne de confiance, plan de sécurité",
    amount: "1 000 $",
    alt: true,
  },
  {
    text: "Application iOS et Android : inscription, règles acceptées une à une, espace personnel",
    amount: "900 $",
    alt: false,
  },
  {
    text: "Données au Canada, sécurité, console d’administration et double validation",
    amount: "800 $",
    alt: true,
  },
  {
    text: "Cadrage, Charte Harmonia versionnée, design et logo",
    amount: "700 $",
    alt: false,
  },
  {
    text: "Mémoire contrôlée et outils : prise de recul, 1-2-3 Go, habitudes",
    amount: "600 $",
    alt: true,
  },
  {
    text: "Tests de sécurité, bêta fermée, abonnement et publication",
    amount: "450 $",
    alt: false,
  },
  {
    text: "Personnalisation et accessibilité : voix, nom, couleurs, lecteurs d’écran",
    amount: "350 $",
    alt: true,
  },
  {
    strong: "Documentation, transfert et support de 90 jours",
    text: "",
    amount: "200 $",
    alt: false,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Section 03 — échéancier : 450 $ aux deux semaines, par Interac.     */
/* ------------------------------------------------------------------ */

export const payments = [
  {
    pct: "N° 1",
    when: "À la signature",
    desc: "Déclenche le cadrage, la Charte Harmonia et le design",
    amount: "450 $",
  },
  {
    pct: "N° 2 à 14",
    when: "Toutes les deux semaines",
    desc: "13 versements de 450 $, dont 4 pendant le développement et 9 après la publication",
    amount: "5 850 $",
  },
  {
    pct: "N° 15",
    when: "Solde, semaine 28",
    desc: "Dernier versement : la propriété intellectuelle est alors entièrement transférée",
    amount: "100 $",
  },
] as const;

/** Coûts d’exploitation indicatifs, facturés directement au Client par les fournisseurs. */
export const runningCosts = [
  {
    b: "Hébergement et base de données au Canada",
    t: " : environ 35 à 60 $ par mois en bêta",
  },
  {
    b: "IA conversationnelle",
    t: " : à l’usage, de l’ordre de 1 à 3 cents par échange, soit environ 50 à 250 $ par mois pour quelques dizaines d’utilisateurs actifs",
  },
  {
    b: "Comptes développeur",
    t: " : Apple 99 USD par an, Google Play 25 USD une seule fois",
  },
  {
    b: "Commission des stores sur les abonnements",
    t: " : 15 % chez Google Play; chez Apple, 15 % dans le programme pour petites entreprises ou après un an d’abonnement, 30 % sinon",
  },
  {
    b: "Voix et notifications",
    t: " : moteurs de l’appareil et service de notifications, sans coût à l’usage au lancement",
  },
  {
    b: "Textos et courriels",
    t: " : messages de connexion et avis d’alerte, quelques cents par message, soit quelques dollars par mois au lancement",
  },
] as const;

/** Le devis est un forfait unique. Conservé pour compatibilité de type ;
 * non affiché dans la page. */
export const formules = [
  {
    key: "harmonia-v1",
    name: "Forfait PROGIX",
    badge: "Tout compris",
    tagline:
      "Conception, développement et publication de la première version d’Harmonia : conversation avec l’IA, Charte versionnée et protégée, sécurité de l’utilisateur, espace personnel, accessibilité et données au Canada.",
    price: "6 400 $ CA",
    priceUnit: "",
    priceNote: "6 400 $ CA · 14 versements de 450 $ aux deux semaines, puis 100 $",
    points: [
      { b: "Application iOS et Android", t: " + console d’administration" },
      { b: "Charte Harmonia et garde-fous", t: " protégés par double validation" },
      { b: "Support de 90 jours", t: " après la publication" },
    ],
    result: "Harmonia publiée sur l’App Store et Google Play.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Section 06 — phases de réalisation (2 mois + support).             */
/* ------------------------------------------------------------------ */

export const phases = [
  {
    tag: "PHASE 1 · J1–J10",
    title: "Cadrage, Charte & design",
    desc: "Comptes à votre nom, Charte Harmonia v1, architecture et fournisseur d’IA soumis à votre approbation, description des traitements pour votre avocate, parcours, écrans et logo",
  },
  {
    tag: "PHASE 2 · J11–J24",
    title: "Socle & inscription",
    desc: "Application iOS et Android, données au Canada, compte, âge, règles acceptées une à une, personne de confiance",
  },
  {
    tag: "PHASE 3 · J25–J38",
    title: "Parler avec Harmonia",
    desc: "Conversation texte et voix, modes, garde-fous, minimisation vers l’IA, mémoire contrôlée, outils",
  },
  {
    tag: "PHASE 4 · J39–J50",
    title: "Sécurité & espace personnel",
    desc: "SOS, niveaux de risque, plan de sécurité, alerte minimale, journal, objectifs, habitudes, personnalisation, abonnement",
  },
  {
    tag: "PHASE 5 · J51–J60",
    title: "Tests, bêta & publication",
    desc: "Scénarios de crise et de manipulation, accessibilité, bêta fermée, soumission aux stores, documentation",
  },
  {
    tag: "PUIS · 90 JOURS",
    title: "Support & premiers utilisateurs",
    desc: "Corrections, surveillance de l’IA et des alertes, ajustements de la Charte soumis à votre validation",
  },
] as const;

/** Header / footer navigation across the document set. The presentation page is
 * hidden for this project, so it is intentionally omitted from the nav. */
export const navLinks = [
  { key: "cahier", label: "Cahier des charges", href: "/cahier-des-charges" },
  { key: "calendrier", label: "Calendrier", href: "/calendrier" },
  { key: "devis", label: "Devis contractuel", href: "/devis" },
] as const;
