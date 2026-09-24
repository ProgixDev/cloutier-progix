import { VideoBand } from "./video-band";

/**
 * The Progix company reel, with its copy fixed in one place so every document
 * in the set presents it identically. Rendered as the interstitial between the
 * opening section and the scope that follows it.
 *
 * The copy tracks the film: a product ships after months of work and nobody
 * adopts it, because no one planned the launch. For Harmonia the question is
 * doubled by trust: people will only confide in it if the launch shows how
 * their conversations are protected, which is why the devis includes the
 * launch preparation (store listings, closed beta) alongside the build.
 */
export function ProgixReel() {
  return (
    <VideoBand
      eyebrow="Progix en 36 secondes"
      title="Une application sans utilisateurs,"
      titleAccent="c’est une dépense avec une icône."
      sub="Huit mois de développement, une mise en ligne — et une seule installation : celle de sa mère. C’est le sort de la plupart des produits numériques, faute d’avoir prévu comment les utilisateurs allaient les découvrir. Pour Harmonia, la question est double : atteindre les personnes à qui elle peut être utile, et mériter leur confiance avec ce qu’elles ont de plus personnel. Chez Progix, développement, UX, rédaction, produit et marketing travaillent ensemble : nous construisons Harmonia et nous préparons son lancement, de la fiche App Store à la bêta avec vos premiers utilisateurs."
      stats={[
        { n: "150", u: "+", l: "projets réalisés" },
        { n: "5", l: "métiers réunis autour du lancement" },
        { n: "2", u: " mois", l: "de développement" },
      ]}
      src="/video/progix-studio.mp4"
      poster="/video/progix-studio-poster.jpg"
      caption="Vidéo produite en interne, dans nos bureaux de Montréal"
    />
  );
}
