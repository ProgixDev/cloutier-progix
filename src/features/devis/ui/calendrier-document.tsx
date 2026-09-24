import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ---------- Cover data ---------- */
const coverBadges: ReadonlyArray<{ l: string; v: string; u: string }> = [
  { l: "Durée de développement", v: "60", u: " j" },
  { l: "Phases", v: "5", u: "" },
  { l: "Sprints", v: "5", u: " · 10 à 14 jours" },
  { l: "Versements", v: "15", u: " · Interac" },
];

const coverMeta: ReadonlyArray<{ l: string; v: string }> = [
  { l: "Projet", v: "Harmonia · accompagnement relationnel" },
  { l: "Client", v: "Patrick Cloutier" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "SPRINT-PROGIX-2026 · v1.0" },
];

/* ---------- Section 01 — overview data ---------- */
type Stat = { n: string; u: string; l: string };
const stats: ReadonlyArray<Stat> = [
  { n: "60", u: " jours", l: "du kickoff à la soumission aux stores" },
  { n: "5", u: "", l: "phases avec validation client" },
  { n: "90", u: " jours", l: "de support après la publication" },
  { n: "6 400", u: " $ CA", l: "montant total · 450 $ aux deux semaines" },
];

const G_NV = "linear-gradient(90deg,var(--navy),var(--navy-700))";
const G_TL = "linear-gradient(90deg,var(--navy-700),var(--cyan-deep))";
const G_CY = "linear-gradient(90deg,var(--cyan-deep),var(--cyan))";

type GanttRow = {
  name: string;
  sprint: string;
  left: string;
  width: string;
  label: string;
  bg: string;
};

/* Les bornes sont calculees sur 60 jours : left = (j1 - 1) / 60, width = duree
   / 60, moins ~0.4 point pour laisser respirer les barres entre elles. */
const gantt: ReadonlyArray<GanttRow> = [
  {
    name: "Cadrage, Charte & design",
    sprint: "Semaines 1–2",
    left: "0%",
    width: "16.3%",
    label: "J1–10",
    bg: G_NV,
  },
  {
    name: "Socle & inscription",
    sprint: "Semaines 2–4",
    left: "16.7%",
    width: "22.9%",
    label: "J11–24",
    bg: G_TL,
  },
  {
    name: "Parler avec Harmonia",
    sprint: "Semaines 4–6",
    left: "40%",
    width: "22.9%",
    label: "J25–38",
    bg: G_CY,
  },
  {
    name: "Sécurité & espace personnel",
    sprint: "Semaines 6–8",
    left: "63.3%",
    width: "19.6%",
    label: "J39–50",
    bg: G_CY,
  },
  {
    name: "Tests, bêta & publication",
    sprint: "Semaines 8–9",
    left: "83.3%",
    width: "16.7%",
    label: "J51–60",
    bg: G_NV,
  },
];

/* ---------- Section 02 — sprint detail data ---------- */
const ACC = "linear-gradient(160deg,var(--cyan-deep),var(--cyan))";
const NAV = "linear-gradient(160deg,var(--navy-900),var(--navy))";

