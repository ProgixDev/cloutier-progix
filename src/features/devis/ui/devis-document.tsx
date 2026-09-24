import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { BodySections } from "./sections";
import { SignatureSection } from "./signature-section";
import styles from "./devis.module.css";

/**
 * Full "Devis contractuel" document — header, hero cover, the nine content
 * sections (the last being the interactive signature block), and the footer.
 * A Server Component that composes client leaves (header, FAB, video band,
 * signature, scroll-reveal) at the edges.
 *
 * The company reel sits between section 01 (the object and the team) and
 * section 02 (the scope).
 */
export function DevisDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader />
      <main className={styles.main}>
        <DownloadFab />
        <Cover />
        <BodySections />
        <SignatureSection />
        <Footer
          heading="Mieux se comprendre. Mieux s’exprimer. Mieux interagir."
          text="Un montant ferme de 6 400 $ CA, réglé par versements de 450 $ aux deux semaines, une première version d’Harmonia livrée en 2 mois, ses règles fondamentales protégées et votre propriété à 100 %. Il ne reste qu’à signer."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}
