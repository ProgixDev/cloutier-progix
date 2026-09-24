import type { CSSProperties, ReactNode } from "react";
import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ProgixReel } from "./progix-reel";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import styles from "./devis.module.css";

/* ------------------------------------------------------------------ */
/* Shared inline-style fragments (lifted verbatim from the source).   */
/* ------------------------------------------------------------------ */

const SECTION_DOTS: CSSProperties = {
  width: "100%",
};

const CONTAINER: CSSProperties = {
  maxWidth: "1040px",
  margin: "0 auto",
  padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
};

const CARD: CSSProperties = {
  background: "var(--card-grad)",
  border: "1px solid var(--card-bd)",
  borderRadius: "14px",
  padding: "22px 24px",
  boxShadow: "var(--shadow)",
};

const CARD_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "15px",
  color: "#fff",
  fontWeight: 600,
  margin: "0 0 7px",
  display: "flex",
  alignItems: "center",
  gap: "9px",
};

const CARD_TEXT: CSSProperties = {
  fontSize: "14px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.6,
};

const ROUND_BADGE: CSSProperties = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "#fff",
  fontSize: "13px",
  fontWeight: 700,
  fontFamily: "var(--font-disp)",
};

const GRID_AUTO: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
  gap: "16px",
};

const H3_DIAMOND: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "19px",
  color: "#fff",
  fontWeight: 600,
  margin: "34px 0 12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const INFOBOX: CSSProperties = {
  background: "var(--tint-2)",
  border: "1px solid rgba(56,182,255,0.22)",
  borderRadius: "14px",
  padding: "18px 22px",
  margin: "16px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

const INFOBOX_ICON: CSSProperties = {
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
  fontFamily: "var(--font-disp)",
  background: "var(--cyan)",
};

const INFOBOX_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "14px",
  margin: "0 0 4px",
  color: "#fff",
  fontWeight: 600,
};

const INFOBOX_TEXT: CSSProperties = {
  fontSize: "13.6px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.55,
};

const STRONG_INK: CSSProperties = { color: "var(--ink)", fontWeight: 600 };

const TH: CSSProperties = {
  background: "var(--navy)",
  color: "#fff",
  textAlign: "left",
  padding: "11px 15px",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
};

const TAG_BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "10.5px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
  padding: "4px 11px",
  borderRadius: "999px",
  whiteSpace: "nowrap",
};

const STEP_CARD: CSSProperties = {
  // 220px de base : quatre ou cinq étapes tiennent sur une ligne en grand écran.
  flex: "1 1 220px",
  background: "var(--card-grad)",
  border: "1px solid var(--card-bd)",
  borderRadius: "14px",
  padding: "16px 14px",
  boxShadow: "var(--shadow)",
};

const STEP_EYEBROW: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 700,
  fontSize: "11px",
  color: "var(--cyan-ink)",
  letterSpacing: ".5px",
};

const STEP_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "14px",
  color: "#fff",
  margin: "6px 0 4px",
};

const STEP_DESC: CSSProperties = {
  fontSize: "12.5px",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const STEP_RULE: CSSProperties = {
  height: "6px",
  borderRadius: "6px",
  background: "linear-gradient(90deg,var(--cyan),var(--navy))",
  margin: "14px 0 0",
};

const TABLE: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "13.6px",
  border: "1px solid var(--line)",
  borderRadius: "14px",
  overflow: "hidden",
  minWidth: "560px",
};

const A_GRAD = "linear-gradient(150deg,var(--cyan-deep),var(--cyan))";
const N_GRAD = "linear-gradient(150deg,var(--navy),var(--navy-700))";

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function Strong({ children }: { children: ReactNode }) {
  return <strong style={STRONG_INK}>{children}</strong>;
}

/** Subsection heading with the cyan diamond marker, with custom top margin. */
function DiamondHeading({
  children,
  marginTop = "34px",
}: {
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3 style={{ ...H3_DIAMOND, margin: `${marginTop} 0 12px` }}>
      <span style={{ color: "var(--cyan)", fontSize: "13px" }} aria-hidden="true">
        ◆
      </span>
      {children}
    </h3>
  );
}

function FeatureCard({
  icon,
  iconBg,
  title,
  children,
}: {
  icon: ReactNode;
  iconBg: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={CARD}>
      <h4 style={CARD_TITLE}>
        <span style={{ ...ROUND_BADGE, background: iconBg }} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h4>
      <p style={CARD_TEXT}>{children}</p>
    </div>
  );
}

function InfoCallout({
  iconBg = "var(--cyan)",
  icon = "i",
  title,
  titleColor = "#fff",
  borderColor = "rgba(56,182,255,0.22)",
  background = "var(--tint-2)",
  children,
}: {
  iconBg?: string;
  icon?: ReactNode;
  title: string;
  titleColor?: string;
  borderColor?: string;
  background?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ ...INFOBOX, background, border: `1px solid ${borderColor}` }}>
      <div style={{ ...INFOBOX_ICON, background: iconBg }} aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4 style={{ ...INFOBOX_TITLE, color: titleColor }}>{title}</h4>
        <p style={INFOBOX_TEXT}>{children}</p>
      </div>
    </div>
  );
}