type Tag = { label: string; bg: string; fg: string; bd: string };
const cy = (label: string): Tag => ({
  label,
  bg: "var(--tint)",
  fg: "var(--cyan-ink)",
  bd: "none",
});
const nv = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.08)",
  fg: "#cdd9ec",
  bd: "none",
});
const gh = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.05)",
  fg: "var(--muted)",
  bd: "1px solid var(--line)",
});
const okT = (label: string): Tag => ({ label, bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" });

type Feat = { b: string; t: string };
const F = (b: string, t: string): Feat => ({ b, t });

type Sprint = {
  phaseNum: string;
  phaseTitle: string;
  phaseDays: string;
  phaseDotBg: string;
  leftBg: string;
  num: string;
  days: string;
  name: string;
  feats: ReadonlyArray<Feat>;
  tags: ReadonlyArray<Tag>;
};

const sprints: ReadonlyArray<Sprint> = [
  {
    phaseNum: "1",
    phaseTitle: "Phase 1 · Cadrage, Charte & design",
    phaseDays: "J1 – J10",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "1",
    days: "J1–J10",
    name: "Kickoff, comptes à votre nom, Charte Harmonia v1 et design",
    feats: [
      F(
        "",
        "Réunion de kickoff : liste nominative de l’équipe, accord de confidentialité, annexe confidentielle des exclusions, rôles et relèves des intervenants, réponses aux questions du cahier des charges et priorités confirmées.",
      ),
      F(
        "Comptes à votre nom",
        " : Apple Developer (demande de numéro D-U-N-S), Google Play Console, hébergement au Canada, fournisseur d’IA, nom de domaine et dépôt de code.",
      ),
      F(
        "Charte Harmonia v1",
        " : vos 20 principes du cœur, vos 25 règles de sécurité et les précisions ajoutées depuis, la grille des niveaux de risque et les formulations de référence, soumises à votre validation.",
      ),
      F(
        "Choix du fournisseur d’IA",
        " selon vos critères : aucun entraînement sur les données, conservation la plus courte garantie par contrat (entente de non-conservation demandée), traitement au Canada lorsque possible; version du modèle figée.",
      ),
      F(
        "Description des traitements",
        " et des flux vers chaque fournisseur, remise à votre avocate dès le choix du fournisseur d’IA, pour que l’évaluation des facteurs relatifs à la vie privée soit faite avant la bêta; aucune conversation réelle n’est envoyée au fournisseur d’IA avant.",
      ),
      F(
        "Design",
        " : logo (des mains qui soutiennent une tortue, vert et ivoire), inscription, conversation, SOS, espace personnel et réglages.",
      ),
      F(
        "Architecture",
        ", modèle de données, cartographie des flux vers chaque fournisseur et plan de sécurité.",
      ),
    ],
    tags: [cy("Charte validée"), nv("Design"), gh("Comptes")],
  },
  {
    phaseNum: "2",
    phaseTitle: "Phase 2 · Socle & inscription",
    phaseDays: "J11 – J24",
    phaseDotBg: "var(--cyan-deep)",
    leftBg: ACC,
    num: "2",
    days: "J11–J24",
    name: "Application iOS et Android, données au Canada et inscription règle par règle",
    feats: [
      F("Application Flutter", " iOS et Android, navigation et identité visuelle appliquées."),
      F(
        "Backend hébergé au Canada",
        " : base de données, authentification, chiffrement, cloisonnement des données et journal d’événements.",
      ),
      F(
        "Environnements séparés",
        " développement, préproduction et production; secrets hors du code, aucune donnée réelle hors production, copie de sauvegarde hors du projet principal.",
      ),
      F(
        "Inscription",
        " : âge légal selon la province, coordonnées de sécurité, règles à lire ou à écouter, acceptées une à une avec copie horodatée, règles de sécurité expliquées, personne de confiance (maintenant, plus tard ou jamais), écran « Mes autorisations », localisation consentie, documents juridiques et avis de sécurité du compte.",
      ),
      F(
        "Console d’administration",
        " : double authentification; ressources d’aide, destinataires de l’alerte, rôles et versions de la Charte soumis à double validation, avec historique.",
      ),
      F("", "Première version installable sur votre téléphone, avec TestFlight et Google Play."),
    ],
    tags: [cy("Inscription"), nv("Socle au Canada"), gh("Console")],
  },
  {
    phaseNum: "3",
    phaseTitle: "Phase 3 · Parler avec Harmonia",
    phaseDays: "J25 – J38",
    phaseDotBg: "var(--cyan-deep)",
    leftBg: ACC,
    num: "3",
    days: "J25–J38",
    name: "Conversation texte et voix, garde-fous et mémoire contrôlée",
    feats: [
      F(
        "Conversation libre",
        " avec la première prise de contact que vous avez approuvée et les modes discussion, réflexion et analyse.",
      ),
      F("Mode vocal", " : dictée, lecture à voix haute, voix féminine ou masculine."),
      F(
        "Orchestrateur IA",
        " : sur le serveur, au Canada; Charte active et modèle figé, contrôles avant et après le modèle, contexte minimal et autorisé, masquage des identifiants sensibles.",
      ),
      F(
        "Mémoire contrôlée",
        " : « Ce qu’Harmonia retient », provenance, modification, suppression, « Oublie ça », mode sans personnalisation et historique des conversations.",
      ),
      F(
        "Outils",
        " : prise de recul, 1-2-3 Go, Observer une pensée et outils relationnels (clarifier ce que je veux, explorer ce que je ressens, résoudre un problème, préparer une conversation difficile), toujours proposés avant d’être ouverts.",
      ),
    ],
    tags: [cy("Conversation"), nv("Garde-fous"), gh("Mémoire")],
  },
  {
    phaseNum: "4",
    phaseTitle: "Phase 4 · Sécurité & espace personnel",
    phaseDays: "J39 – J50",
    phaseDotBg: "var(--cyan-deep)",
    leftBg: ACC,
    num: "4",
    days: "J39–J50",
    name: "SOS, niveaux de risque, plan de sécurité, espace personnel et personnalisation",
    feats: [
      F(
        "Sécurité de l’utilisateur",
        " : SOS sur chaque écran, utilisable sans réseau et pour qui ne peut pas téléphoner, niveaux de risque, 911 par le composeur, ressources vérifiées selon la localisation ou la région choisie, sortie rapide.",
      ),
      F(
        "Mon plan Harmonia",
        ", personne de confiance, mon professionnel et alerte de protection minimale à l’intervenant formé, avec avis, prise en charge et relance.",
      ),
      F(
        "Espace personnel",
        " : journal, objectifs, moments importants, épingles, symbole personnel et Changer une habitude.",
      ),
      F(
        "Personnalisation et accessibilité",
        " : couleurs, police, taille, nom d’Harmonia, avatar, VoiceOver, TalkBack et interface anglaise.",
      ),
      F(
        "Abonnement",
        " intégré aux stores, sans jamais bloquer le SOS ni les données de l’utilisateur; mode de protection temporaire et signalement de problème.",
      ),
    ],
    tags: [cy("SOS"), nv("Espace personnel"), gh("Abonnement")],
  },
  {
    phaseNum: "5",
    phaseTitle: "Phase 5 · Tests, bêta & publication",
    phaseDays: "J51 – J60",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "5",
    days: "J51–J60",
    name: "Tests de sécurité, bêta fermée, soumission aux stores et transfert",
    feats: [
      F(
        "Batterie de scénarios de sécurité",
        " : suicide, automutilation, malveillance, manipulation, consignes cachées, contenus interdits, données bancaires, fausses alertes et SOS en mode avion. Aucune soumission si un scénario échoue.",
      ),
      F(
        "Recette",
        " contre les critères d’acceptation du cahier des charges, tests d’accessibilité et restauration d’une sauvegarde.",
      ),
      F(
        "Bêta fermée",
        " avec vos premiers utilisateurs de confiance, sur l’environnement de production, avec les consentements, la politique de confidentialité et l’évaluation des facteurs relatifs à la vie privée en place; puis corrections.",
      ),
      F(
        "Soumission App Store et Google Play",
        " dans les stores canadiens, fiches et captures, mise en ligne de la console.",
      ),
      F(
        "Documentation et formation",
        " : les treize livrables de votre cahier de consultation et la prise en main de la console.",
      ),
    ],
    tags: [okT("Soumise aux stores"), nv("Documentation")],
  },
];

/* ---------- Section 03 — payment schedule data ---------- */
/* Un versement tous les 14 jours à partir de J1 : J = 1 + 14 × (n − 1).
   Quatorze versements de 450 $, puis un solde de 100 $ : 6 400 $ CA. */
type Installment = { n: string; day: string; moment: string; amt: string };
const installments: ReadonlyArray<Installment> = [
  { n: "1", day: "J1 · signature", moment: "Démarrage : cadrage, Charte et design", amt: "450 $" },
  { n: "2", day: "J15 · semaine 2", moment: "Sprint 2 : socle et inscription", amt: "450 $" },
  { n: "3", day: "J29 · semaine 4", moment: "Sprint 3 : conversation", amt: "450 $" },
  {
    n: "4",
    day: "J43 · semaine 6",
    moment: "Sprint 4 : sécurité et espace personnel",
    amt: "450 $",
  },
  { n: "5", day: "J57 · semaine 8", moment: "Sprint 5 : tests, bêta et publication", amt: "450 $" },
  { n: "6", day: "J71 · semaine 10", moment: "Support après la publication", amt: "450 $" },
  { n: "7", day: "J85 · semaine 12", moment: "Support après la publication", amt: "450 $" },
  { n: "8", day: "J99 · semaine 14", moment: "Support après la publication", amt: "450 $" },
  { n: "9", day: "J113 · semaine 16", moment: "Support après la publication", amt: "450 $" },
  { n: "10", day: "J127 · semaine 18", moment: "Support après la publication", amt: "450 $" },
  {
    n: "11",
    day: "J141 · semaine 20",
    moment: "Fin prévue du support de 90 jours (vers J150)",
    amt: "450 $",
  },
  { n: "12", day: "J155 · semaine 22", moment: "Paiement échelonné", amt: "450 $" },
  { n: "13", day: "J169 · semaine 24", moment: "Paiement échelonné", amt: "450 $" },
  { n: "14", day: "J183 · semaine 26", moment: "Paiement échelonné", amt: "450 $" },
  {
    n: "15",
    day: "J197 · semaine 28",
    moment: "Solde : transfert complet de la propriété intellectuelle",
    amt: "100 $",
  },
];

const dispFont = "var(--font-disp)";

/** Tinted callout with an icon chip, matching the document’s info boxes. */
function Callout({
  icon,
  iconBg,
  title,
  titleColor = "#fff",
  bg,
  border,
  children,
}: {
  icon: string;
  iconBg: string;
  title: string;
  titleColor?: string;
  bg: string;
  border: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: "14px",
        padding: "18px 22px",
        margin: "16px 0",
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: "30px",
          height: "30px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
          fontFamily: dispFont,
          background: iconBg,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <h4
          style={{
            fontFamily: dispFont,
            fontSize: "14px",
            margin: "0 0 4px",
            color: titleColor,
            fontWeight: 600,
          }}
        >
          {title}
        </h4>
        <p style={{ fontSize: "13.6px", margin: 0, color: "var(--slate)", lineHeight: 1.55 }}>
          {children}
        </p>
      </div>
    </div>
  );
}

function DiamondTitle({ children, top = "30px" }: { children: React.ReactNode; top?: string }) {
  return (
    <h3
      style={{
        fontFamily: dispFont,
        fontSize: "18px",
        color: "#fff",
        fontWeight: 600,
        margin: `${top} 0 12px`,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: "var(--cyan)", fontSize: "13px" }} aria-hidden="true">
        ◆
      </span>
      {children}
    </h3>
  );
}

const SECTION_INNER = {
  maxWidth: "1040px",
  margin: "0 auto",
  padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
} as const;

/**
 * "Calendrier des sprints" document — header, hero cover, the four content
 * sections (overview + Gantt, sprint detail, payment schedule, cadence &
 * validation), and the footer. A Server Component composing client leaves
 * (header, FAB, scroll-reveal) at the edges.
 */
export function CalendrierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="calendrier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Calendrier des sprints · Planning de réalisation"
          title="Le plan de"
          titleLight="livraison, sprint par sprint"
          subtitle="Découpage de la réalisation d’Harmonia sur 2 mois : 5 phases, chacune réalisée en un sprint de 10 à 14 jours, de la validation de la Charte jusqu’à la soumission sur l’App Store et Google Play, suivis de 90 jours de support. Le règlement suit le même rythme : 450 $ toutes les deux semaines par virement Interac, de la signature jusqu’au solde de la semaine 28."
          badges={coverBadges}
          meta={coverMeta}
        />

        {/* 01 — VUE D’ENSEMBLE */}
        <section
          id="s1"
          data-dc-section
          style={{ width: "100%", backgroundColor: "var(--band-a)" }}
        >
          <div style={SECTION_INNER}>
            <SectionHeader
              num="01 — VUE D’ENSEMBLE"
              title="Vue d’ensemble du planning"
              lead="Harmonia est livrée de façon itérative sur 60 jours, en 5 phases de 10 à 14 jours, jusqu’à la soumission aux stores; 90 jours de support prennent ensuite le relais. Un versement de 450 $ tombe toutes les deux semaines pendant le développement, et les versements se poursuivent après la publication."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))",
                gap: "1px",
                background: "var(--line)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                overflow: "hidden",
                margin: "18px 0",
              }}
            >
              {stats.map((t) => (
                <div
                  key={t.l}
                  style={{ background: "var(--card)", padding: "20px 16px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "28px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    {t.n}
                    <small style={{ fontSize: "14px", color: "var(--cyan)", fontWeight: 600 }}>
                      {t.u}
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      marginTop: "4px",
                      lineHeight: 1.35,
                    }}
                  >
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
            <DiamondTitle>Diagramme de Gantt</DiamondTitle>
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  padding: "22px 22px 18px",
                  background: "var(--paper)",
                  minWidth: "640px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "16px",
                    marginLeft: "172px",
                    marginBottom: "12px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {(
                    [
                      { left: "0%", label: "J1" },
                      { left: "22%", label: "J15" },
                      { left: "47%", label: "J30" },
                      { left: "72%", label: "J45" },
                      { left: "95%", label: "J60" },
                    ] as const
                  ).map((mark) => (
                    <span
                      key={mark.label}
                      style={{
                        position: "absolute",
                        left: mark.left,
                        top: 0,
                        fontFamily: dispFont,
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "var(--muted)",
                      }}
                    >
                      {mark.label}
                    </span>
                  ))}
                </div>
                {gantt.map((g) => (
                  <div
                    key={g.name}
                    style={{ display: "flex", alignItems: "center", marginBottom: "9px" }}
                  >
                    <div style={{ width: "172px", flexShrink: 0, paddingRight: "14px" }}>
                      <div
                        style={{
                          fontFamily: dispFont,
                          fontWeight: 600,
                          fontSize: "12.5px",
                          color: "#fff",
                          lineHeight: 1.25,
                        }}
                      >
                        {g.name}
                      </div>
                      <div style={{ fontSize: "10.5px", color: "var(--muted)" }}>{g.sprint}</div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        flex: 1,
                        height: "30px",
                        background: "var(--card)",
                        borderRadius: "7px",
                        border: "1px solid var(--line)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3px",
                          bottom: "3px",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 9px",
                          color: "#fff",
                          fontSize: "10.5px",
                          fontWeight: 600,
                          fontFamily: dispFont,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          boxShadow: "0 2px 7px rgba(12,35,64,.20)",
                          left: g.left,
                          width: g.width,
                          background: g.bg,
                        }}
                      >
                        {g.label}
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    gap: "18px",
                    marginLeft: "172px",
                    marginTop: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  {(
                    [
                      [G_NV, "Cadrage & publication"],
                      [G_TL, "Socle & inscription"],
                      [G_CY, "Conversation, sécurité & espace personnel"],
                    ] as const
                  ).map(([bg, label]) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        fontSize: "11.5px",
                        color: "var(--slate)",
                      }}
                    >
                      <span
                        style={{
                          width: "14px",
                          height: "10px",
                          borderRadius: "3px",
                          background: bg,
                        }}
                      />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Callout
              icon="i"
              iconBg="var(--cyan)"
              title="Durée & jalonnement"
              bg="var(--tint-2)"
              border="rgba(56,182,255,0.22)"
            >
              60 jours pour le périmètre du devis, à validations rapides. Le démarrage (J1)
              correspond au premier versement et à la réunion de kickoff. Les bornes en jours
              restent indicatives et peuvent glisser selon la rapidité des validations, les
              révisions demandées et l’ouverture des comptes à votre nom. Les modules de la feuille
              de route (parcours mineurs, connaissances et concordance des sources, données de
              santé, accès exceptionnel) suivent leur propre calendrier, en dehors des 60 jours.
            </Callout>
          </div>
        </section>

        <ChapterBand
          eyebrow="Méthode"
          title="Itératif, validé"
          titleAccent="à chaque étape."
          sub="Dès le sprint 2, vous essayez Harmonia sur votre propre téléphone à la fin de chaque sprint, par TestFlight ou le test interne de Google Play, avec des situations fictives. De la première règle acceptée à l’inscription jusqu’au premier SOS testé, la livraison finale ne réserve aucune surprise, et aucune règle de la Charte ne change sans votre accord."
        />

        {/* 02 — DÉTAIL */}
        <section
          id="s2"
          data-dc-section
          style={{ width: "100%", backgroundColor: "var(--band-b)" }}
        >
          <div style={SECTION_INNER}>
            <SectionHeader num="02 — DÉTAIL" title="Détail des sprints" />
            {sprints.map((s) => (
              <div key={s.num}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    margin: "30px 0 6px",
                    paddingBottom: "10px",
                    borderBottom: "2px solid var(--line)",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "9px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "13px",
                      flexShrink: 0,
                      background: s.phaseDotBg,
                    }}
                  >
                    {s.phaseNum}
                  </div>
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 600,
                      fontSize: "17px",
                      color: "#fff",
                    }}
                  >
                    {s.phaseTitle}
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      fontFamily: dispFont,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--cyan-ink)",
                      background: "var(--tint)",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.phaseDays}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    margin: "12px 0",
                    background: "var(--card)",
                    boxShadow: "var(--shadow)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "104px",
                      flexShrink: 0,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "18px 10px",
                      textAlign: "center",
                      background: s.leftBg,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "10px",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.7)",
                      }}
                    >
                      Sprint
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 700,
                        fontSize: "34px",
                        lineHeight: 1,
                        margin: "2px 0 6px",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#fff",
                        background: "rgba(255,255,255,.16)",
                        padding: "3px 9px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.days}
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: "18px 22px", minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      {s.name}
                    </div>
                    {s.feats.map((f, fi) => (
                      <div
                        key={fi}
                        style={{
                          display: "flex",
                          gap: "9px",
                          padding: "4px 0",
                          fontSize: "13.4px",
                          color: "var(--slate)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--cyan-ink)",
                            flexShrink: 0,
                            fontWeight: 700,
                            fontSize: "12px",
                            marginTop: "3px",
                          }}
                        >
                          ✓
                        </span>
                        <span>
                          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{f.b}</strong>
                          {f.t}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        marginTop: "12px",
                        paddingTop: "12px",
                        borderTop: "1px solid var(--line)",
                        display: "flex",
                        gap: "8px",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: dispFont,
                          fontSize: "10px",
                          letterSpacing: ".8px",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                        }}
                      >
                        Livrables
                      </span>
                      {s.tags.map((t) => (
                        <span
                          key={t.label}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontFamily: dispFont,
                            fontWeight: 600,
                            fontSize: "10.5px",
                            letterSpacing: ".6px",
                            textTransform: "uppercase",
                            padding: "4px 11px",
                            borderRadius: "999px",
                            whiteSpace: "nowrap",
                            background: t.bg,
                            color: t.fg,
                            border: t.bd,
                          }}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Callout
              icon="—"
              iconBg="var(--ok)"
              title="Puis : 90 jours de support après la publication"
              titleColor="#7ef0d2"
              bg="var(--ok-bg)"
              border="rgba(52,226,192,0.25)"
            >
              Dès la publication, Progix suit l’examen des stores jusqu’à la mise en ligne,
              surveille les erreurs, la disponibilité du fournisseur d’IA et les alertes de
              sécurité, corrige les bugs et propose les ajustements de la Charte constatés avec les
              premiers utilisateurs. Chaque ajustement de la Charte reste soumis à votre validation
              avant d’être activé.
            </Callout>
          </div>
        </section>

        {/* 03 — VERSEMENTS */}
        <section
          id="s3"
          data-dc-section
          style={{ width: "100%", backgroundColor: "var(--band-a)" }}
        >
          <div style={SECTION_INNER}>
            <SectionHeader
              num="03 — VERSEMENTS"
              title="Échéancier des versements"
              lead="Le montant total de 6 400 $ CA est réglé en quinze versements par virement Interac : quatorze de 450 $ toutes les deux semaines à partir de la signature, puis un solde de 100 $."
            />
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Échéance</th>
                    <th>Moment du projet</th>
                    <th className={styles.thRight}>Montant</th>
                  </tr>
                </thead>
                <tbody>
                  {installments.map((row, idx) => (
                    <tr key={row.n} className={idx % 2 === 1 ? styles.tableAlt : undefined}>
                      <td>
                        <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{row.n}</strong>
                      </td>
                      <td style={{ whiteSpace: "nowrap" }}>{row.day}</td>
                      <td>{row.moment}</td>
                      <td className={styles.tableNum}>{row.amt}</td>
                    </tr>
                  ))}
                  <tr className={styles.tableTotal}>
                    <td colSpan={3}>
                      <strong>TOTAL · 15 VERSEMENTS INTERAC</strong>
                    </td>
                    <td className={styles.tableTotalAmount}>6 400 $</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout
              icon="$"
              iconBg="var(--cyan)"
              title="Montant total : 6 400 $ CA"
              bg="var(--tint-2)"
              border="rgba(56,182,255,0.22)"
            >
              Quinze versements par virement Interac au{" "}
              <span style={{ whiteSpace: "nowrap" }}>514-576-5993</span>, en indiquant « Harmonia »
              et le numéro du versement : cinq pendant le développement (2 250 $), dix après la
              publication (4 150 $). Ce montant, taxes applicables incluses, comprend la conception,
              le développement, la publication sur les stores, la documentation, la formation et 90
              jours de support. La propriété intellectuelle est transférée à mesure des versements,
              entièrement au quinzième. Les coûts d’exploitation (hébergement, IA, comptes stores)
              et les modules de la feuille de route sont distincts du présent devis. Aucun
              développement ne débute avant réception du premier versement.
            </Callout>
          </div>
        </section>

        {/* 04 — CADENCE */}
        <section
          id="s4"
          data-dc-section
          style={{ width: "100%", backgroundColor: "var(--band-b)" }}
        >
          <div style={SECTION_INNER}>
            <SectionHeader num="04 — CADENCE" title="Cadence & validation" />
            <DiamondTitle top="14px">Rythme de travail</DiamondTitle>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Un sprint de <b style={INK}>10 à 14 jours</b> par phase, avec un versement toutes
                les deux semaines et une <b style={INK}>démo en fin de chaque sprint</b>, sur votre
                téléphone dès le sprint 2.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                <b style={INK}>Point d’avancement hebdomadaire</b> : revue de ce qui a été livré et
                priorités de la semaine suivante.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Développement <b style={INK}>itératif</b> : à partir du sprint 2, chaque sprint
                livre un incrément installable et testable; le sprint 1 livre la Charte, le design
                et les comptes.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Les démos se font avec des <b style={INK}>situations fictives</b>; la bêta fermée
                tourne sur l’environnement de production, avec les consentements, la politique de
                confidentialité et l’évaluation des facteurs relatifs à la vie privée en place.
              </li>
            </ul>
            <DiamondTitle>Points de validation</DiamondTitle>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                <b style={INK}>Charte Harmonia v1 validée</b> par vous avant qu’elle ne pilote l’IA,
                à la fin de la phase 1, en même temps que le design et l’
                <b style={INK}>architecture concrète</b> (fournisseurs, chiffrement, flux de
                données), que nous vous présentons pour approbation.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Validation du Client à chaque <b style={INK}>fin de phase</b> (inscription,
                conversation, sécurité, espace personnel) avant de poursuivre.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Toute nouvelle version de la Charte ou du modèle d’IA, pendant le projet comme
                après, exige{" "}
                <b style={INK}>
                  votre approbation, ou celle de votre délégué désigné par écrit, et celle de
                  l’intervenant de sécurité critique
                </b>
                . Seule la version de test fait exception : elle désigne la préproduction, sans
                utilisateur ni donnée réels; la bêta fermée suit toutes les règles de production.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Recette finale contre les{" "}
                <b style={INK}>critères d’acceptation du cahier des charges</b>, vérifiés ensemble
                avant la soumission aux stores.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Le délai suppose <b style={INK}>au maximum deux réunions de suivi par semaine</b> et
                la validation rapide des livrables; tout retard côté Client décale d’autant le
                calendrier et n’est pas compté dans le délai.
              </li>
              <li style={LI}>
                <span style={LI_MARK}>—</span>
                Toute modification du périmètre fait l’objet d’un accord écrit (voir{" "}
                <a
                  href="/devis"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  devis
                </a>{" "}
                &{" "}
                <a
                  href="/cahier-des-charges"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  cahier des charges
                </a>
                ).
              </li>
            </ul>
            <Callout
              icon="★"
              iconBg="var(--ok)"
              title="Vos révisions ne sont jamais facturées"
              titleColor="#7ef0d2"
              bg="var(--ok-bg)"
              border="rgba(52,226,192,0.25)"
            >
              Vous pouvez demander autant de révisions et de retours que vous le souhaitez pendant
              toute la durée du projet, sans aucune surfacturation : le montant de 6 400 $ ne bouge
              pas. En contrepartie, chaque révision consomme du temps de production. Les 60 jours
              valent donc à périmètre constant et validations rapides : tout décalage causé par une
              demande de révision, un retour tardif ou une validation en attente relève du Client et
              reporte la date de livraison d’autant. Une demande qui ajoute une fonctionnalité
              nouvelle n’est pas une révision : elle passe par un avenant.
            </Callout>
            <Callout
              icon="▸"
              iconBg="var(--amber)"
              title="Ce qui peut décaler la date"
              titleColor="#f0c98a"
              bg="var(--amber-bg)"
              border="rgba(232,161,58,0.3)"
            >
              La tenue des 60 jours dépend de la rapidité des validations et du volume de révisions
              demandées. Elle dépend aussi de l’ouverture des comptes à votre nom : l’inscription
              Apple d’une société exige un numéro D-U-N-S, qui peut prendre jusqu’à deux semaines,
              c’est pourquoi la demande part dès le premier jour. La relecture de la Charte et des
              textes juridiques par vos professionnels suit leur propre agenda. Ces délais ne sont
              pas décomptés des 60 jours. Enfin, l’App Store et Google Play examinent les
              applications d’accompagnement avec attention et peuvent demander des modifications
              avant de publier.
            </Callout>
          </div>
        </section>

        <Footer
          heading="Un plan clair, une livraison maîtrisée"
          text="Ce calendrier accompagne le devis et le cahier des charges. Sprint après sprint, vous voyez Harmonia prendre forme sur votre téléphone, jusqu’à sa soumission sur l’App Store et Google Play."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}

/* ---------- Shared list styling for section 04 ---------- */

const LI = {
  position: "relative",
  padding: "5px 0 5px 22px",
  fontSize: "13.8px",
  color: "var(--slate)",
  lineHeight: 1.55,
} as const;

const LI_MARK = {
  position: "absolute",
  left: 0,
  top: "5px",
  color: "var(--cyan)",
  fontWeight: 700,
  fontSize: "12px",
} as const;

const INK = { color: "var(--ink)", fontWeight: 600 } as const;