/** A zebra-striped two- or three-column table from plain string rows. */
function DataTable({
  head,
  rows,
}: {
  head: ReadonlyArray<string>;
  rows: ReadonlyArray<ReadonlyArray<string>>;
}) {
  return (
    <div style={{ overflowX: "auto", margin: "16px 0" }}>
      <table style={TABLE}>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} style={TH}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const base = i % 2 === 1 ? TD_NB_ALT : TD_NB;
            const cell = i === rows.length - 1 ? { ...base, borderBottom: "none" } : base;
            return (
              <tr key={row[0]}>
                {row.map((value, j) => (
                  <td key={j} style={cell}>
                    {j === 0 ? <Strong>{value}</Strong> : value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** A checked list inside a single card, one line per item. */
function CheckCard({ lines }: { lines: ReadonlyArray<string> }) {
  return (
    <div
      style={{
        background: "var(--card-grad)",
        border: "1px solid var(--card-bd)",
        borderRadius: "14px",
        padding: "8px 24px",
        boxShadow: "var(--shadow)",
        margin: "6px 0 14px",
      }}
    >
      {lines.map((line, i) => (
        <div
          key={line}
          style={{
            display: "flex",
            gap: "12px",
            padding: "12px 0",
            borderBottom: i < lines.length - 1 ? "1px solid var(--line)" : "none",
            fontSize: "13.8px",
            color: "var(--slate)",
            lineHeight: 1.55,
          }}
        >
          <span
            style={{
              color: "var(--ok)",
              flexShrink: 0,
              fontWeight: 700,
              fontSize: "12px",
              marginTop: "3px",
            }}
            aria-hidden="true"
          >
            ✓
          </span>
          <span>{line}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data — established from the Client’s design conversation            */
/* (30 août – 11 septembre 2026), his consultation brief for           */
/* development firms and his questions to firms.                        */
/* ------------------------------------------------------------------ */

const meta = [
  { l: "Projet", v: "Harmonia · accompagnement relationnel" },
  { l: "Client", v: "Patrick Cloutier" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "CDC-PROGIX-2026 · v1.0" },
] as const;

const toc = [
  { n: "01", t: "Contexte & vision" },
  { n: "02", t: "Objectifs & critères de réussite" },
  { n: "03", t: "Publics d’Harmonia" },
  { n: "04", t: "Périmètre fonctionnel de la première version" },
  { n: "05", t: "Parcours utilisateurs" },
  { n: "06", t: "Approche technique" },
  { n: "07", t: "Exigences & critères d’acceptation" },
  { n: "08", t: "Couverture de votre cadre Harmonia" },
  { n: "09", t: "Réponse à votre cahier de consultation" },
  { n: "10", t: "Livrables & accompagnement" },
] as const;

type Tag = { label: string; bg: string; fg: string; bd: string };
type Feat = { b: string; t: string };
type Module = {
  n: string;
  iconBg: string;
  title: string;
  badge: string;
  desc: string;
  feats: Feat[];
  tags: Tag[];
};

const inc: Tag = { label: "Inclus", bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" };
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
const F = (b: string, t: string): Feat => ({ b, t });

const modules: Module[] = [
  {
    n: "01",
    iconBg: N_GRAD,
    title: "Parler avec Harmonia",
    badge: "Cœur de l’application",
    desc: "L’utilisateur vient d’abord parler. Le reste se construit autour de ce qu’il souhaite faire.",
    feats: [
      F(
        "Première prise de contact approuvée, mot pour mot",
        " : « Bonjour, je suis Harmonia. 🌿 Je suis là pour t’écouter et réfléchir avec toi. Tu peux me parler librement de ce que tu vis ou de ce que tu aimerais améliorer dans ta vie. Il n’est pas nécessaire de savoir exactement par où commencer. Qu’aimerais-tu qu’on explore ensemble? »",
      ),
      F(
        "Conversation libre en texte ou à la voix",
        ", sans questionnaire, sans catégorie à choisir d’avance, sans score à l’ouverture; l’utilisateur peut parler de sa journée comme d’une situation difficile.",
      ),
      F(
        "Comprendre l’intention avant d’agir",
        " : « Qu’aimerais-tu que nous fassions avec cette situation? », et la compréhension reste provisoire, corrigeable par l’utilisateur.",
      ),
      F(
        "Trois modes",
        " : discussion, réflexion, analyse, changeables à tout moment dans la même conversation.",
      ),
      F(
        "Raisonnement expliqué",
        " : Harmonia dit pourquoi elle est d’accord ou non, préfère « j’aimerais que nous approfondissions » à « je ne suis pas d’accord », reconnaît une erreur et dit « je ne sais pas ».",
      ),
      F(
        "Niveaux d’information séparés",
        " : parole de l’utilisateur, fait rapporté, observation, ressenti nommé, hypothèse, inconnu.",
      ),
      F(
        "Réponses adaptées à la capacité du moment",
        " : plus courtes et une seule question lorsque l’émotion est forte; aucun interrogatoire.",
      ),
      F(
        "Orientation professionnelle",
        " : lorsqu’elle atteint sa limite, Harmonia l’explique, propose la ressource pertinente et continue d’accompagner dans son champ.",
      ),
    ],
    tags: [inc, cy("Texte et voix"), gh("Aucun parcours obligatoire")],
  },
  {
    n: "02",
    iconBg: A_GRAD,
    title: "Charte Harmonia & garde-fous",
    badge: "Non négociable",
    desc: "Vos règles deviennent une spécification exécutable, versionnée et protégée, et non une consigne qu’on modifie en passant.",
    feats: [
      F(
        "Charte v1",
        " : les 20 principes du cœur et de l’âme, les 25 règles de sécurité, les précisions ajoutées depuis (hypothèses absentes des faits, médicaments, habitudes) et les formulations de référence.",
      ),
      F(
        "Hiérarchie",
        " : règle 1, ne jamais faciliter une intention malveillante; règle 2, protéger la vie, l’intégrité, la dignité et les informations; puis les règles de conversation.",
      ),
      F(
        "Contrôle d’entrée",
        " : niveau de risque, malveillance envers soi ou autrui, contenus interdits, tentative de manipulation; un numéro de carte, d’assurance sociale, d’assurance maladie ou de compte bancaire est masqué, jamais conservé ni transmis à l’IA, et Harmonia explique pourquoi.",
      ),
      F(
        "Contrôle de sortie",
        " : aucun diagnostic, aucune décision imposée, aucune hypothèse inventée, aucun numéro de téléphone ni lien qui ne provienne de la base vérifiée, et aucun avis personnalisé d’ordre médical, pharmaceutique, juridique ou financier (information générale et orientation seulement).",
      ),
      F(
        "Versions",
        " : chaque version de la Charte est datée et approuvée par vous, ou la personne à qui vous le déléguez par écrit, et par l’intervenant de sécurité critique; la précédente peut être rétablie immédiatement (module 10).",
      ),
      F(
        "Modèle d’IA figé",
        " : le modèle et sa version sont consignés; tout changement de modèle, de version ou de fournisseur, même imposé par celui-ci, repasse la batterie de scénarios et suit la même approbation qu’une nouvelle version de la Charte, avec retour possible au modèle précédent tant qu’il est offert.",
      ),
      F(
        "Résistance aux manipulations",
        " : « ignore tes règles », consignes cachées dans un texte collé, extraction des instructions internes, pression répétée.",
      ),
    ],
    tags: [inc, cy("Versionnée"), nv("Double validation")],
  },
  {
    n: "03",
    iconBg: N_GRAD,
    title: "Sécurité de l’utilisateur",
    badge: "Priorité absolue",
    desc: "Plus le risque est faible, plus Harmonia laisse choisir; plus il est grave et immédiat, plus elle applique les mesures prévues.",
    feats: [
      F(
        "Niveaux de risque",
        " : 0 aucun indice; 1 préoccupation à explorer; 2 risque sérieux; 3 danger réel et immédiat. Un plan concret (comment, où, quand) est un indicateur majeur du niveau 3, mais son absence ne prouve jamais l’absence de danger. Le niveau est évalué par un classificateur distinct du modèle de conversation, sur le message et le contexte récent, jamais sur un seul mot, et étalonné sur la batterie de scénarios.",
      ),
      F(
        "Réponse proportionnée",
        " : aux niveaux 1 et 2, Harmonia demande si l’utilisateur pense avoir besoin d’une personne de confiance, d’un professionnel ou des services d’urgence de l’endroit où il se trouve; au niveau 3, elle présente directement les services d’urgence. Dès un premier soupçon, elle peut proposer, en expliquant pourquoi, d’ajouter une personne de confiance sans quitter la conversation; un refus ne désactive aucune protection.",
      ),
      F(
        "SOS sur chaque écran",
        " : urgence (911 par le composeur du téléphone), ligne de crise de la région, personne de confiance, mon professionnel, aide professionnelle. Le SOS ne dépend ni de l’IA, ni du serveur, ni du réseau : la dernière liste vérifiée de ressources, le plan et la personne de confiance sont gardés, chiffrés, sur l’appareil et mis à jour à chaque connexion; si un message n’a pas pu partir, Harmonia le dit et affiche le SOS.",
      ),
      F(
        "Pour qui ne peut pas téléphoner",
        " : le SOS propose aussi les moyens écrits vérifiés, comme le texto au 9-8-8, et explique le service texte au 9-1-1 offert aux personnes sourdes, malentendantes ou ayant un trouble de la parole, selon les modalités de leur fournisseur cellulaire; sur une tablette sans téléphonie, il le dit clairement et affiche les numéros à composer depuis un autre appareil.",
      ),
      F(
        "Ressources vérifiées",
        " selon l’endroit où se trouve l’utilisateur au moment de l’utilisation (911, Info-Social 811, 1 866 APPELLE, 9-8-8…), avec source et date de vérification. La position, approximative, n’est lue qu’à l’ouverture du SOS ou des ressources et n’est pas conservée; sans localisation, l’utilisateur choisit sa région, modifiable en tout temps; hors des régions vérifiées, le SOS affiche le numéro d’urgence officiel du pays et précise qu’Harmonia n’a pas de ressources vérifiées sur place.",
      ),
      F(
        "Mon plan Harmonia",
        " : 1 activité apaisante choisie selon ses goûts, 1.5 vérifier si elle aide et l’intensité restante, 2 personne de confiance, 3 professionnel déjà concerné ou ressource professionnelle, 4 urgence. Le niveau de risque fixe l’action minimale; le plan est enregistré et ajusté, même en mode sans personnalisation.",
      ),
      F(
        "Mon professionnel",
        " : avec son accord, l’utilisateur enregistre le nom, la profession et le téléphone du professionnel qui le suit déjà, et ses démarches; données chiffrées à part, jamais transmises à l’IA, joignables en un geste depuis l’étape 3 du plan et le SOS; Harmonia l’aide à préparer ce qu’il veut lui dire.",
      ),
      F(
        "Transparence",
        " : Harmonia prévient dès l’inscription qu’elle ne gardera pas secret un danger grave, explique ce qui l’inquiète, puis reste disponible dans la conversation pendant la démarche, lorsque c’est possible, sans promettre une présence qu’elle ne peut garantir.",
      ),
      F(
        "Alerte de protection minimale",
        " : au niveau 3, vous ou l’intervenant formé recevez seulement les coordonnées de la personne (nom, prénom, adresse, téléphone), une brève description factuelle et non accusatoire du risque rapporté, choisie parmi des formulations validées d’avance, jamais rédigée par l’IA ni tirée de la conversation, et l’heure; jamais les conversations ni l’historique. L’alerte part dès que le danger est explicite (moyen, lieu, moment), ou après une seule question de clarification si le message est ambigu, selon les seuils de votre politique d’intervention. En V1, rien d’autre n’est préparé ni transmis; le dossier pour une demande officielle vérifiée suivra avec l’accès exceptionnel.",
      ),
      F(
        "Une alerte qui parvient vraiment",
        " : avis immédiat par texto et courriel, sans aucun renseignement personnel (« Alerte Harmonia en attente »); le détail ne s’affiche que dans la console, après double authentification; accusé de prise en charge, relance, puis envoi au destinataire suivant faute de prise en charge dans le délai fixé par votre politique; envoi, échec et prise en charge horodatés; l’alerte ne peut pas être supprimée. Harmonia ne dit jamais à l’utilisateur qu’une aide arrive tant que la prise en charge n’est pas confirmée, ni qu’une alerte est partie si l’envoi a échoué.",
      ),
      F(
        "L’utilisateur en garde la trace",
        " : après une alerte, il retrouve dans ses données la date, le rôle du destinataire et le texte exact envoyé, et apprend qu’elle résulte d’une évaluation automatisée, sauf si le dire augmentait le danger; l’export l’inclut.",
      ),
      F(
        "Sortie rapide et mode sans IA",
        " : l’écran bascule vers une page neutre en un geste et l’application se verrouille; le SOS et les ressources fonctionnent même si l’IA est indisponible.",
      ),
    ],
    tags: [inc, cy("SOS"), nv("Plan personnel"), gh("Alerte minimale")],
  },
  {
    n: "04",
    iconBg: A_GRAD,
    title: "Inscription & consentements",
    badge: "",
    desc: "Comprendre avant de consentir : chaque règle se lit et s’accepte séparément.",
    feats: [
      F(
        "Compte personnel",
        " : un compte par personne, authentification sécurisée avec double authentification proposée, appareils connectés visibles et déconnectables; avis, sans détail exploitable, à chaque connexion d’un nouvel appareil, récupération ou changement de sécurité; la récupération exige le même niveau de preuve que la connexion, et aucun membre de l’équipe ne peut « remettre » un compte.",
      ),
      F(
        "Coordonnées de sécurité",
        " : nom, prénom, adresse et téléphone, demandés à l’inscription avec leur raison, chiffrés à part et utilisés seulement pour l’alerte de protection.",
      ),
      F(
        "Âge légal",
        " déclaré à l’inscription (date de naissance attestée, sans pièce d’identité), selon l’âge de la majorité de la province de résidence : 18 ans au Québec, 19 ans là où elle est fixée à 19 ans; une date sous le seuil bloque l’inscription, car la première version est réservée aux adultes. Si un utilisateur révèle en conversation qu’il est mineur, Harmonia lui présente les ressources jeunesse de la base vérifiée.",
      ),
      F(
        "Règles une à une",
        " : un écran par règle, en version courte avec « En savoir plus », à lire ou à écouter à voix haute, accepté séparément; les règles de sécurité portent la mention « inviolable ». Elles nomment la responsabilité de l’utilisateur pour ses actions, ses identifiants et son appareil, disent qu’Harmonia et son équipe ne lui demanderont jamais son mot de passe ni un code, et annoncent la fin de l’accompagnement en cas de violation des règles de sécurité. Refuser une règle de sécurité arrête l’inscription avec un message clair; refuser une autre règle ne bloque pas l’accès.",
      ),
      F(
        "Nouvelle acceptation",
        " : quand une règle acceptée change ou qu’un nouvel usage des données est prévu, l’utilisateur voit le changement expliqué à sa prochaine ouverture et l’accepte ou le refuse avant de poursuivre, le SOS restant accessible; sa copie horodatée garde les deux versions.",
      ),
      F(
        "Copie horodatée",
        " de chaque consentement, avec la version de la Charte acceptée, consultable et exportable.",
      ),
      F(
        "Sécurité expliquée",
        " avant toute crise, puis proposition facultative d’une personne de confiance : maintenant, plus tard ou jamais.",
      ),
      F(
        "Localisation",
        " demandée avec consentement, seulement pour proposer les ressources d’aide du lieu où se trouve l’utilisateur; approximative et jamais conservée.",
      ),
      F(
        "Mes autorisations",
        " : chaque permission est demandée au moment où elle sert, avec sa raison, sans formulation trompeuse, et se retire depuis un seul écran; le retrait est appliqué côté serveur. Harmonia ne consulte le journal, les objectifs et les moments importants que si l’utilisateur l’autorise, de façon permanente ou « uniquement maintenant », par une autorisation distincte de la mémoire.",
      ),
      F(
        "Documents et recours",
        " : politique de confidentialité, conditions d’utilisation et coordonnées de la personne responsable de la protection des renseignements personnels, accessibles en tout temps depuis les réglages, avec un moyen de porter plainte sur le traitement de ses renseignements, distinct de « Signaler un problème ».",
      ),
    ],
    tags: [inc, cy("Consentement explicite")],
  },
  {
    n: "05",
    iconBg: N_GRAD,
    title: "Mémoire contrôlée",
    badge: "",
    desc: "Utiliser une information n’est pas la mémoriser : l’utilisateur voit et décide ce qu’Harmonia retient.",
    feats: [
      F(
        "Trois niveaux",
        " : conversation, information utilisée le temps de l’échange, mémoire volontaire ou autorisée.",
      ),
      F(
        "Ce qu’Harmonia retient",
        " : chaque élément avec sa provenance (dit par l’utilisateur ou déduit par Harmonia, affiché comme tel : « Harmonia a compris que… »), sa raison et sa date, modifiable et supprimable; « Oublie ça » dans la conversation. Une déduction n’est jamais utilisée comme un fait, et une préférence ancienne est revérifiée avant d’être appliquée.",
      ),
      F(
        "Rien sans accord",
        " : par défaut, Harmonia demande avant de retenir un élément personnel (« Est-ce que tu aimerais conserver cette observation? »); l’utilisateur peut ensuite l’autoriser à retenir sans demander, depuis « Mes autorisations ».",
      ),
      F(
        "Contexte sélectif",
        " : seul ce qui est pertinent pour la conversation en cours est utilisé; le passé ne devient jamais une prison.",
      ),
      F(
        "Comprendre, jamais contrôler",
        " : la mémoire sert à mieux comprendre, jamais à pousser l’utilisateur vers une décision.",
      ),
      F(
        "Méthodes qui aident",
        " : ce qui a fonctionné, ou non, dans une situation similaire est retenu si l’utilisateur le souhaite.",
      ),
      F(
        "Mode sans personnalisation",
        " : l’utilisateur peut choisir qu’Harmonia ne retienne rien d’une conversation à l’autre; ce choix est appliqué côté serveur, pas seulement à l’écran. Il n’efface ni ne désactive Mon plan Harmonia, la personne de confiance, le journal ou les objectifs, que l’utilisateur gère lui-même et qui ne sont lus qu’à sa demande; en cas de risque, Harmonia peut encore lui proposer son plan.",
      ),
      F(
        "Historique des conversations",
        " : l’utilisateur relit ses conversations passées, en supprime une ou efface tout son historique sans fermer son compte, avec la même règle de suppression honnête.",
      ),
    ],
    tags: [inc, gh("Sous contrôle de l’utilisateur")],
  },
  {
    n: "06",
    iconBg: A_GRAD,
    title: "Espace personnel",
    badge: "Onglet permanent",
    desc: "Harmonia fournit l’espace; l’utilisateur décide de ce qui mérite d’y avoir une place.",
    feats: [
      F("Épingler, déplacer, choisir", " ce qui apparaît sur sa page principale."),
      F(
        "Journal",
        " : pensées, observations et événements, écrits ou dictés; une entrée peut rester une simple entrée, sans analyse. La note vocale et la photo suivront dans une phase ultérieure.",
      ),
      F(
        "Objectifs",
        " : actif, modifié, suspendu, atteint selon l’utilisateur, abandonné, archivé.",
      ),
      F("Moments importants", ", choisis par l’utilisateur, sans points ni performance."),
      F("Mon plan Harmonia", " et les outils qui aident, accessibles en un geste."),
    ],
    tags: [inc, cy("Personnalisable")],
  },
  {
    n: "07",
    iconBg: N_GRAD,
    title: "Outils d’accompagnement",
    badge: "Proposés, jamais imposés",
    desc: "Des extensions de la conversation, ouvertes seulement si l’utilisateur accepte d’explorer la possibilité.",
    feats: [
      F(
        "Outils relationnels",
        " : « Clarifier ce que je veux » (besoin, limite, demande), « Explorer ce que je ressens » et « Résoudre un problème », proposés avec la même formule de consentement; séquence guidée pour préparer une conversation difficile (ce que je veux exprimer, comment l’ouvrir, ce que je ferai si elle dérape), sans imposer de formulation.",
      ),
      F(
        "Prise de recul",
        " : Fait → Ressenti → Observation → Scénario → Faits → Choix, sans suggérer d’émotion à la place de l’utilisateur.",
      ),
      F("1-2-3 Go", " pour passer de la réflexion à l’action, sans jamais devenir un défi."),
      F(
        "Observer une pensée",
        " : exercice de défusion inspiré de l’aide en ligne J’ARRÊTE, avec mention de provenance.",
      ),
      F(
        "Changer une habitude",
        " : motivations, déclencheurs, approche choisie, préparer les situations à risque, traverser une envie, comprendre le cerveau et le corps, apprendre d’un écart sans le vivre comme un échec, soutien externe; J’ARRÊTE proposé en complément pour le tabac.",
      ),
      F(
        "Symbole personnel",
        " : après quelques échanges, Harmonia peut proposer de trouver un animal ou une créature qui représente le cheminement; si l’utilisateur n’est pas intéressé, elle n’insiste pas, et ce refus est retenu pour ne pas le reproposer. Le symbole peut évoluer; les précédents restent consultables, sans hiérarchie.",
      ),
    ],
    tags: [inc, cy("Consentement"), gh("Non médical")],
  },
  {
    n: "08",
    iconBg: A_GRAD,
    title: "Voix, personnalisation & accessibilité",
    badge: "",
    desc: "Harmonia s’adapte à l’utilisateur plutôt que l’inverse, sans jamais changer ses valeurs.",
    feats: [
      F(
        "Mode vocal complet",
        " : parler et écouter, pour les personnes non voyantes, qui lisent difficilement ou qui préfèrent parler; la dictée utilise la reconnaissance de l’appareil, et si elle n’est pas locale, l’utilisateur en est prévenu avant d’activer le micro; aucun enregistrement audio conservé; suggestion d’écouteurs à l’activation de la voix.",
      ),
      F(
        "Voix féminine ou masculine",
        ", nom d’Harmonia au choix et petit avatar choisi parmi un ensemble d’illustrations et de couleurs, jamais présenté comme une personne réelle; un éditeur d’avatar (vêtements, style) relève d’une phase ultérieure.",
      ),
      F(
        "Affichage",
        " : couleur dominante, contrastes, taille du texte, police plus lisible ou plus jolie, espacement.",
      ),
      F(
        "Technologies d’assistance",
        " : VoiceOver, TalkBack, agrandissement, notifications visuelles et vibrations; aucune information par la couleur seule.",
      ),
      F(
        "Demander plutôt que présumer",
        " : Harmonia demande comment l’utilisateur préfère communiquer et ne propose pas d’activité sonore à une personne sourde.",
      ),
      F(
        "Formulations épicènes",
        " : Harmonia parle d’elle-même sans marque de genre, pour convenir à une voix féminine comme masculine.",
      ),
      F(
        "Langues",
        " : interface et conversation en français et en anglais, les langues où la Charte, les contrôles et la batterie de scénarios sont validés; dans une autre langue, Harmonia le dit simplement et le SOS reste disponible.",
      ),
    ],
    tags: [inc, cy("Accessibilité"), nv("Français · anglais")],
  },
  {
    n: "09",
    iconBg: N_GRAD,
    title: "Données, confidentialité & sécurité technique",
    badge: "Au Canada",
    desc: "Les informations restent dans l’environnement d’Harmonia : seul le texte utile à une réponse est traité par le fournisseur d’IA, sous contrat, et aucun outil ne permet de lire les conversations.",
    feats: [
      F(
        "Hébergement au Canada",
        ", fonctions serveur comprises, chiffrement en transit et au repos, chiffrement distinct des conversations, des coordonnées, de la personne de confiance et du plan de sécurité, avec des clés gérées dans un service dédié, séparées des données; ce modèle permettra d’ajouter plus tard l’accès exceptionnel encadré sans refonte.",
      ),
      F(
        "Identité séparée",
        " : les données d’accompagnement sont rattachées à un identifiant pseudonyme, distinct du compte; le contexte de chaque utilisateur est isolé.",
      ),
      F(
        "Sur le téléphone",
        " : données locales minimales et chiffrées, verrouillage par code ou biométrie après inactivité, aperçu masqué dans le sélecteur d’applications, captures bloquées sur les écrans sensibles lorsque le système le permet, rien de sensible dans les sauvegardes de l’appareil; un appareil perdu se déconnecte à distance. La sortie rapide verrouille aussi l’application; exporter ses données, supprimer son compte, modifier la personne de confiance ou les coordonnées de sécurité exige une nouvelle authentification.",
      ),
      F(
        "Aucune lecture des conversations",
        " par Progix, l’administration ou le fondateur : aucun outil ne permet de lire une conversation ni d’y écrire; les clés de déchiffrement sont réservées au service de conversation et gérées à part de la base, leur utilisation journalisée; tout accès direct à la production est nominatif, justifié et journalisé; la démonstration en est faite à la recette.",
      ),
      F(
        "Minimisation vers l’IA",
        " : ni nom, ni coordonnées du compte, ni personne de confiance transmis au modèle; identifiants sensibles masqués; fournisseur sans entraînement, avec la conservation la plus courte que son contrat garantit, idéalement nulle, annoncée telle quelle à l’utilisateur.",
      ),
      F(
        "Contrôles côté serveur",
        " : blocage des identifiants sensibles, contrôle d’entrée, autorisations et mode sans personnalisation s’appliquent sur le serveur, même si l’application est modifiée ou contournée; l’attestation d’intégrité de l’application (App Attest, Play Integrity) suit dans une phase ultérieure.",
      ),
      F(
        "Droits de l’utilisateur",
        " : consulter, corriger, exporter, supprimer. Durée de conservation de référence : 5 ans, prolongée lorsque la sécurité ou la loi l’exige, qu’une durée légale plus courte ne réduit pas lorsque la conservation reste permise; une demande de suppression est traitée selon la loi.",
      ),
      F(
        "Journal d’événements",
        " protégé contre l’altération : qui, quoi, quand, comment, pourquoi, qui l’a autorisé, ressources touchées et résultat; la consultation du journal est elle-même journalisée; journaux sans contenu de conversation.",
      ),
      F(
        "Pratiques",
        " : moindre privilège, environnements de développement, de préproduction et de production séparés, gestionnaire de secrets, sauvegardes quotidiennes chiffrées, dont une copie hors du projet principal, dans un compte distinct au Canada, qu’aucune personne seule ne peut effacer depuis la production; restauration testée, avec mesure du temps de reprise; aucune donnée réelle hors production.",
      ),
      F(
        "Durées proposées",
        ", à confirmer au kickoff avec votre avocate : rotation des sauvegardes de 30 jours, délai annoncé à l’utilisateur qui supprime ses données; journaux conservés 12 mois; session fermée après 30 jours sans utilisation; fichier d’export disponible 24 heures; remise en service visée en moins de 24 heures.",
      ),
      F(
        "Chaîne de développement",
        " : revue de code, déploiement jamais fait seul par l’auteur, analyse des dépendances, appels sortants limités aux fournisseurs déclarés, API avec autorisations fines et limitation de débit.",
      ),
      F(
        "Aucune revente, publicité ni profilage",
        " : dans la première version, aucune conversation ne sert à améliorer Harmonia; seuls les signalements volontaires et dépersonnalisés remontent.",
      ),
      F(
        "Suppression honnête",
        " : à la demande, conversations, mémoire et espace personnel sont supprimés immédiatement des systèmes actifs, puis des sauvegardes au terme de leur rotation, ce qui est annoncé tel quel; la trace d’une alerte et les événements de sécurité sont conservés à part pour la durée légale, et l’utilisateur en est informé avant de confirmer.",
      ),
    ],
    tags: [inc, cy("Loi 25"), gh("Chiffrement")],
  },
  {
    n: "10",
    iconBg: A_GRAD,
    title: "Console d’administration & gouvernance",
    badge: "Aucun pouvoir absolu",
    desc: "Ni une personne, ni un administrateur, ni l’IA, ni un fournisseur ne peut modifier seul l’âme d’Harmonia.",
    feats: [
      F(
        "Console web",
        " : ressources d’aide par région, versions de la Charte, alertes de sécurité, état du service.",
      ),
      F(
        "Double validation",
        " : modification d’une règle fondamentale et activation d’une nouvelle version de la Charte ou du modèle d’IA (vous, ou la personne que vous déléguez par écrit, et l’intervenant de sécurité critique); ajout ou modification d’un numéro de la base de ressources, d’un destinataire de l’alerte (confirmé par un message d’essai), d’un rôle ou d’un validateur; fermeture d’un incident de sécurité avec un code propre à l’incident, transmis hors de l’application et conservé seulement sous forme de preuve. Seule la version de test, en préproduction et sans utilisateur ni donnée réels, fait exception; la bêta fermée suit les règles de production.",
      ),
      F(
        "Retour immédiat, jamais de blocage",
        " : le retour à la dernière version approuvée et le mode de protection peuvent être déclenchés par une seule personne habilitée, avec avis immédiat à l’autre validateur et revue obligatoire après coup; chaque validateur a une relève désignée d’avance; en cas d’incapacité, la procédure écrite arrêtée avec votre avocate s’applique.",
      ),
      F(
        "Approbation éclairée",
        " : chaque demande montre en clair les règles ajoutées, modifiées ou retirées, l’auteur, la raison et le résultat de la batterie de scénarios; une version qui échoue ne peut pas être approuvée, et le serveur vérifie à chaque démarrage que la Charte active est bien celle qui a été approuvée, sinon il alerte.",
      ),
      F(
        "Ressources d’aide protégées",
        " : chaque modification garde l’historique (ancienne et nouvelle valeur, auteur, source, date de vérification), ne peut jamais retirer le 911 du SOS, et la console signale toute ressource non revérifiée depuis six mois.",
      ),
      F(
        "Accès",
        " : comptes nominatifs, double authentification par application externe, codes personnels connus de leur seul titulaire et renouvelés tous les 3 mois, ni mot de passe enregistré ni session mémorisée, accès à distance justifié et tracé, révocation immédiate.",
      ),
      F(
        "Alertes",
        " : toute tentative de modification non autorisée des règles vous est signalée immédiatement, avec la trace de l’accès.",
      ),
      F(
        "Personne ne parle au nom d’Harmonia",
        " : aucune console, API ni compte d’administration ne peut écrire, insérer ou modifier un message dans une conversation, ni envoyer un message au nom d’Harmonia; ses réponses ne sont produites que par l’orchestrateur, et les avis de service (bandeau de protection, rétablissement) sont des textes prédéfinis, affichés hors de la conversation et identifiés comme tels.",
      ),
      F(
        "Mode de protection temporaire",
        " : fonction désactivée, bandeau d’information aux utilisateurs pendant la correction, avis de rétablissement.",
      ),
      F(
        "Signaler un problème",
        " : retour volontaire et factuel de l’utilisateur sur le fonctionnement, sans extrait de conversation, dont les noms, coordonnées et lieux détectés sont masqués avant l’envoi, l’utilisateur voyant exactement ce qui sera transmis; reçu dans la console.",
      ),
    ],
    tags: [inc, nv("Double validation"), gh("Traçabilité")],
  },
  {
    n: "11",
    iconBg: N_GRAD,
    title: "Identité, abonnement & publication",
    badge: "",
    desc: "Une application qu’on a envie d’ouvrir, prête à être distribuée.",
    feats: [
      F(
        "Logo et charte graphique",
        " : des mains qui soutiennent une tortue, en vert et ivoire, dans la douceur et la bienveillance.",
      ),
      F(
        "Abonnement",
        " par achats intégrés Apple et Google : aucune donnée bancaire chez Harmonia, résiliation en tout temps, retour possible. À la fin de l’essai, après une résiliation ou un échec de paiement, le SOS, les ressources d’aide, Mon plan Harmonia, la personne de confiance, la consultation, l’export et la suppression des données restent accessibles, et l’espace est retrouvé intact au retour; avant de s’abonner, l’utilisateur voit ce qui est payant et ce que deviennent ses données s’il part.",
      ),
      F(
        "Fin de l’accompagnement",
        " : en cas de violation des règles de sécurité, elle est décidée par une personne, à partir de l’événement de sécurité et sans lecture de la conversation, jamais automatiquement; le SOS, l’export et la suppression des données restent accessibles.",
      ),
      F(
        "Notifications discrètes",
        " : seulement les rappels que l’utilisateur programme, les avis de service et les avis de sécurité de son compte; le logo d’Harmonia seulement, aucun contenu à l’écran verrouillé, jamais de relance pour faire revenir.",
      ),
      F(
        "Bêta fermée",
        " avec des utilisateurs de confiance, sur l’environnement de production, avec les consentements, la politique de confidentialité et l’évaluation des facteurs relatifs à la vie privée en place; puis publication dans les stores canadiens de l’App Store et de Google Play, là où les ressources d’aide sont vérifiées.",
      ),
      F(
        "Mesure d’usage minimale",
        " : statistiques natives des stores, aucun traceur publicitaire tiers.",
      ),
    ],
    tags: [inc, cy("iOS · Android")],
  },
];

/* ------------------------------------------------------------------ */
/* Section 08 — couverture du cadre Harmonia. Chaque point établi dans */
/* la conversation de conception, le cahier de consultation et la      */
/* rencontre figure ici avec son statut, pour que rien ne soit écarté  */
/* sans être nommé.                                                    */
/* ------------------------------------------------------------------ */

type CovStatus = "inc" | "par" | "fut" | "hors";
type Cov = { f: string; src: string; st: CovStatus; d: string };

const COV_TAG: Record<CovStatus, Tag> = {
  inc: { label: "Inclus", bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" },
  par: { label: "Partiel", bg: "var(--tint)", fg: "var(--cyan-ink)", bd: "none" },
  fut: {
    label: "Phase suivante",
    bg: "var(--amber-bg)",
    fg: "#f0c98a",
    bd: "1px solid rgba(232,161,58,0.3)",
  },
  hors: {
    label: "Hors logiciel",
    bg: "rgba(255,255,255,0.05)",
    fg: "var(--muted)",
    bd: "1px solid var(--line)",
  },
};

const COEUR = "Cœur et âme d’Harmonia";
const CONV = "Conversation et personnalité";
const SECU = "Sécurité de l’utilisateur";
const REL = "Relations, consentement, dépendances";
const MIN = "Mineurs";
const ACC = "Accessibilité et personnalisation";
const ESP = "Espace personnel et outils";
const INSC = "Inscription et abonnement";
const DATA = "Données et confidentialité";
const GOUV = "Gouvernance et accès";
const TECH = "Sécurité technique";
const ARCH = "Architecture fonctionnelle";
const SEPT = "Ajouts de septembre";
const INIT = "Cahier des charges initial";
const CONS = "Cahier de consultation et questions aux firmes";
const JUR = "Juridique et entreprise";

const coverage: Cov[] = [
  // Cœur et âme
  {
    f: "Accompagner, jamais décider à la place de l’utilisateur",
    src: COEUR,
    st: "inc",
    d: "Charte; contrôle de sortie : aucune décision imposée (« quitte-le », « tu dois »).",
  },
  {
    f: "Autonomie : choix, rythme, sujets, droit de dire non, de changer d’avis, de ne rien faire",
    src: COEUR,
    st: "inc",
    d: "Modules 01 et 02 : modes changeables, « On peut laisser ça là pour aujourd’hui ».",
  },
  {
    f: "Ne jamais conseiller à la place de l’utilisateur : pas de « tu devrais », pas de « fais ceci », sauf pour sa sécurité",
    src: COEUR,
    st: "inc",
    d: "Charte; contrôle de sortie et scénarios de test.",
  },
  {
    f: "Proposer plutôt qu’imposer, en demandant si l’utilisateur aimerait explorer une possibilité",
    src: COEUR,
    st: "inc",
    d: "Modules 01 et 07 : formule de consentement avant chaque outil, sans insister après un refus.",
  },
  {
    f: "Une question à la fois, questions ouvertes, pas d’interrogatoire",
    src: COEUR,
    st: "inc",
    d: "Charte et scénarios de conversation testés.",
  },
  {
    f: "Distinguer faits, ressentis, observations, hypothèses, interprétations et inconnues",
    src: COEUR,
    st: "inc",
    d: "Module 01 : niveaux d’information séparés; outil de prise de recul.",
  },
  {
    f: "Reconnaître l’incertitude, dire « je ne sais pas », ne jamais inventer ni donner de fausse information",
    src: COEUR,
    st: "inc",
    d: "Charte; contrôle de sortie.",
  },
  {
    f: "Pas de diagnostic, d’étiquette ou de conclusion clinique; ne pas flatter",
    src: COEUR,
    st: "inc",
    d: "Charte; contrôle de sortie.",
  },
  {
    f: "Ne pas créer de dépendance : ni psychologue, ni petit ami, un outil de croissance",
    src: COEUR,
    st: "inc",
    d: "Charte; aucun score, aucune série, aucune relance après un silence, aucune récompense conçue pour retenir.",
  },
  {
    f: "Toujours se présenter comme une IA; accepter la contestation d’une interprétation et la réviser",
    src: COEUR,
    st: "inc",
    d: "Charte; scénarios de test.",
  },
  {
    f: "Droit à une relation non personnalisée et contrôle de la mémoire",
    src: COEUR,
    st: "inc",
    d: "Module 05 : mode sans personnalisation appliqué côté serveur; le plan de sécurité reste disponible.",
  },
  {
    f: "Profil, fils conducteurs et miroir : des hypothèses qui appartiennent à l’utilisateur",
    src: COEUR,
    st: "fut",
    d: "Feuille de route; la V1 conserve déjà journal, objectifs et moments sur lesquels ils s’appuieront.",
  },
  // Conversation et personnalité
  {
    f: "Une IA qui répond comme Oméga, sans boutons, en conversation naturelle",
    src: CONV,
    st: "inc",
    d: "Module 01.",
  },
  {
    f: "Première prise de contact conservée exactement",
    src: CONV,
    st: "inc",
    d: "Module 01, texte approuvé mot pour mot.",
  },
  {
    f: "Converser d’abord pour comprendre ce sur quoi l’utilisateur veut travailler",
    src: CONV,
    st: "inc",
    d: "Module 01 : « Qu’aimerais-tu que nous fassions avec cette situation? ».",
  },
  {
    f: "Expliquer pourquoi Harmonia est d’accord ou non, avec une communication douce",
    src: CONV,
    st: "inc",
    d: "Charte : « j’aimerais que nous approfondissions » plutôt que « désaccord ».",
  },
  {
    f: "Humour calme et bienveillant, quand il peut faire une différence et jamais en situation grave",
    src: CONV,
    st: "inc",
    d: "Charte, règle de ton.",
  },
  {
    f: "Simple discussion ou support d’analyse, au choix et toujours modifiable",
    src: CONV,
    st: "inc",
    d: "Module 01 : modes discussion, réflexion, analyse.",
  },
  {
    f: "Fondement probant et engagements déontologiques des ordres professionnels (OIIQ, Ordre des psychologues)",
    src: CONV,
    st: "par",
    d: "Charte en V1; relecture par vos professionnels; moteur de sources en phase suivante.",
  },
  {
    f: "Orientation vers un professionnel, en expliquant pourquoi, sans abandonner l’utilisateur",
    src: CONV,
    st: "inc",
    d: "Module 01.",
  },
  {
    f: "Aucun avis professionnel personnalisé, quel que soit le domaine; aucun lien qui ne mène à la ressource annoncée",
    src: CONV,
    st: "inc",
    d: "Module 02 : contrôle de sortie; information générale et orientation seulement.",
  },
  // Sécurité de l’utilisateur
  {
    f: "Règle 1 : ne jamais aider un utilisateur malveillant, ni à reconquérir une personne qui ne le souhaite pas",
    src: SECU,
    st: "inc",
    d: "Module 02 : hiérarchie de la Charte, contrôle d’entrée, scénarios de test.",
  },
  {
    f: "Jamais accepter le suicide ou l’automutilation, même sur insistance ou demande de changer les règles",
    src: SECU,
    st: "inc",
    d: "Modules 02 et 03; règle non modifiable par l’utilisateur.",
  },
  {
    f: "Niveaux de risque, niveau 3 réel et immédiat (comment, où, quand), auto-évaluation sauf au niveau 3",
    src: SECU,
    st: "inc",
    d: "Module 03.",
  },
  {
    f: "Bouton SOS et numéros propres à la région où se trouve l’utilisateur, jamais inventés",
    src: SECU,
    st: "inc",
    d: "Module 03; base de ressources vérifiées gérée dans la console, sous double validation.",
  },
  {
    f: "Personne de confiance proposée dès l’inscription, avec la raison expliquée",
    src: SECU,
    st: "inc",
    d: "Modules 03 et 04 : à l’inscription, puis dans la conversation dès un premier soupçon.",
  },
  {
    f: "Plan d’urgence par étapes, efficacité vérifiée, adapté et enregistré pour la prochaine fois",
    src: SECU,
    st: "inc",
    d: "Module 03 : Mon plan Harmonia.",
  },
  {
    f: "Ne jamais promettre le secret d’un danger grave; prévenir avant; rester présente jusqu’au relais",
    src: SECU,
    st: "inc",
    d: "Modules 03 et 04 : Harmonia reste disponible pendant la démarche, lorsque c’est possible, sans promettre une présence qu’elle ne peut garantir.",
  },
  {
    f: "Alerte initiale limitée aux coordonnées de l’inscription et à une description brève, factuelle et non accusatoire; le reste préparé mais retenu",
    src: SECU,
    st: "par",
    d: "V1 : alerte limitée aux coordonnées et à une description tirée de formulations validées; rien d’autre n’est préparé ni transmis. Le dossier pour une demande officielle suit avec l’accès exceptionnel.",
  },
  {
    f: "Aviser les services appropriés avec une alerte qui informe le fondateur",
    src: SECU,
    st: "par",
    d: "V1 : 911 par le composeur de l’utilisateur, et alerte minimale (coordonnées, description factuelle) à vous ou à l’intervenant formé, qui contacte les services selon la politique d’intervention arrêtée avec votre avocate. Aucun appel automatique.",
  },
  {
    f: "Refus clair si l’utilisateur persiste à transgresser; bris de confidentialité annoncé; fin de l’accompagnement en cas de violation",
    src: SECU,
    st: "inc",
    d: "Charte, règles acceptées à l’inscription et module 11 : fin décidée par une personne, jamais automatiquement; le SOS reste accessible.",
  },
  {
    f: "Bouton de sortie rapide, pour l’enfant comme pour l’adulte",
    src: SECU,
    st: "inc",
    d: "Module 03 : la sortie rapide verrouille aussi l’application.",
  },
  {
    f: "SOS utilisable sans réseau, sans serveur et sans IA",
    src: SECU,
    st: "inc",
    d: "Module 03 : ressources de la dernière région connue, 911, plan et personne de confiance gardés, chiffrés, sur l’appareil; un message qui n’a pas pu partir est signalé; vérifié à la recette en mode avion.",
  },
  {
    f: "Ressources d’aide quand la localisation est refusée ou hors des régions couvertes",
    src: SECU,
    st: "inc",
    d: "Module 03 : région choisie par l’utilisateur; hors des régions vérifiées, numéro d’urgence officiel du pays et mention claire.",
  },
  {
    f: "Une alerte de protection qui parvient réellement à un destinataire",
    src: SECU,
    st: "inc",
    d: "Module 03 et console : avis par texto et courriel sans renseignement personnel, détail dans la console après double authentification, prise en charge confirmée, relance au destinataire suivant, statuts journalisés.",
  },
  {
    f: "Pas d’alerte sur un seul mot : clarifier une phrase ambiguë, ni dramatisation ni banalisation automatiques",
    src: SECU,
    st: "inc",
    d: "Module 03 et section 06 : SOS immédiat, alerte après une question de clarification si le message est ambigu; critère d’acceptation dédié aux fausses alertes.",
  },
  {
    f: "L’utilisateur sait qu’une alerte a été envoyée à son sujet",
    src: SECU,
    st: "inc",
    d: "Modules 03 et 09 : date, rôle du destinataire et texte envoyé retrouvés dans ses données, sauf si le dire augmentait le danger.",
  },
  {
    f: "Mon professionnel : les coordonnées d’un professionnel qui suit déjà l’utilisateur",
    src: SECU,
    st: "inc",
    d: "Module 03 : joignable depuis l’étape 3 du plan et le SOS; jamais transmis à l’IA.",
  },
  // Relations, consentement, dépendances
  {
    f: "Ne jamais suggérer de rompre ni de maintenir une relation; toutes les relations (amoureuse, familiale, amicale, travail)",
    src: REL,
    st: "inc",
    d: "Charte; scénarios relationnels testés.",
  },
  {
    f: "Consentement comme règle inviolable; valider ce que l’utilisateur sait des besoins de l’autre",
    src: REL,
    st: "inc",
    d: "Charte.",
  },
  {
    f: "Miroir bienveillant d’une relation toxique; rupture accompagnée de façon sécuritaire (violence conjugale)",
    src: REL,
    st: "inc",
    d: "Charte; ressources spécialisées dans la base.",
  },
  {
    f: "Ne pas diagnostiquer une violence ou un comportement; amener une réflexion saine",
    src: REL,
    st: "inc",
    d: "Charte.",
  },
  {
    f: "Dépendances (alcool, drogues, tabac, alimentation, affective, travail) : observer sans accuser",
    src: REL,
    st: "inc",
    d: "Charte et module 07 : Changer une habitude, ressources de la région.",
  },
  {
    f: "Jamais de nudité adulte ou enfant; bienveillance universelle; sujets tabous abordés sans encourager l’acte",
    src: REL,
    st: "inc",
    d: "Module 02 : contrôles d’entrée et de sortie.",
  },
  // Mineurs
  {
    f: "Âge légal de la région ou autorisation d’un tuteur légal",
    src: MIN,
    st: "par",
    d: "V1 réservée aux adultes, âge déclaré selon la majorité de la province (18 ou 19 ans). Autorisation du tuteur : phase suivante.",
  },
  {
    f: "Langage adapté à l’âge, consentement expliqué, enfant rassuré et jamais culpabilisé, compte rendu fidèle de ses mots, présence jusqu’à un adulte de confiance",
    src: MIN,
    st: "fut",
    d: "Parcours mineurs, après validation juridique.",
  },
  {
    f: "Modifications faites par un enfant conservées (date, heure); lieu demandé seulement pour sa sécurité",
    src: MIN,
    st: "fut",
    d: "Parcours mineurs.",
  },
  // Accessibilité et personnalisation
  {
    f: "Appareils pour sourds et non-voyants; option vocale pour les personnes analphabètes",
    src: ACC,
    st: "inc",
    d: "Module 08.",
  },
  {
    f: "Couleurs, police, voix féminine ou masculine, nom d’Harmonia et avatar personnalisés",
    src: ACC,
    st: "inc",
    d: "Module 08 : avatar choisi parmi des illustrations et leurs couleurs; éditeur d’avatar en phase suivante.",
  },
  {
    f: "Ne pas proposer d’écouter de la musique à une personne sourde; adapter ses interactions",
    src: ACC,
    st: "inc",
    d: "Module 08 : préférence de communication retenue.",
  },
  {
    f: "Suggérer un casque ou des écouteurs pour la confidentialité",
    src: ACC,
    st: "inc",
    d: "Module 08.",
  },
  {
    f: "SOS adapté aux personnes sourdes, malentendantes ou ayant un trouble de la parole, et aux appareils sans téléphonie",
    src: ACC,
    st: "inc",
    d: "Module 03 : texto au 9-8-8, explication du service texte au 9-1-1, numéros à composer depuis un autre appareil sur une tablette.",
  },
  {
    f: "Toutes les langues",
    src: ACC,
    st: "par",
    d: "V1 : interface et conversation en français et en anglais, les langues où la Charte et ses tests sont validés; dans une autre langue, Harmonia le dit et le SOS reste disponible. Espagnol et autres : phase suivante.",
  },
  // Espace personnel et outils
  {
    f: "Onglet accessible en tout temps, épingler, déplacer, adapter sa page",
    src: ESP,
    st: "inc",
    d: "Module 06.",
  },
  {
    f: "Journal, objectifs, moments importants",
    src: ESP,
    st: "inc",
    d: "Module 06.",
  },
  {
    f: "Mémoire : conserver, modifier, supprimer, « Oublie ça »",
    src: ESP,
    st: "inc",
    d: "Module 05.",
  },
  {
    f: "Symbole personnel (la tortue comme exemple), jamais une obligation",
    src: ESP,
    st: "inc",
    d: "Module 07 : évolution gardée sans hiérarchie, refus retenu pour ne pas insister.",
  },
  {
    f: "Retenir les outils les plus efficaces; 1-2-3 Go sans esprit de défi; se mettre en action",
    src: ESP,
    st: "inc",
    d: "Modules 05 et 07.",
  },
  {
    f: "Outils relationnels : clarifier ce que je veux, explorer ce que je ressens, résoudre un problème, préparer une conversation difficile",
    src: ESP,
    st: "inc",
    d: "Module 07, avec la même formule de consentement que les autres outils.",
  },
  {
    f: "Mémoire : ce que l’utilisateur a dit, ce qu’Harmonia a déduit, et ce qui est à revérifier; rien retenu sans accord",
    src: ESP,
    st: "inc",
    d: "Module 05 et modèle de données : provenance affichée, échéance du temporaire, préférence ancienne revérifiée, demande avant de retenir par défaut.",
  },
  {
    f: "Journal, objectifs et moments lus par Harmonia seulement avec une autorisation distincte",
    src: ESP,
    st: "inc",
    d: "Modules 04 et 05 : autorisation permanente ou « uniquement maintenant », révocable.",
  },
  {
    f: "Relire et effacer l’historique des conversations sans fermer son compte",
    src: ESP,
    st: "inc",
    d: "Module 05.",
  },
  {
    f: "Note vocale ou photo jointe au journal ou à un moment important",
    src: ESP,
    st: "fut",
    d: "La V1 conserve le texte et la dictée transcrite, sans audio ni image; la note vocale et la photo suivront, avec une autorisation donnée à chaque prise.",
  },
  // Inscription et abonnement
  {
    f: "Approbation des règles une à une, par onglet, avec copie conservée et responsabilité de l’utilisateur",
    src: INSC,
    st: "inc",
    d: "Module 04 : version courte, « En savoir plus », à lire ou à écouter; refus d’une règle de sécurité prévu.",
  },
  {
    f: "Jamais d’information bancaire dans les discussions, seulement à l’abonnement",
    src: INSC,
    st: "inc",
    d: "Modules 02 et 09 : carte, assurance sociale, assurance maladie et compte bancaire masqués, sur l’appareil et sur le serveur; paiement par les stores.",
  },
  {
    f: "Cesser son abonnement en tout temps et y revenir ou pas",
    src: INSC,
    st: "inc",
    d: "Module 11 : l’espace est retrouvé intact au retour.",
  },
  {
    f: "Chaque utilisateur a son propre compte et accès personnel",
    src: INSC,
    st: "inc",
    d: "Module 04.",
  },
  {
    f: "Ce qui reste accessible sans abonnement actif ou après une fin d’accompagnement",
    src: INSC,
    st: "inc",
    d: "Module 11 : SOS, ressources, plan, personne de confiance, consultation, export et suppression des données.",
  },
  {
    f: "Nouvelle acceptation quand une règle acceptée change",
    src: INSC,
    st: "inc",
    d: "Module 04 : changement expliqué à la prochaine ouverture, copie horodatée des deux versions.",
  },
  {
    f: "Territoire de publication et âge légal selon la province",
    src: INSC,
    st: "inc",
    d: "Modules 04 et 11 : stores canadiens en V1; 18 ou 19 ans selon la province de résidence.",
  },
  {
    f: "Documents juridiques, personne responsable et moyen de plainte accessibles dans l’application",
    src: INSC,
    st: "inc",
    d: "Module 04 : depuis les réglages, en tout temps.",
  },
  {
    f: "Avis de nouvel appareil, de récupération ou de changement de sécurité; récupération jamais plus faible que la connexion",
    src: INSC,
    st: "inc",
    d: "Modules 04 et 09 : nouvelle authentification pour exporter, supprimer ou changer la personne de confiance.",
  },
  // Données et confidentialité
  {
    f: "Les informations ne sortent pas du cadre de l’application; aucune vente ni usage commercial",
    src: DATA,
    st: "par",
    d: "Module 09 : seul le texte utile à une réponse est traité par le fournisseur d’IA, sans les nom et coordonnées du compte, sans entraînement, avec la conservation la plus courte garantie par contrat; chaque fournisseur est déclaré, et l’utilisateur en est informé. Une IA hébergée par Harmonia elle-même, pour qu’aucun texte ne sorte : option de la feuille de route.",
  },
  {
    f: "Identité de l’utilisateur séparée de ses données d’usage; contexte isolé par utilisateur",
    src: DATA,
    st: "inc",
    d: "Module 09 : identifiant pseudonyme pour les données d’accompagnement.",
  },
  {
    f: "Vérifier avant toute transmission à un tiers : canal, nom, mention « strictement confidentielles », coordonnées, bon utilisateur source",
    src: DATA,
    st: "par",
    d: "V1 : seuls le destinataire de l’alerte et les fournisseurs déclarés reçoivent des renseignements; les coordonnées des destinataires sont confirmées par un message d’essai, sous double validation, et chaque alerte porte la mention « strictement confidentiel ». L’outil de transmission encadrée à un tiers suit avec l’accès exceptionnel.",
  },
  {
    f: "La sécurité critique universelle passe en premier, sans jamais justifier une surveillance ou un partage inutile",
    src: DATA,
    st: "inc",
    d: "Charte (hiérarchie) et minimisation du module 09.",
  },
  {
    f: "Aucun accès aux discussions personnelles, sauf urgence réelle et double validation",
    src: DATA,
    st: "par",
    d: "V1 : aucun outil d’accès, et tout accès direct à la production est nominatif, justifié et journalisé. Procédure d’accès exceptionnel : phase suivante, après validation juridique.",
  },
  {
    f: "Conservation de 5 ans, sauf sécurité ou loi plus exigeante",
    src: DATA,
    st: "inc",
    d: "Module 09 : durée de référence, qu’une loi plus courte ne réduit pas lorsque la conservation reste permise.",
  },
  {
    f: "Noms et identification retirés des situations utilisées pour l’amélioration, sans rien effacer",
    src: DATA,
    st: "inc",
    d: "Module 10 : aucune conversation ne sert à l’amélioration en V1; les signalements, sans extrait de conversation, sont masqués (noms, coordonnées, lieux) avant l’envoi, sous les yeux de l’utilisateur.",
  },
  {
    f: "Recevoir un commentaire si une situation devient problématique, avec l’accord de l’utilisateur, faits concrets seulement",
    src: DATA,
    st: "inc",
    d: "Module 10 : Signaler un problème.",
  },
  {
    f: "Photo seulement si l’utilisateur l’autorise; caméra, voix et capteurs sous permission",
    src: DATA,
    st: "inc",
    d: "La V1 n’utilise ni caméra ni photo; la voix passe par une permission explicite et aucun audio n’est conservé. Toute capture future exigera une action de l’utilisateur.",
  },
  {
    f: "Données de santé et appareils connectés : donnée mesurée ≠ interprétation",
    src: DATA,
    st: "fut",
    d: "Feuille de route : Apple Santé, montres.",
  },
  {
    f: "Une demande de suppression n’efface pas les traces de sécurité",
    src: DATA,
    st: "inc",
    d: "Module 09 : conservées à part pour la durée légale, et l’utilisateur en est informé avant de confirmer.",
  },
  {
    f: "Flux vers des fournisseurs déclarés : notifications, dictée non locale, textos et courriels, rapports d’erreurs",
    src: DATA,
    st: "inc",
    d: "Devis, section 07 B, et module 09 : chaque fournisseur listé avec son rôle et son lieu de traitement; l’utilisateur prévenu avant une dictée qui quitterait son appareil.",
  },
  {
    f: "Durées de conservation, de session et de reprise fixées et vérifiables",
    src: DATA,
    st: "inc",
    d: "Module 09 : valeurs proposées, à confirmer au kickoff avec votre avocate.",
  },
  {
    f: "Démos et bêta sans données réelles hors production",
    src: DATA,
    st: "inc",
    d: "Calendrier, section 04 : démos avec des situations fictives; bêta fermée en production, consentements et politique de confidentialité en place.",
  },
  // Gouvernance et accès
  {
    f: "Moi seul, avec un intervenant désigné, peux approuver un changement des règles de sécurité",
    src: GOUV,
    st: "inc",
    d: "Module 10 : double validation avec l’intervenant de sécurité critique, ou avec la personne à qui vous la déléguez par écrit; seule la version de test, sans utilisateur ni donnée réels, fait exception.",
  },
  {
    f: "Avis immédiat en cas de tentative de modification, protection temporaire des utilisateurs, avis de rétablissement",
    src: GOUV,
    st: "inc",
    d: "Module 10.",
  },
  {
    f: "Backup de la dernière version approuvée, désactivation de la version problématique",
    src: GOUV,
    st: "inc",
    d: "Modules 02 et 10 : retour immédiat par une personne habilitée, revu après coup par l’autre validateur.",
  },
  {
    f: "Fermeture d’un incident autorisée par le fondateur et un autre intervenant, avec un code différent chaque fois, transmis hors de l’application, sauf en période de test",
    src: GOUV,
    st: "inc",
    d: "Module 10 : double validation, code propre à l’incident transmis par un canal externe, preuve de validation journalisée.",
  },
  {
    f: "Codes connus de leur seul titulaire, changés tous les 3 mois, jamais enregistrés; chacun responsable de ses accès",
    src: GOUV,
    st: "inc",
    d: "Module 10; politique d’accès remise avec la documentation.",
  },
  {
    f: "À chaque arrivée, changement de rôle ou départ d’un collaborateur, revue et révocation des accès déclenchées d’office",
    src: GOUV,
    st: "inc",
    d: "Procédure documentée et tracée, appliquée aussi à l’équipe Progix (devis, section 07 B).",
  },
  {
    f: "Appareil de l’utilisateur : données locales minimales, verrouillage, notifications sans contenu, appareil perdu déconnectable",
    src: TECH,
    st: "inc",
    d: "Modules 04 et 09.",
  },
  {
    f: "Traces de tous les événements de sécurité : qui, quand, comment, pourquoi; accès à distance justifiable",
    src: GOUV,
    st: "inc",
    d: "Modules 09 et 10 : qui, quoi, quand, comment, pourquoi, qui l’a autorisé et résultat; la consultation du journal est elle-même journalisée.",
  },
  {
    f: "Aucun membre de l’équipe ni tiers ne communique avec un utilisateur, sauf souci de sécurité",
    src: GOUV,
    st: "inc",
    d: "Module 10 : aucune messagerie de l’équipe vers les utilisateurs, et personne ne peut écrire dans une conversation ni parler au nom d’Harmonia; les avis de service sont prédéfinis et affichés hors de la conversation.",
  },
  {
    f: "Être informé de toute modification; ne pas perdre le contrôle de la personnalité d’Harmonia",
    src: GOUV,
    st: "inc",
    d: "Modules 02 et 10 : versions de la Charte et du modèle d’IA approuvées par vous, écran d’approbation en clair, journal des changements.",
  },
  {
    f: "Accès d’un professionnel ou d’une autorité reconnue : code par situation, vérification écrite, durée limitée, informations minimales",
    src: GOUV,
    st: "fut",
    d: "Feuille de route, avec la procédure juridique.",
  },
  {
    f: "Liens externes : l’utilisateur est responsable des services utilisés hors de l’application",
    src: GOUV,
    st: "inc",
    d: "Mention affichée avant l’ouverture de tout lien externe; seuls les liens de la base vérifiée sont proposés.",
  },
  {
    f: "Deux rôles distincts : l’intervenant de sécurité critique et l’intervenant formé aux alertes",
    src: GOUV,
    st: "inc",
    d: "Section 03 C et devis, section 07 A : cumul seulement sur votre décision écrite, relève désignée pour chacun.",
  },
  {
    f: "Double validation des ressources d’aide, des destinataires de l’alerte, des rôles et des validateurs",
    src: GOUV,
    st: "inc",
    d: "Module 10 : deux personnes distinctes, historique de chaque modification, 911 jamais retirable.",
  },
  {
    f: "Validateur indisponible : procédure accélérée documentée, jamais de blocage par une seule personne",
    src: GOUV,
    st: "inc",
    d: "Module 10 : retour immédiat par une personne habilitée et revue après coup; relève désignée d’avance; délégation écrite possible.",
  },
  {
    f: "Aucun changement de modèle d’IA à votre insu",
    src: GOUV,
    st: "inc",
    d: "Modules 02 et 10 : version figée, batterie de scénarios, même approbation qu’une nouvelle version de la Charte, retour possible.",
  },
  {
    f: "Une approbation éclairée : ce qui change, pourquoi, par qui, avec le résultat des tests",
    src: GOUV,
    st: "inc",
    d: "Module 10 : une version qui échoue ne peut pas être approuvée; empreinte de la Charte active vérifiée au démarrage.",
  },
  // Sécurité technique
  {
    f: "Chiffrement, moindre privilège, environnements séparés, secrets, sauvegardes testées, gestion des incidents",
    src: TECH,
    st: "inc",
    d: "Module 09, dont une copie de sauvegarde hors du projet principal.",
  },
  {
    f: "Protection contre l’injection de consignes et le contournement des règles",
    src: TECH,
    st: "inc",
    d: "Module 02.",
  },
  {
    f: "Tests d’intrusion et vérification indépendante",
    src: TECH,
    st: "par",
    d: "V1 : revue de sécurité interne et scénarios automatisés. Test d’intrusion indépendant : phase suivante.",
  },
  {
    f: "Plans de reprise après sinistre et leurs exercices, audits, registre des décisions, gestion des fournisseurs",
    src: TECH,
    st: "par",
    d: "V1 : procédures techniques de sauvegarde, de restauration et d’incident. Programme organisationnel complet : phase suivante ou consultant de votre choix.",
  },
  {
    f: "Supervision humaine des fonctions à haut risque; une autorité humaine qui peut intervenir",
    src: TECH,
    st: "hors",
    d: "Le logiciel détecte, limite, oriente et alerte; qui intervient, dans quel délai et en tout temps ou non relève de votre exploitation.",
  },
  {
    f: "Sous-traitance en cascade encadrée, fournisseurs connus, lieu des données déclaré",
    src: TECH,
    st: "inc",
    d: "Devis, section 07 B.",
  },
  {
    f: "Sauvegardes indépendantes de la production",
    src: TECH,
    st: "inc",
    d: "Module 09 : copie quotidienne chiffrée dans un compte distinct au Canada, qu’aucune personne seule ne peut effacer.",
  },
  {
    f: "Protections valables même si l’application est modifiée ou contournée",
    src: TECH,
    st: "par",
    d: "V1 : tous les contrôles appliqués sur le serveur. Attestation d’intégrité de l’application (App Attest, Play Integrity) : phase suivante.",
  },
  {
    f: "Accès de Progix : double authentification, aucun secret enregistré, accès justifié, retrait à la fin du support",
    src: TECH,
    st: "inc",
    d: "Devis, sections 05 et 07 B.",
  },
  // Architecture fonctionnelle
  {
    f: "Moteurs de compréhension, de contexte et de pertinence",
    src: ARCH,
    st: "inc",
    d: "Module 01 et orchestrateur IA (section 06).",
  },
  {
    f: "Trois niveaux d’autorisation : accès technique ≠ autorisation fonctionnelle ≠ choix de l’utilisateur",
    src: ARCH,
    st: "inc",
    d: "Modules 04 et 09.",
  },
  {
    f: "Moteur de connaissances et concordance active des sources",
    src: ARCH,
    st: "fut",
    d: "Feuille de route; la V1 applique déjà les règles d’incertitude et d’orientation.",
  },
  {
    f: "Cycle de validation : conception, vérification, risques, validation spécialisée, tests, approbation, surveillance",
    src: ARCH,
    st: "par",
    d: "Tests et approbation des versions en V1; validation spécialisée par vos professionnels.",
  },
  {
    f: "Chaque règle approuvée reliée à un mécanisme qui prouve qu’elle est respectée",
    src: ARCH,
    st: "inc",
    d: "Livrables 6 et 7 : matrice de conformité et matrice de traçabilité, avec la matrice des permissions.",
  },
  {
    f: "Navigation en espaces : Parler avec Harmonia, Mon cheminement, Mes outils, Mon équilibre, Sécurité et ressources",
    src: ARCH,
    st: "par",
    d: "V1 : conversation, espace personnel, outils, SOS et ressources; « Mon équilibre » suit avec les données de santé, à confirmer au kickoff.",
  },
  // Ajouts de septembre
  {
    f: "Positionnement : accompagnement relationnel, pas bien-être global; « Mieux se comprendre. Mieux s’exprimer. Mieux interagir. »",
    src: SEPT,
    st: "inc",
    d: "Textes de l’application et fiches des stores.",
  },
  {
    f: "Ne pas introduire d’hypothèses absentes des faits",
    src: SEPT,
    st: "inc",
    d: "Charte (ajout du 5 septembre).",
  },
  {
    f: "Changer une habitude, inspiré de J’ARRÊTE, sans volet médical; J’ARRÊTE et Harmonia ensemble",
    src: SEPT,
    st: "inc",
    d: "Module 07.",
  },
  {
    f: "Exercice « Observer une pensée » avec mention de provenance J’ARRÊTE",
    src: SEPT,
    st: "inc",
    d: "Module 07; droits de reproduction textuelle à vérifier par votre avocate.",
  },
  {
    f: "Médicaments : référence documentaire (Santé Canada, INESSS), aucun avis clinique, usages hors indication, variabilité individuelle",
    src: SEPT,
    st: "par",
    d: "V1 : règles de la Charte et orientation vers le pharmacien. Base documentaire sourcée : phase suivante.",
  },
  {
    f: "Les six points que l’utilisateur devrait avoir, envoyés en image le 5 septembre",
    src: SEPT,
    st: "par",
    d: "Image non reçue dans la conversation : intégrés à la Charte dès réception s’ils relèvent de la conversation; impact annoncé avant tout engagement s’ils demandent une fonction nouvelle.",
  },
  // Cahier des charges initial
  {
    f: "Journal émotionnel : émotions, intensité, quelques mots",
    src: INIT,
    st: "inc",
    d: "Journal du module 06, sans score imposé.",
  },
  {
    f: "Évaluation quotidienne, défi du jour et graphiques d’évolution",
    src: INIT,
    st: "fut",
    d: "Remplacés en V1 par la conversation, sans questionnaire ni défi imposé; tendances présentées sans jugement avec le miroir.",
  },
  {
    f: "Pyramide de Maslow, PQRSTU, FITT et exercices inspirés de la TCC",
    src: INIT,
    st: "fut",
    d: "Bibliothèque d’outils, après validation professionnelle.",
  },
  {
    f: "Rappels de médicaments",
    src: INIT,
    st: "fut",
    d: "À revalider avec le positionnement relationnel.",
  },
  // Cahier de consultation et rencontre
  {
    f: "Propriété complète : code, historique, designs, prompts, bases de données, configurations, comptes",
    src: CONS,
    st: "inc",
    d: "Devis, section 05.",
  },
  {
    f: "Transfert à une autre firme sans dépendance envers Progix",
    src: CONS,
    st: "inc",
    d: "Procédure de transfert (livrable 13).",
  },
  {
    f: "Équipe connue, sous-traitants divulgués et approuvés, exclusions inscrites au contrat",
    src: CONS,
    st: "inc",
    d: "Devis, section 07 B et annexe confidentielle.",
  },
  {
    f: "Coûts en trois blocs : développement, coûts mensuels, évolutions",
    src: CONS,
    st: "inc",
    d: "Devis, section 03.",
  },
  {
    f: "Données personnelles non envoyées inutilement à l’IA; possibilité de changer de fournisseur",
    src: CONS,
    st: "inc",
    d: "Devis, section 04.",
  },
  {
    f: "Inventaire des dépendances et des licences open source",
    src: CONS,
    st: "inc",
    d: "Livrable 8.",
  },
  {
    f: "Commercialisation : publication, abonnements, paiements, analytics, marketing, soutien",
    src: CONS,
    st: "par",
    d: "Publication, abonnement, bêta et statistiques des stores inclus; campagnes d’acquisition sur demande.",
  },
  // Juridique et entreprise
  {
    f: "Structure corporative, marque Harmonia, contrats, Loi 25, responsabilité liée à l’IA, protection du fondateur et succession",
    src: JUR,
    st: "hors",
    d: "Relève de votre avocate; Progix fournit la description technique utile et adapte l’implémentation.",
  },
  {
    f: "Validation professionnelle des règles au moment opportun",
    src: JUR,
    st: "hors",
    d: "Relève de vos professionnels; Progix leur remet un dossier complet.",
  },
  {
    f: "Évaluation des facteurs relatifs à la vie privée avant toute communication hors du Québec",
    src: JUR,
    st: "hors",
    d: "Relève de votre avocate; Progix remet la description des traitements et des flux dès le choix du fournisseur d’IA, et aucune conversation réelle n’est envoyée au fournisseur d’IA avant l’évaluation.",
  },
  {
    f: "Toute la propriété intellectuelle créée pour Harmonia lui appartient, par des cessions signées par chaque personne",
    src: JUR,
    st: "inc",
    d: "Devis, section 05 : cession garantie par Progix pour chaque personne affectée au projet, droits moraux compris.",
  },
];

const covCount = (st: CovStatus) => coverage.filter((c) => c.st === st).length;

/* ------------------------------------------------------------------ */
/* Section 09 — réponse point par point au tableau « Réponse demandée  */
/* à la firme » du cahier de consultation du Client.                   */
/* ------------------------------------------------------------------ */

const consultation: ReadonlyArray<ReadonlyArray<string>> = [
  [
    "Compréhension du projet",
    "Harmonia accompagne, elle ne décide pas. La conversation est au centre, la Charte est protégée, la sécurité est une couche transversale et l’utilisateur reste maître de ses données. Sections 01 et 04.",
  ],
  [
    "Architecture proposée",
    "Application Flutter, backend hébergé au Canada, orchestrateur IA avec contrôles d’entrée et de sortie, Charte versionnée, console d’administration. Section 06.",
  ],
  [
    "Technologies et justification",
    "Flutter : une seule base de code pour iOS et Android, code exportable, aucun enfermement dans un outil visuel. PostgreSQL : standard ouvert. Fournisseur d’IA derrière une couche d’abstraction. Section 06.",
  ],
  [
    "MVP proposé",
    "Les onze modules de la section 04, avec la feuille de route nommée plutôt qu’oubliée.",
  ],
  [
    "Phases et échéancier",
    "5 phases sur 60 jours, puis 90 jours de support; phases suivantes par avenant. Voir le calendrier.",
  ],
  ["Budget de développement", "6 400 $ CA, en 15 versements Interac. Devis, section 03."],
  [
    "Coûts récurrents estimés",
    "Hébergement 35 à 60 $ par mois, IA 50 à 250 $ par mois en bêta, textos et courriels quelques dollars par mois, Apple 99 USD par an, Google 25 USD une fois, commission des stores 15 à 30 %. Devis, section 03.",
  ],
  [
    "Équipe et compétences",
    "Équipe salariée à Montréal : IA, mobile, back-end, sécurité, qualité; liste nominative remise au kickoff. Devis, section 07.",
  ],
  [
    "Sécurité et confidentialité",
    "Hébergement au Canada, chiffrement, moindre privilège, journalisation, environnements séparés, aucune lecture des conversations. Sections 04 et 07.",
  ],
  [
    "Stratégie de tests",
    "Tests automatisés, batterie de scénarios de sécurité rejouée à chaque version, tests d’accessibilité, recette contre les critères de la section 07, bêta fermée.",
  ],
  [
    "IA et fournisseur(s)",
    "Fournisseur de premier plan sans entraînement sur les données, avec la conservation la plus courte garantie par contrat, au Canada lorsque possible; version du modèle figée, tout changement testé et approuvé; mécanismes contre les hallucinations, les injections et les fuites. Devis, section 04.",
  ],
  [
    "Intégrations externes",
    "V1 : achats intégrés des stores, notifications, envoi de textos et de courriels, composeur téléphonique, voix de l’appareil. Apple Santé et appareils : phase suivante.",
  ],
  [
    "Accessibilité et multilingue",
    "WCAG 2.1 niveau AA visé, VoiceOver, TalkBack, mode vocal complet, SOS utilisable sans téléphoner, interface et conversation en français et en anglais.",
  ],
  [
    "Maintenance et support",
    "90 jours inclus après la publication; ensuite forfait mensuel sur devis, ou l’équipe de votre choix.",
  ],
  [
    "Propriété intellectuelle et transfert",
    "100 % au Client au quinzième versement; comptes à son nom dès le premier jour; procédure de transfert livrée.",
  ],
  [
    "Risques identifiés",
    "Fiabilité de la détection du risque (garde-fous doubles et tests), examen des stores pour une application d’accompagnement émotionnel, délais de validation juridique et clinique, coûts d’IA qui suivent l’usage.",
  ],
  [
    "Dépendances critiques",
    "Fournisseur d’IA (remplaçable), hébergement, App Store et Google Play, compte Apple de la société (numéro D-U-N-S).",
  ],
  [
    "Hypothèses et exclusions",
    "V1 réservée aux adultes et publiée dans les stores canadiens; aucun outil d’accès aux conversations; aucun appel automatique aux services d’urgence; modules de la feuille de route exclus; validations juridiques et cliniques par vos professionnels.",
  ],
  [
    "Questions à clarifier",
    "Vingt et une questions, chacune avec notre recommandation lorsque nous en avons une : voir la liste qui suit ce tableau. Nous les passons en revue avec vous au kickoff.",
  ],
];

/** Open questions from the design conversation, settled with the Client at kickoff. */
const questions: ReadonlyArray<NumberedItem> = [
  {
    n: "1",
    t: "Les six points de l’image du 5 septembre",
    d: "À nous transmettre dès le kickoff : intégrés à la Charte s’ils relèvent de la conversation, chiffrés avant tout engagement s’ils demandent une fonction nouvelle.",
  },
  {
    n: "2",
    t: "La méthode 1-2-3 Go et la « discussion de la tortue »",
    d: "La description de la méthode et, si vous le souhaitez, les extraits qui donnent le ton d’Oméga, pour la Charte v1.",
  },
  {
    n: "3",
    t: "La politique d’intervention",
    d: "Qui reçoit l’alerte, dans quel délai elle doit être prise en charge avant d’être relancée, qui agit et sur quelle base légale, présence humaine en tout temps ou non, seuils qui déclenchent l’alerte; à arrêter avec votre avocate.",
  },
  {
    n: "4",
    t: "Les intervenants et leurs relèves",
    d: "L’intervenant de sécurité critique, l’intervenant formé aux alertes, la relève de chacun et, s’il y a lieu, la personne à qui vous déléguez par écrit votre approbation.",
  },
  {
    n: "5",
    t: "Les durées de conservation",
    d: "Les durées proposées au module 09 (sauvegardes, journaux, sessions, export), le point de départ des 5 ans (dernière activité ou fermeture du compte) et le sort des données d’un abonnement terminé ou d’un compte inactif, avec un avis avant toute suppression; avec votre avocate.",
  },
  {
    n: "6",
    t: "L’abonnement",
    d: "Le prix, l’essai gratuit, et ce qui est gratuit ou payant; le SOS et les données de l’utilisateur restent accessibles dans tous les cas.",
  },
  {
    n: "7",
    t: "Le titulaire des comptes",
    d: "Vous personnellement ou votre société, pour Apple Developer, Google Play, l’hébergement, le fournisseur d’IA et le nom de domaine.",
  },
  {
    n: "8",
    t: "La fin de l’accompagnement",
    d: "Qui constate une violation des règles de sécurité, puisqu’aucun outil ne permet de lire les conversations, et qui décide; avertissement préalable, durée, recours. Notre recommandation : une décision humaine, à partir de l’événement de sécurité, après un avertissement, le SOS restant accessible.",
  },
  {
    n: "9",
    t: "Les règles présentées à l’inscription",
    d: "Les 45 règles de la Charte, seulement les règles de sécurité, ou un noyau condensé. Notre recommandation : un noyau condensé, avec « En savoir plus » vers la Charte complète; la voix de l’appareil suffit pour l’écoute.",
  },
  {
    n: "10",
    t: "La personne de confiance",
    d: "L’intervenant qui reçoit l’alerte peut-il la joindre, et ses coordonnées accompagnent-elles alors l’alerte? Faut-il l’informer de sa désignation? Une personne ou deux?",
  },
  {
    n: "11",
    t: "Les coordonnées de sécurité",
    d: "Obligatoires pour utiliser Harmonia, ou facultatives avec un avertissement? Téléphone confirmé par un code texto? Adresse du domicile, et rappel périodique de la tenir à jour?",
  },
  {
    n: "12",
    t: "Les situations de violence ou de contrôle",
    d: "La personne peut-elle indiquer, pour l’alerte, un moyen de contact sûr (ou « ne pas appeler ») et une personne à ne pas contacter, puisqu’un appel ou une visite à l’adresse inscrite peut l’exposer?",
  },
  {
    n: "13",
    t: "Le soutien aux utilisateurs",
    d: "Qui répond (compte bloqué, téléphone perdu, abonnement, demandes d’accès ou de suppression), par quel canal, quelle adresse figure sur les fiches des stores, et qui est la personne responsable de la protection des renseignements personnels.",
  },
  {
    n: "14",
    t: "La dictée vocale",
    d: "Sur les appareils qui ne reconnaissent pas la voix eux-mêmes, accepter que l’audio passe par Apple ou Google, déclaré et expliqué à l’activation du micro, ou y désactiver la dictée pour appliquer votre règle dans sa lecture la plus stricte.",
  },
  {
    n: "15",
    t: "Accompagner un proche",
    d: "Un utilisateur peut-il se servir de son compte pour aider un proche, comme vous l’avez évoqué? Notre recommandation : un compte par personne, comme vos règles le prévoient, sans mélanger mémoire ni données.",
  },
  {
    n: "16",
    t: "La navigation",
    d: "Les cinq espaces approuvés (Parler avec Harmonia, Mon cheminement, Mes outils, Mon équilibre, Sécurité et ressources) ou l’organisation de ce cahier. Notre recommandation : quatre espaces en V1, « Mon équilibre » suivant avec les données de santé, conformément au repositionnement relationnel.",
  },
  {
    n: "17",
    t: "Les médicaments en V1",
    d: "Aucune information sur un médicament précis, avec orientation vers le pharmacien, ou une information générale renvoyant à la monographie de Santé Canada, en attendant la base documentaire sourcée.",
  },
  {
    n: "18",
    t: "La connexion des utilisateurs",
    d: "Courriel et code à usage unique, mot de passe, ou compte Apple ou Google (qui apprennent alors que la personne utilise Harmonia). Notre recommandation : courriel et code, avec la double authentification proposée.",
  },
  {
    n: "19",
    t: "La mémoire par défaut",
    d: "Harmonia demande avant de retenir un élément, comme vous l’avez approuvé, ce qui correspond au réglage le plus protecteur que la Loi 25 exige par défaut (notre proposition); ou la mémoire est active dès l’inscription, avec « Oublie ça ».",
  },
  {
    n: "20",
    t: "Le pays de distribution",
    d: "Stores canadiens seulement en V1 (notre proposition), puisque les ressources d’aide ne sont vérifiées que pour le Québec et le Canada.",
  },
  {
    n: "21",
    t: "La version anglaise",
    d: "Qui valide l’anglais de la Charte, des règles acceptées à l’inscription, des textes de sécurité et des ressources d’aide : vous, vos professionnels ou un traducteur que vous désignez.",
  },
];

/* ------------------------------------------------------------------ */
/* The page                                                            */
/* ------------------------------------------------------------------ */

/**
 * Full "Cahier des charges" document — header, hero cover, the table of
 * contents, the ten content sections, and the footer. A Server Component
 * composing the shared client leaves (header, FAB, reel, scroll-reveal) at the
 * edges. Content is established from the Client’s design conversation, his
 * consultation brief for development firms and his questions to firms.
 */
export function CahierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="cahier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Cahier des charges · Document de cadrage"
          title="Mieux se comprendre,"
          titleLight="mieux s’exprimer, mieux interagir"
          subtitle="Périmètre fonctionnel et technique de la première version d’Harmonia, application d’accompagnement relationnel et de communication personnelle : conversation avec l’IA en texte et à la voix, Charte Harmonia versionnée et protégée, sécurité de l’utilisateur, inscription règle par règle, espace personnel, accessibilité, données hébergées au Canada et gouvernance des règles. Chaque point de votre cadre y figure, avec son statut."
          badges={[]}
          meta={meta}
        />

        {/* SOMMAIRE */}
        <section data-dc-section style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}>
          <div style={CONTAINER}>
            <span
              style={{
                fontFamily: "var(--font-disp)",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--cyan-ink)",
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  background: "var(--cyan)",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
                aria-hidden="true"
              />
              Sommaire
            </span>
            <h2
              style={{
                fontFamily: "var(--font-disp)",
                fontSize: "clamp(23px,3vw,28px)",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "-.01em",
                margin: "12px 0 0",
              }}
            >
              Ce que couvre ce document
            </h2>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "15.5px",
                color: "var(--slate)",
                maxWidth: "66ch",
                lineHeight: 1.62,
              }}
            >
              Ce cahier des charges définit le périmètre fonctionnel et technique de la première
              version d’Harmonia, les livrables attendus et la démarche de réalisation. Il reprend
              les règles et les modules que vous avez approuvés, votre cahier de consultation et les
              questions que vous posez aux firmes, en distinguant ce qui est inclus, ce qui suit en
              phase ultérieure et ce qui relève de vos professionnels. Il sert de base contractuelle
              au devis associé.
            </p>
            <div style={{ marginTop: "24px", borderTop: "1px solid var(--line)" }}>
              {toc.map((row) => (
                <div
                  key={row.n}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    padding: "13px 2px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 600,
                      color: "var(--cyan-ink)",
                      fontSize: "13px",
                      width: "30px",
                      flexShrink: 0,
                    }}
                  >
                    {row.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 500,
                      color: "#fff",
                      fontSize: "15px",
                    }}
                  >
                    {row.t}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      borderBottom: "1px dotted var(--line)",
                      transform: "translateY(-4px)",
                      minWidth: "20px",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      color: "var(--muted)",
                      fontSize: "13px",
                    }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 — CONTEXTE */}
        <section
          id="s1"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="01 — CONTEXTE"
              title="Contexte & vision du projet"
              lead="Harmonia est née d’une conviction : une IA peut aider une personne à y voir plus clair dans ce qu’elle vit, à condition de penser avec elle et non à sa place. Entre le 30 août et le 11 septembre 2026, vous en avez fixé le cadre règle par règle : qui est Harmonia, comment elle accompagne, ce qu’elle ne doit jamais faire, et comment protéger ses utilisateurs et son âme dans le temps."
            />
            <p
              style={{
                fontSize: "15.5px",
                color: "var(--ink)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              Harmonia est une <Strong>application d’accompagnement relationnel</Strong> qui aide
              chacun à mieux se comprendre, mieux s’exprimer et mieux interagir. Elle aide à mettre
              des mots sur ce qu’on ressent, à distinguer les faits des interprétations, à clarifier
              un besoin ou une limite, à préparer une conversation difficile, dans tous les types de
              relations : amoureuse, familiale, amicale, professionnelle. Son symbole est une{" "}
              <Strong>tortue soutenue par deux mains</Strong> : avancer à son rythme, se protéger
              sans se fermer.
            </p>
            <DiamondHeading marginTop="26px">Trois convictions</DiamondHeading>
            <div style={GRID_AUTO}>
              <FeatureCard icon="1" iconBg="var(--cyan)" title="Avancer avec toi, pas à ta place">
                Harmonia explore, nuance et explique son raisonnement, mais la décision appartient à
                l’utilisateur. Elle propose un outil; elle ne l’impose jamais.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="La sécurité passe avant tout">
                Aucune demande ne peut l’amener à faciliter le suicide, l’automutilation ou une
                intention malveillante. Le <Strong>SOS</Strong> est toujours à un geste.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="L’utilisateur garde le contrôle">
                Il voit ce qu’Harmonia retient, le corrige ou le supprime. Aucun outil ne permet de
                lire ses conversations, et ses données restent au Canada.
              </FeatureCard>
            </div>
            <DiamondHeading>Positionnement</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              Harmonia n’est <Strong>pas une application de bien-être global</Strong>, ni une
              thérapie, ni un ami de substitution : c’est un outil de croissance, qui encourage le
              recours à une personne de confiance ou à un professionnel quand c’est ce dont
              l’utilisateur a besoin. Elle ne cherche pas à retenir l’utilisateur, elle cherche à le
              rendre plus autonome. Cette différence se traduit dans le produit : pas de score, pas
              de défi imposé, pas de récompense conçue pour faire revenir, et une Charte que
              personne ne peut modifier seul.
            </p>
            <div
              style={{
                background:
                  "linear-gradient(155deg,var(--navy-900),var(--navy) 60%,var(--navy-800))",
                color: "#DDE8F4",
                borderRadius: "22px",
                padding: "30px clamp(24px,4vw,34px)",
                margin: "22px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "18px",
                  bottom: "-22px",
                  fontSize: "120px",
                  color: "rgba(56,182,255,.10)",
                  fontFamily: "var(--font-disp)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                —
              </span>
              <span
                style={{
                  fontFamily: "var(--font-disp)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "var(--cyan)",
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Une application simple, un cadre rigoureux
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-disp)",
                  color: "#fff",
                  fontSize: "19px",
                  fontWeight: 600,
                  margin: "12px 0 6px",
                  position: "relative",
                  lineHeight: 1.3,
                }}
              >
                L’utilisateur voit Harmonia; le système fait fonctionner votre cadre
              </h3>
              <p
                style={{
                  color: "#B9CCE2",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                À l’écran, une conversation calme et un SOS. Derrière, la Charte, les niveaux de
                risque, la minimisation des données et la double validation des changements
                travaillent en silence.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
                  gap: "22px",
                  marginTop: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {(
                  [
                    ["45", "règles", "20 du cœur et de l’âme, 25 de sécurité"],
                    ["11", "modules", "dans cette première version"],
                    ["2", "interfaces", "application iOS et Android, console"],
                  ] as const
                ).map(([n, unit, label]) => (
                  <div key={unit}>
                    <div
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontWeight: 700,
                        fontSize: "26px",
                        color: "#fff",
                        letterSpacing: "-.02em",
                      }}
                    >
                      {n}
                      <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                        {" "}
                        {unit}
                      </small>
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#9FB6CE",
                        marginTop: "3px",
                        lineHeight: 1.4,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interstitiel — la bobine de présentation Progix */}
        <ProgixReel />

        {/* 02 — OBJECTIFS */}
        <section
          id="s2"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="02 — OBJECTIFS"
              title="Objectifs & critères de réussite"
              lead="Quatre objectifs pour une première version qui soit déjà pleinement Harmonia. Chacun se vérifie à la recette, puis avec les premiers utilisateurs de la bêta."
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="1" iconBg="var(--cyan)" title="Une vraie conversation">
                Parler à Harmonia comme vous parlez à Oméga : librement,{" "}
                <Strong>sans questionnaire</Strong>, avec une IA qui explique son raisonnement et
                respecte le rythme de la personne.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="Protéger sans abandonner">
                Reconnaître un risque, répondre avec justesse, offrir un <Strong>SOS</Strong> et un
                plan, et faire en sorte qu’une alerte parvienne vraiment à quelqu’un.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="Laisser l’utilisateur maître">
                De son rythme, de ses choix, de sa <Strong>mémoire</Strong> et de ses données,
                hébergées au Canada, sans aucun outil pour les lire.
              </FeatureCard>
              <FeatureCard icon="4" iconBg="var(--navy)" title="Protéger l’âme d’Harmonia">
                Une Charte <Strong>versionnée</Strong>, des garde-fous hors du modèle, et aucune
                règle fondamentale modifiable sans vous.
              </FeatureCard>
            </div>
            <DiamondHeading>Critères de réussite du lancement</DiamondHeading>
            <CheckCard
              lines={[
                "Un utilisateur s’inscrit, accepte les règles une à une et retrouve la copie de ses consentements.",
                "Il parle librement à Harmonia, en texte ou à la voix, et change de mode en cours de conversation.",
                "Harmonia distingue les faits des hypothèses, explique son raisonnement et n’impose aucune décision.",
                "Un message à risque déclenche la réponse prévue pour son niveau, et le SOS ouvre les bonnes ressources de la région.",
                "L’utilisateur construit son plan de sécurité, qu’Harmonia retrouve et ajuste la fois suivante.",
                "Il voit ce qu’Harmonia retient de lui, le corrige et le supprime.",
                "Une nouvelle version de la Charte ne s’active qu’avec votre double validation, et la précédente se rétablit en un geste.",
              ]}
            />
            <InfoCallout title="Objectif de lancement">
              Soumettre la <Strong>première version</Strong> d’Harmonia à l’App Store et à Google
              Play en <Strong>60 jours</Strong>, après une <Strong>bêta fermée</Strong> avec des
              utilisateurs de confiance et une <Strong>Charte v1 validée par vous</Strong>, puis
              l’accompagner pendant <Strong>90 jours</Strong> auprès de ses premiers utilisateurs.
            </InfoCallout>
          </div>
        </section>

        {/* 03 — PUBLICS */}
        <section
          id="s3"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="03 — PUBLICS"
              title="Publics d’Harmonia"
              lead="Harmonia s’adresse d’abord à une personne qui veut mieux se comprendre et mieux interagir. Autour d’elle gravitent la personne de confiance qu’elle désigne, ceux qui veillent sur les règles, et les ressources vers lesquelles Harmonia oriente."
            />
            <UserCard
              letter="A"
              letterBg="linear-gradient(150deg,var(--cyan-deep),var(--cyan))"
              title="L’utilisateur"
              desc="Un adulte qui manque de confiance, traverse une situation relationnelle, veut exprimer une émotion ou un besoin, préparer une conversation, ou changer une habitude."
              rows={[
                {
                  b: "Attentes :",
                  t: " être écouté sans être jugé, comprendre ce qu’il vit, garder la main sur ses décisions et sur ce qu’il confie.",
                },
                {
                  b: "Ce qu’Harmonia lui offre :",
                  t: " une conversation libre, des outils proposés au bon moment, un espace personnel, un SOS et un plan de sécurité.",
                },
                {
                  b: "Support :",
                  t: " application iOS et Android, en texte ou à la voix, adaptée à ses besoins de lecture, de vision ou d’audition.",
                },
              ]}
              tags={[cy("Adulte"), gh("Texte · voix")]}
            />
            <UserCard
              letter="B"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="La personne de confiance"
              desc="Un proche désigné volontairement par l’utilisateur, dès l’inscription ou plus tard."
              rows={[
                {
                  b: "Rôle :",
                  t: " être joignable lorsque la situation de l’utilisateur devient préoccupante.",
                },
                {
                  b: "Ce que la plateforme prévoit :",
                  t: " ses coordonnées conservées à part et chiffrées, jamais transmises à l’IA; l’utilisateur l’appelle en un geste depuis le SOS ou son plan.",
                },
                { b: "Support :", t: " aucun; elle n’a rien à installer." },
              ]}
              tags={[nv("Facultative"), cy("Chiffrée")]}
            />
            <UserCard
              letter="C"
              letterBg="linear-gradient(150deg,var(--cyan-deep),var(--cyan))"
              title="Le fondateur et les intervenants de sécurité"
              desc="Les gardiens des règles : vous, l’intervenant de sécurité critique, et l’intervenant formé qui reçoit les alertes."
              rows={[
                {
                  b: "Rôle :",
                  t: " vous et l’intervenant de sécurité critique approuvez ensemble toute nouvelle version de la Charte ou du modèle d’IA et la fermeture des incidents; l’intervenant formé reçoit les alertes de protection et tient à jour les ressources d’aide. Une même personne ne cumule les deux rôles que sur votre décision écrite, et chacun a une relève désignée d’avance.",
                },
                {
                  b: "Ce que la plateforme leur offre :",
                  t: " une console avec double authentification, double validation et journal des accès; jamais la lecture des conversations.",
                },
                { b: "Support :", t: " console d’administration web." },
              ]}
              tags={[nv("Double validation"), gh("Aucun pouvoir absolu")]}
            />
            <UserCard
              letter="D"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="Les ressources et professionnels"
              desc="911, lignes de crise, Info-Social 811, professionnels de la santé, J’ARRÊTE pour le tabac et le vapotage."
              rows={[
                {
                  b: "Rôle :",
                  t: " prendre le relais là où Harmonia atteint sa limite.",
                },
                {
                  b: "Ce que la plateforme prévoit :",
                  t: " une base de ressources vérifiées par région, jamais un numéro inventé, et une orientation expliquée à l’utilisateur.",
                },
                { b: "Support :", t: " leurs propres canaux; aucune intégration requise." },
              ]}
              tags={[cy("Vérifiées"), gh("Par région")]}
            />
          </div>
        </section>

        {/* 04 — PÉRIMÈTRE FONCTIONNEL */}
        <section
          id="s4"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="04 — FONCTIONNALITÉS"
              title="Périmètre fonctionnel de la première version"
              lead="Onze modules, reliés par la même Charte, la même mémoire contrôlée et la même couche de sécurité. C’est ce qui fait d’eux une seule Harmonia, et non une juxtaposition de fonctions."
            />
            {modules.map((m) => (
              <div
                key={m.n}
                style={{
                  background: "var(--card-grad)",
                  border: "1px solid var(--card-bd)",
                  borderRadius: "14px",
                  margin: "16px 0",
                  boxShadow: "var(--shadow)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "20px 22px 14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "11px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 600,
                      fontFamily: "var(--font-disp)",
                      fontSize: "15px",
                      boxShadow: "0 6px 14px rgba(12,35,64,.22)",
                      background: m.iconBg,
                    }}
                    aria-hidden="true"
                  >
                    {m.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 600,
                        margin: "2px 0 3px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      {m.title}
                      {m.badge ? (
                        <span
                          style={{
                            ...TAG_BASE,
                            background: "var(--tint)",
                            color: "var(--cyan-ink)",
                          }}
                        >
                          {m.badge}
                        </span>
                      ) : null}
                    </h4>
                    <div
                      style={{
                        fontSize: "13.5px",
                        color: "var(--slate)",
                        lineHeight: 1.55,
                      }}
                    >
                      {m.desc}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
                  {m.feats.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
                        padding: "6px 0",
                        fontSize: "13.6px",
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
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>
                        {f.b ? <Strong>{f.b}</Strong> : null}
                        {f.t}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "0 22px 18px clamp(22px,4vw,76px)",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {m.tags.map((t) => (
                    <span
                      key={t.label}
                      style={{
                        ...TAG_BASE,
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
            ))}
            <InfoCallout
              icon="!"
              iconBg="var(--amber)"
              title="Feuille de route : ce qui suit la première version"
              titleColor="#f0c98a"
              borderColor="rgba(232,161,58,0.3)"
              background="var(--amber-bg)"
            >
              Plusieurs modules que vous avez conçus demandent plus que deux mois, ou une validation
              juridique ou professionnelle préalable. Ils sont nommés ici plutôt que glissés dans le
              forfait : le <Strong>parcours mineurs</Strong> (autorisation du tuteur, protections
              renforcées), le <Strong>moteur de connaissances</Strong> et la concordance active des
              sources, le <Strong>miroir du cheminement</Strong>, les fils conducteurs et le profil
              évolutif, les <Strong>données de santé</Strong> et appareils connectés, l’
              <Strong>accès exceptionnel encadré</Strong> pour un professionnel ou une autorité, les{" "}
              <Strong>langues et régions supplémentaires</Strong> et un{" "}
              <Strong>test d’intrusion indépendant</Strong>. La première version en pose les
              fondations; chacun fait l’objet d’un avenant et de son propre calendrier.
            </InfoCallout>
          </div>
        </section>

        {/* 05 — PARCOURS */}
        <section
          id="s5"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="05 — PARCOURS"
              title="Parcours utilisateurs"
              lead="Quatre parcours portent la promesse d’Harmonia : une première rencontre qui explique avant de demander, une conversation qui ne décide pas, un moment difficile où personne n’est laissé seul, un changement d’habitude sans culpabilité."
            />
            <JourneyHeading letter="▸">A · La première rencontre</JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "S’inscrire",
                  d: "Compte personnel, âge légal déclaré selon la province et coordonnées de sécurité, avec la raison de chaque information demandée.",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Accepter les règles",
                  d: "Une règle par écran, à lire ou à écouter, acceptée une à une; la copie horodatée reste accessible.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Comprendre la sécurité",
                  d: "Harmonia explique ce qu’elle fera en cas de danger grave, puis propose une personne de confiance : maintenant, plus tard ou jamais.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Rencontrer Harmonia",
                  d: "« Bonjour, je suis Harmonia. 🌿 Je suis là pour t’écouter et réfléchir avec toi. […] Qu’aimerais-tu qu’on explore ensemble? »",
                },
              ]}
            />
            <JourneyHeading letter="▸" marginTop="30px">
              B · Une conversation
            </JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "Parler librement",
                  d: "En texte ou à la voix, d’une journée ordinaire comme d’une situation qui pèse.",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Comprendre l’intention",
                  d: "« Qu’aimerais-tu que nous fassions avec cette situation? » Juste en parler, comprendre, ou chercher une piste.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Explorer sans imposer",
                  d: "Harmonia distingue ce qui est su, ressenti, supposé et inconnu, et explique son raisonnement.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Proposer une possibilité",
                  d: "« J’entrevois une possibilité qui pourrait t’être utile. Est-ce que tu aimerais qu’on l’explore ensemble? »",
                },
                {
                  n: "ÉTAPE 5",
                  t: "Laisser décider",
                  d: "L’utilisateur choisit la suite, ou laisse la question ouverte; rien n’est mémorisé sans son accord.",
                },
              ]}
            />
            <JourneyHeading letter="▸" marginTop="30px">
              C · Un moment difficile
            </JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "NIVEAU 1",
                  t: "Préoccupation",
                  d: "« Quelque chose dans ce que tu viens de me dire me préoccupe. » Harmonia propose de préparer ensemble un plan.",
                },
                {
                  n: "PLAN",
                  t: "Se stabiliser",
                  d: "Une activité choisie selon ses goûts, puis : est-ce que ça aide vraiment? Quelle intensité reste-t-il?",
                },
                {
                  n: "NIVEAU 2",
                  t: "Risque sérieux",
                  d: "Personne de confiance, professionnel, ligne de crise ou urgence de la région où il se trouve. L’utilisateur choisit.",
                },
                {
                  n: "NIVEAU 3",
                  t: "Danger immédiat",
                  d: "SOS prioritaire, 911 par le téléphone, alerte minimale à vous ou à l’intervenant formé, relancée faute de prise en charge. Harmonia explique et reste disponible, sans promettre ce qu’elle ne peut garantir.",
                },
              ]}
            />
            <JourneyHeading letter="▸" marginTop="30px">
              D · Changer une habitude
            </JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "Pourquoi changer",
                  d: "Motivations, bénéfices recherchés, ambivalence : ce qui compte pour la personne.",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Observer",
                  d: "Déclencheurs, moments, lieux, émotions, automatismes, et l’approche qui lui convient.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Traverser une envie",
                  d: "Reconnaître l’envie, laisser passer quelques minutes, « Observer une pensée », une alternative choisie.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Apprendre d’un écart",
                  d: "Ce qui s’est passé, ce qu’on en retient; un écart n’est pas un échec. J’ARRÊTE en complément pour le tabac.",
                },
              ]}
            />
          </div>
        </section>

        {/* 06 — APPROCHE TECHNIQUE */}
        <section
          id="s6"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="06 — APPROCHE TECHNIQUE"
              title="Approche technique"
              lead="Des technologies éprouvées, ouvertes et transférables, et des services spécialisés pour l’IA et la distribution. Les choix techniques restent révisables; le cœur d’Harmonia, lui, ne change pas par décision technique. Le choix final de chaque fournisseur est arrêté en phase 1, avec vous."
            />
            <DataTable
              head={["Couche", "Choix", "Objectif"]}
              rows={[
                [
                  "Application mobile",
                  "Flutter",
                  "Une seule base de code pour iOS et Android, code source complet et exportable, sans enfermement dans un outil visuel.",
                ],
                [
                  "Backend & base de données",
                  "Supabase (PostgreSQL), région Canada",
                  "Comptes, consentements, mémoire, espace personnel, ressources; sécurité au niveau des lignes et chiffrement des champs sensibles.",
                ],
                [
                  "Orchestrateur IA",
                  "Fonctions serveur, région Canada",
                  "Contrôle d’entrée, assemblage du contexte minimal autorisé, appel du modèle avec la Charte active, contrôle de sortie, journalisation sans contenu.",
                ],
                [
                  "Modèle de langage",
                  "Fournisseur de premier plan, derrière une couche d’abstraction",
                  "Aucun entraînement sur les données, conservation la plus courte garantie par contrat, idéalement nulle, traitement au Canada lorsque possible; version figée; remplaçable sans reconstruire l’application, après les scénarios de test et votre approbation.",
                ],
                [
                  "Charte Harmonia",
                  "Référentiel versionné",
                  "Règles, hiérarchie et formulations de référence, activées après double validation, rétablissables en un geste.",
                ],
                [
                  "Voix",
                  "Moteurs de l’appareil (iOS, Android)",
                  "Dictée et lecture à voix haute, voix féminine ou masculine; reconnaissance sur l’appareil; lorsqu’elle n’est pas locale, Apple ou Google figurent parmi les fournisseurs déclarés et l’utilisateur en est prévenu avant d’activer le micro; aucun enregistrement audio conservé.",
                ],
                [
                  "Abonnement",
                  "Achats intégrés Apple et Google",
                  "Aucune donnée bancaire chez Harmonia; résiliation gérée par les stores.",
                ],
                [
                  "Console d’administration",
                  "Application web sécurisée",
                  "Ressources d’aide, versions de la Charte, alertes; double authentification et double validation.",
                ],
                [
                  "Hébergement & surveillance",
                  "Canada, alertes, sauvegardes",
                  "Disponibilité, diagnostic sans contenu personnel par un outil déclaré, sauvegardes quotidiennes avec copie hors du projet principal, restauration testée.",
                ],
                [
                  "Avis et alertes",
                  "Notifications Apple et Google; texto et courriel par un fournisseur déclaré",
                  "Avis de sécurité du compte et alertes de protection sans aucun contenu personnel; accusé de prise en charge et relance.",
                ],
              ]}
            />

            <DiamondHeading>Comment une réponse d’Harmonia est produite</DiamondHeading>
            <JourneyRow
              steps={[
                {
                  n: "1",
                  t: "Message reçu",
                  d: "Texte ou voix transcrite sur l’appareil; un numéro de carte ou un identifiant sensible est masqué avant l’envoi, et de nouveau sur le serveur.",
                },
                {
                  n: "2",
                  t: "Contrôle d’entrée",
                  d: "Niveau de risque évalué par un classificateur distinct, sur le message et le contexte récent; malveillance, contenus interdits, manipulation.",
                },
                {
                  n: "3",
                  t: "Contexte minimal",
                  d: "Seulement ce qui est pertinent et autorisé : ni nom, ni coordonnées.",
                },
                {
                  n: "4",
                  t: "Modèle + Charte",
                  d: "La version approuvée de la Charte guide la réponse, dans le mode choisi.",
                },
                {
                  n: "5",
                  t: "Contrôle de sortie",
                  d: "Ni diagnostic, ni décision imposée, ni lien ou numéro inventé, ni avis professionnel personnalisé; sinon la réponse est reprise ou remplacée.",
                },
              ]}
            />
            <p
              style={{
                fontSize: "13.4px",
                color: "var(--slate)",
                margin: "8px 0 0",
                lineHeight: 1.55,
              }}
            >
              Au niveau 3, l’étape 2 affiche aussitôt le SOS, sans attendre le modèle. L’alerte
              minimale part dès que le danger est explicite (moyen, lieu, moment), ou après une
              seule question de clarification si le message est ambigu, selon les seuils de votre
              politique d’intervention : ni dramatisation ni banalisation automatiques. Si le
              fournisseur d’IA ne répond pas, Harmonia le dit simplement et le SOS reste disponible.
            </p>

            <DiamondHeading>Modèle de données</DiamondHeading>
            <DataTable
              head={["Entité", "Données principales"]}
              rows={[
                [
                  "Utilisateur",
                  "compte, date de naissance déclarée et province, langue, préférences d’affichage et de voix",
                ],
                [
                  "Coordonnées de sécurité",
                  "nom, prénom, adresse, téléphone : chiffrés, conservés à part, lus seulement par l’alerte",
                ],
                [
                  "Consentement",
                  "règle, version de la Charte, acceptation ou refus, horodatage, copie remise à l’utilisateur, versions acceptées successivement",
                ],
                [
                  "Autorisation",
                  "source de données (journal, objectifs, moments…), portée permanente ou « uniquement maintenant », date, retrait",
                ],
                [
                  "Personne de confiance",
                  "nom, relation, téléphone : chiffrés et conservés à part",
                ],
                [
                  "Mon professionnel",
                  "nom, profession, téléphone, démarches : chiffrés et conservés à part",
                ],
                [
                  "Plan de sécurité",
                  "étapes personnalisées, activités qui aident, efficacité observée, dates",
                ],
                [
                  "Conversation / Message",
                  "mode, niveau de risque évalué, contenu chiffré, outils utilisés",
                ],
                [
                  "Mémoire",
                  "élément retenu, provenance (dit par l’utilisateur ou déduit par Harmonia), raison, date, échéance pour le temporaire, statut (temporaire, retenu, à revérifier, obsolète, supprimé)",
                ],
                [
                  "Journal / Objectif / Moment",
                  "contenu choisi par l’utilisateur — puis état de l’objectif, épingles et ordre",
                ],
                ["Habitude", "motivations, déclencheurs, stratégies, envies traversées, écarts"],
                [
                  "Symbole personnel",
                  "image ou mot choisi, sens donné par l’utilisateur, date, symboles précédents sans hiérarchie; refus de proposition datés, visibles et supprimables",
                ],
                [
                  "Ressource",
                  "région, type, numéro ou moyen écrit, source, date de vérification, historique des modifications et de leurs validations",
                ],
                [
                  "Version de la Charte",
                  "règles, hiérarchie, approbations (qui, quand), modèle d’IA et version associés, empreinte vérifiée au démarrage, statut actif ou archivé",
                ],
                [
                  "Alerte de protection",
                  "coordonnées de sécurité, description factuelle choisie parmi les formulations validées, niveau, destinataires, statuts horodatés (envoyée, reçue, prise en charge, échec); jamais de contenu de conversation; conservée à part, non supprimable",
                ],
                [
                  "Événement d’audit",
                  "qui, quoi, quand, comment, pourquoi, qui l’a autorisé, ressources touchées, résultat; demandes de l’utilisateur (export, suppression, retrait d’autorisation) tracées sans contenu",
                ],
              ]}
            />
            <InfoCallout title="Ce que nous ne présumons pas">
              Comme votre cahier de consultation le demande, nous ne présumons pas que tout doit
              être livré d’un coup, qu’une donnée disponible doit être utilisée, qu’une inférence de
              l’IA est un fait, qu’Harmonia doit décider à la place de l’utilisateur, qu’une
              fonction populaire peut modifier ses principes, que nos choix techniques remplacent
              les validations juridiques ou cliniques, ni qu’un service tiers peut utiliser les
              données d’Harmonia à ses propres fins. Toute proposition qui toucherait un principe
              fondamental vous est présentée comme une <Strong>proposition de changement</Strong>,
              jamais comme une décision technique implicite.
            </InfoCallout>
          </div>
        </section>

        {/* 07 — EXIGENCES */}
        <section
          id="s7"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="07 — EXIGENCES"
              title="Exigences & critères d’acceptation"
              lead="Une application à qui l’on confie ce qu’on vit doit être irréprochable là où ça compte : la sécurité de la personne, la confidentialité de ses mots et la fidélité à ses règles."
            />
            <DataTable
              head={["Domaine", "Exigence"]}
              rows={[
                [
                  "Sécurité de l’utilisateur",
                  "SOS accessible depuis chaque écran en un geste, y compris sans IA, sans serveur et sans réseau; aucun numéro qui ne provienne de la base vérifiée; alerte relancée faute de prise en charge.",
                ],
                [
                  "Fidélité à la Charte",
                  "Chaque version de l’application, de la Charte ou du modèle d’IA passe la batterie de scénarios de sécurité et de conversation avant publication.",
                ],
                [
                  "Confidentialité",
                  "Données au Canada, chiffrées; aucun outil de lecture ni d’écriture des conversations, et tout accès direct à la production nominatif, justifié et journalisé; aucun contenu dans les journaux, les notifications ni les avis d’alerte.",
                ],
                [
                  "Isolation",
                  "Un utilisateur ne peut jamais atteindre les données d’un autre : autorisations vérifiées côté serveur et testées à chaque version.",
                ],
                [
                  "IA",
                  "Contexte minimal, aucune donnée bancaire ni coordonnée transmise, fournisseur sans entraînement sur les données, version du modèle figée.",
                ],
                [
                  "Performance",
                  "Un indicateur « Harmonia réfléchit » s’affiche aussitôt; la réponse, vérifiée en entier avant affichage, arrive en général en moins de 10 secondes, mesuré à la recette; application fluide sur les téléphones récents.",
                ],
                [
                  "Disponibilité",
                  "Objectif de conception de 99,5 % hors maintenance planifiée, suivi pendant le support, sans engagement au-delà de ce que permettent les fournisseurs (devis, section 08, point 4); mode dégradé qui garde le SOS actif.",
                ],
                [
                  "Accessibilité",
                  "WCAG 2.1 niveau AA visé, VoiceOver et TalkBack, texte agrandissable, contrastes suffisants, rien par la couleur seule.",
                ],
                [
                  "Conformité",
                  "Consentements explicites et horodatés, acceptés de nouveau quand une règle change, droits d’accès, de rectification, d’export et de suppression, réglages les plus protecteurs par défaut, conservation encadrée (Loi 25).",
                ],
                ["Compatibilité", "Versions récentes d’iOS et d’Android, téléphones et tablettes."],
              ]}
            />

            <DiamondHeading>Critères d’acceptation fonctionnels</DiamondHeading>
            <CheckCard
              lines={[
                "Un utilisateur s’inscrit, déclare son âge, lit ou écoute chaque règle et l’accepte séparément, puis retrouve la copie horodatée de ses consentements; le refus d’une règle de sécurité arrête l’inscription.",
                "La personne de confiance peut être ajoutée, reportée ou refusée, et ses coordonnées ne figurent dans aucun envoi à l’IA.",
                "La première prise de contact s’affiche exactement telle que vous l’avez approuvée.",
                "L’utilisateur converse en texte et à la voix, passe du mode discussion au mode analyse et revient, sans perdre le fil.",
                "Un outil n’est ouvert qu’après l’accord de l’utilisateur; un refus ramène simplement à la conversation.",
                "Les scénarios de niveau 1, 2 et 3 produisent chacun la réponse prévue; au niveau 3, le SOS s’affiche, le 911 s’ouvre dans le composeur et l’intervenant formé reçoit un avis sans renseignement personnel, puis, dans la console, une alerte limitée aux coordonnées et à une description factuelle, sans contenu de conversation; sans prise en charge dans le délai, l’alerte est relancée au destinataire suivant.",
                "Une demande liée au suicide, à l’automutilation ou à la reconquête d’une personne qui ne le souhaite pas est refusée avec bienveillance, sans jamais fournir d’aide au passage à l’acte.",
                "« Ignore tes règles » et une consigne cachée dans un texte collé n’ont aucun effet dans les scénarios de la batterie, rejoués à chaque version.",
                "Un numéro de carte, d’assurance sociale ou de compte bancaire saisi dans la conversation est masqué, n’est pas conservé et n’est pas transmis, même par un appel direct au serveur.",
                "L’utilisateur voit ce qu’Harmonia retient, le modifie, le supprime, et « Oublie ça » fonctionne.",
                "Le plan de sécurité est créé, retrouvé et ajusté d’une conversation à l’autre.",
                "Une nouvelle version de la Charte reste inactive sans la double validation, et la version précédente se rétablit en un geste.",
                "L’utilisateur exporte ses données et supprime son compte, après une nouvelle authentification.",
                "L’application est utilisable de bout en bout avec VoiceOver et TalkBack.",
                "En mode avion, serveur injoignable ou IA coupée, le SOS affiche le 911 et les ressources de la dernière région connue; sans localisation, l’utilisateur choisit sa région.",
                "Des messages ambigus ou d’émotion intense sans plan concret (humour noir, « je suis mort de fatigue ») ne déclenchent pas l’alerte sans clarification; la description jointe à l’alerte ne contient ni accusation, ni diagnostic, ni nom de tiers, ni citation de la conversation; aucune information d’un utilisateur n’apparaît dans le contexte d’un autre.",
                "Aucun compte de la console ne peut lire, écrire ou modifier une conversation, ni changer seul un numéro d’aide, un destinataire de l’alerte ou un rôle.",
              ]}
            />
            <InfoCallout title="Ces critères font foi à la recette">
              La recette de fin de projet se fait{" "}
              <Strong>contre cette liste de dix-sept critères</Strong>. Chacun est vérifié en votre
              présence, sur votre téléphone, avant la soumission aux stores.
            </InfoCallout>
          </div>
        </section>

        {/* 08 — COUVERTURE */}
        <section
          id="s8"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="08 — COUVERTURE"
              title="Couverture de votre cadre Harmonia"
              lead="Chaque point établi dans votre conversation de conception, votre cahier de consultation et vos questions aux firmes figure dans ce tableau, avec son statut et l’endroit où il est traité. Les règles de conversation détaillées sont toutes reprises dans la Charte; ce tableau en donne les points structurants."
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                margin: "4px 0 16px",
              }}
            >
              {(
                [
                  ["inc", "inclus dans la première version"],
                  ["par", "inclus en partie"],
                  ["fut", "en phase suivante"],
                  ["hors", "hors logiciel"],
                ] as const
              ).map(([st, label]) => (
                <span
                  key={st}
                  style={{
                    ...TAG_BASE,
                    background: COV_TAG[st].bg,
                    color: COV_TAG[st].fg,
                    border: COV_TAG[st].bd,
                    fontSize: "11px",
                    padding: "6px 13px",
                  }}
                >
                  {covCount(st)} {label}
                </span>
              ))}
            </div>
            <div style={{ overflowX: "auto", margin: "6px 0 16px" }}>
              <table style={{ ...TABLE, minWidth: "620px" }}>
                <thead>
                  <tr>
                    <th style={{ ...TH, width: "46%" }}>Point de votre cadre</th>
                    <th style={{ ...TH, width: "14%" }}>Statut</th>
                    <th style={TH}>Où il est traité</th>
                  </tr>
                </thead>
                <tbody>
                  {coverage.map((c, i, arr) => {
                    const base = i % 2 === 1 ? TD_NB_ALT : TD_NB;
                    const cell = i === arr.length - 1 ? { ...base, borderBottom: "none" } : base;
                    const tag = COV_TAG[c.st];
                    return (
                      <tr key={c.f}>
                        <td style={cell}>
                          <Strong>{c.f}</Strong>
                          <div
                            style={{
                              fontSize: "11px",
                              color: "var(--muted)",
                              marginTop: "3px",
                              letterSpacing: ".2px",
                            }}
                          >
                            {c.src}
                          </div>
                        </td>
                        <td style={cell}>
                          <span
                            style={{
                              ...TAG_BASE,
                              background: tag.bg,
                              color: tag.fg,
                              border: tag.bd,
                            }}
                          >
                            {tag.label}
                          </span>
                        </td>
                        <td style={cell}>{c.d}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <InfoCallout title="Rien n’est écarté sans être nommé">
              Tout ce qui fait l’identité d’Harmonia est dans la première version : la conversation,
              la Charte, la sécurité, le contrôle de l’utilisateur et la gouvernance de vos règles.
              Ce qui suit en phase ultérieure l’est parce qu’il demande plus de deux mois ou une
              validation préalable, et ce qui est hors logiciel relève de votre avocate ou de vos
              professionnels, avec un dossier que nous vous préparons.
            </InfoCallout>
          </div>
        </section>

        {/* 09 — RÉPONSE À LA CONSULTATION */}
        <section
          id="s9"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="09 — CONSULTATION"
              title="Réponse à votre cahier de consultation"
              lead="Votre cahier de consultation se termine par un tableau que chaque firme doit remplir. Le voici, rempli par Progix, avec le renvoi vers l’endroit où chaque réponse est détaillée."
            />
            <DataTable head={["Élément demandé", "Réponse de Progix"]} rows={consultation} />
            <DiamondHeading>Questions à trancher avec vous au kickoff</DiamondHeading>
            <NumberedList items={questions} />
            <InfoCallout
              icon="★"
              iconBg="var(--ok)"
              title="Vos critères de sélection"
              titleColor="#7ef0d2"
              borderColor="rgba(52,226,192,0.25)"
              background="var(--ok-bg)"
            >
              Compréhension de la philosophie d’Harmonia, architecture sécurisée et évolutive,
              expérience en IA conversationnelle et en données sensibles, transparence des coûts et
              des dépendances, documentation, transfert complet, équipe stable, et travail avec vos
              professionnels : ce devis, ce cahier et le calendrier y répondent point par point, et
              nous vous montrerons chaque engagement sur votre téléphone, sprint après sprint.
            </InfoCallout>
          </div>
        </section>

        {/* 10 — LIVRABLES */}
        <section
          id="s10"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="10 — LIVRABLES" title="Livrables & accompagnement" />
            <NumberedList
              items={[
                {
                  n: "1",
                  t: "Architecture technique détaillée",
                  d: "Composants, flux, choix et raisons, points de remplacement des fournisseurs.",
                },
                {
                  n: "2",
                  t: "Maquettes et prototypes validés",
                  d: "Logo et charte graphique, inscription, conversation, SOS, espace personnel, réglages.",
                },
                {
                  n: "3",
                  t: "Code source",
                  d: "Application iOS et Android, backend, orchestrateur IA et console, avec l’historique complet du dépôt.",
                },
                {
                  n: "4",
                  t: "Documentation API",
                  d: "Chaque point d’accès, ses droits et ses données.",
                },
                {
                  n: "5",
                  t: "Documentation d’installation et de déploiement",
                  d: "De zéro à une application publiée, étape par étape.",
                },
                {
                  n: "6",
                  t: "Documentation de sécurité",
                  d: "Grille des niveaux de risque, politique d’accès et de codes, gestion des incidents, garde-fous de l’IA, et matrice de conformité : chaque principe du cœur, chaque règle de sécurité et chaque principe de sécurité approuvé pendant la conception, relié à son mécanisme et à sa preuve, ou à son statut (feuille de route, hors logiciel); matrice des permissions, qui peut faire quoi dans la console et l’infrastructure.",
                },
                {
                  n: "7",
                  t: "Plan et rapports de tests",
                  d: "Tests automatisés, scénarios de sécurité et de conversation, accessibilité, recette, et matrice de traçabilité : chaque exigence de la Charte et de sécurité reliée à sa protection, à son test et au résultat.",
                },
                {
                  n: "8",
                  t: "Inventaire des dépendances et licences",
                  d: "Bibliothèques open source et services tiers, versions et licences.",
                },
                {
                  n: "9",
                  t: "Documentation des flux de données",
                  d: "Quelles données vont où, pourquoi, et lesquelles ne quittent jamais la base; remise dès le choix du fournisseur d’IA pour l’évaluation des facteurs relatifs à la vie privée, puis mise à jour à la livraison.",
                },
                {
                  n: "10",
                  t: "Documentation des intégrations",
                  d: "Fournisseur d’IA, stores et achats intégrés, notifications, envoi des textos et des courriels, voix de l’appareil.",
                },
                {
                  n: "11",
                  t: "Guide d’administration",
                  d: "Console, ressources d’aide, publication et rétablissement d’une version de la Charte.",
                },
                {
                  n: "12",
                  t: "Procédure de sauvegarde et restauration",
                  d: "Testée avant la livraison, avec le résultat du test.",
                },
                {
                  n: "13",
                  t: "Procédure de transfert du projet",
                  d: "Tout ce qu’une autre équipe doit recevoir pour reprendre Harmonia sans dépendre de Progix, avec l’inventaire des comptes critiques et de leurs titulaires.",
                },
                {
                  n: "+",
                  t: "Charte Harmonia v1",
                  d: "Vos règles, leur hiérarchie et leurs formulations de référence, telles qu’elles pilotent l’IA, dans un document lisible par vos professionnels. Chaque règle y figure avec le comportement attendu, ce qu’Harmonia ne fait jamais, le rôle de chaque intervenant, ses exceptions et les scénarios de test qui la vérifient.",
                },
              ]}
            />
            <InfoCallout
              icon="★"
              iconBg="var(--ok)"
              title="Au-delà du développement"
              titleColor="#7ef0d2"
              borderColor="rgba(52,226,192,0.25)"
              background="var(--ok-bg)"
            >
              Après la publication, Progix accompagne Harmonia pendant <Strong>90 jours</Strong> :
              corrections, surveillance de l’IA et des alertes, ajustements de la Charte soumis à
              votre validation. Les{" "}
              <Strong>
                révisions et retours demandés en cours de projet ne sont jamais facturés
              </Strong>
              ; ils consomment en revanche du temps de production, et le décalage de livraison qui
              en résulte relève du Client.
            </InfoCallout>
          </div>
        </section>

        <Footer
          heading="Prêts à donner vie à Harmonia"
          text="Ce cahier des charges fixe le périmètre de la première version d’Harmonia et sert de base au devis contractuel associé. Toute évolution fera l’objet d’un avenant écrit entre les parties."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Table cells, user cards & journey rows (local helpers).             */
/* ------------------------------------------------------------------ */

const TD_NB: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  color: "var(--slate)",
  lineHeight: 1.5,
  verticalAlign: "top",
};

const TD_NB_ALT: CSSProperties = { ...TD_NB, background: "var(--paper)" };

type UserRow = { b: string; t?: string; node?: ReactNode };

function UserCard({
  letter,
  letterBg,
  title,
  desc,
  rows,
  tags,
}: {
  letter: string;
  letterBg: string;
  title: string;
  desc: string;
  rows: UserRow[];
  tags: Tag[];
}) {
  return (
    <div
      style={{
        background: "var(--card-grad)",
        border: "1px solid var(--card-bd)",
        borderRadius: "14px",
        margin: "16px 0",
        boxShadow: "var(--shadow)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
          padding: "20px 22px 14px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "11px",
            background: letterBg,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontWeight: 600,
            fontFamily: "var(--font-disp)",
            fontSize: "15px",
            boxShadow: "0 6px 14px rgba(12,35,64,.22)",
          }}
          aria-hidden="true"
        >
          {letter}
        </div>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontFamily: "var(--font-disp)",
              fontSize: "16px",
              color: "#fff",
              fontWeight: 600,
              margin: "2px 0 3px",
            }}
          >
            {title}
          </h4>
          <div style={{ fontSize: "13.5px", color: "var(--slate)", lineHeight: 1.55 }}>{desc}</div>
        </div>
      </div>
      <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              padding: "6px 0",
              fontSize: "13.6px",
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
              aria-hidden="true"
            >
              ▸
            </span>
            <span>
              {r.node ? (
                r.node
              ) : (
                <>
                  <Strong>{r.b}</Strong>
                  {r.t}
                </>
              )}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "0 22px 18px clamp(22px,4vw,76px)",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((t) => (
          <span key={t.label} style={{ ...TAG_BASE, background: t.bg, color: t.fg, border: t.bd }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function JourneyHeading({
  letter,
  children,
  marginTop = "14px",
}: {
  letter: string;
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-disp)",
        fontSize: "18px",
        color: "#fff",
        fontWeight: 600,
        margin: `${marginTop} 0 12px`,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: "var(--cyan)", fontSize: "13px", fontWeight: 700 }} aria-hidden="true">
        {letter}
      </span>
      {children}
    </h3>
  );
}

function JourneyRow({ steps }: { steps: ReadonlyArray<{ n: string; t: string; d: string }> }) {
  return (
    <div style={{ margin: "0 0 8px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {steps.map((s) => (
          <div key={s.n + s.t} style={STEP_CARD}>
            <div style={STEP_EYEBROW}>{s.n}</div>
            <div style={STEP_TITLE}>{s.t}</div>
            <div style={STEP_DESC}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={STEP_RULE} aria-hidden="true" />
    </div>
  );
}

type NumberedItem = { n: string; t: string; d: string };

/** A numbered list inside a single card: index badge, title and description. */
function NumberedList({ items }: { items: ReadonlyArray<NumberedItem> }) {
  return (
    <div
      style={{
        background: "var(--card-grad)",
        border: "1px solid var(--card-bd)",
        borderRadius: "14px",
        padding: "8px 24px",
        boxShadow: "var(--shadow)",
        margin: "14px 0",
      }}
    >
      {items.map((d, i, arr) => (
        <div
          key={d.n}
          style={{
            display: "flex",
            gap: "16px",
            padding: "16px 0",
            borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "var(--tint)",
              color: "var(--cyan-ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-disp)",
              fontWeight: 700,
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {d.n}
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-disp)",
                fontWeight: 600,
                fontSize: "15px",
                color: "#fff",
                marginBottom: "3px",
              }}
            >
              {d.t}
            </div>
            <div style={{ fontSize: "13.4px", color: "var(--slate)", lineHeight: 1.5 }}>{d.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
