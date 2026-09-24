import { cn } from "@/lib/utils";
import { BadgeHeading, InfoBox, Pill, SectionHeader, Strong, SubHeading } from "./primitives";
import { ProgixReel } from "./progix-reel";
import {
  inclAccess,
  inclCharte,
  inclConversation,
  inclData,
  inclGovernance,
  inclLaunch,
  inclOnboarding,
  inclSafety,
  inclSpace,
  investment,
  payments,
  phases,
  roadmap,
  runningCosts,
  trust,
} from "./content";
import styles from "./devis.module.css";

/** A styled reference to another document in the set. */
function DocRef({ children }: { children: React.ReactNode }) {
  return <span className={styles.link}>{children}</span>;
}

function CheckList({ items }: { items: ReadonlyArray<{ b: string; t: string }> }) {
  return (
    <div className={styles.checkGrid}>
      {items.map((i) => (
        <div key={i.b + i.t} className={styles.check}>
          <span className={styles.checkMark} aria-hidden="true">
            ✓
          </span>
          <span>
            <Strong>{i.b}</Strong>
            {i.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Sections 01–08 of the devis (section 09, the signature block, is separate). */
export function BodySections() {
  return (
    <>
      {/* 01 — OBJET */}
      <section id="s1" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="01 — OBJET" title="Objet du devis" />
          <p className={styles.pLead}>
            Le présent devis contractuel (le « Devis ») engage <Strong>Progix Inc.</Strong> (le «
            Prestataire ») à concevoir, développer et publier la{" "}
            <Strong>première version d’Harmonia</Strong> (l’« Application »), une application
            d’accompagnement relationnel et de communication personnelle, pour le client signataire
            (le « Client »). Son principe tient en trois mots :{" "}
            <Strong>mieux se comprendre, mieux s’exprimer, mieux interagir</Strong>. L’utilisateur
            parle librement à Harmonia, qui l’aide à clarifier ce qu’il vit, ce qu’il ressent et ce
            qu’il veut exprimer, sans jamais décider à sa place.
          </p>
          <p className={styles.p}>
            Sont couverts : la transcription de vos règles en <Strong>Charte Harmonia</Strong>{" "}
            versionnée, le design et le logo, l’application iOS et Android, la conversation avec
            l’IA en texte et à la voix, la sécurité de l’utilisateur, l’espace personnel,
            l’accessibilité, l’hébergement au Canada, la console d’administration, les tests de
            sécurité, la publication sur les stores, la documentation et le support. Le périmètre
            détaillé figure au <DocRef>cahier des charges</DocRef> associé, qui reprend chaque point
            de votre cadre avec son statut. La signature vaut acceptation ferme.
          </p>
          <div className={styles.trust}>
            {trust.map((t) => (
              <div key={t.l} className={styles.trustCell}>
                <div className={styles.trustNum}>{t.n}</div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            ))}
          </div>

          <SubHeading>Ce qu’Harmonia est, et ce qu’elle n’est pas</SubHeading>
          <p className={styles.p}>
            Harmonia n’est ni une application de bien-être global, ni une thérapie, ni un service
            d’urgence. C’est <Strong>un outil de croissance</Strong> qui accompagne la pensée de la
            personne sans la remplir à sa place : elle distingue les faits des interprétations,
            reconnaît ce qu’elle ne sait pas, oriente vers un professionnel quand elle atteint sa
            limite et fait passer la sécurité avant tout le reste. Ce cadre, vous l’avez construit
            règle par règle. Notre travail consiste à le rendre{" "}
            <Strong>concret, vérifiable et aussi difficile que possible à contourner</Strong> :
            aucune conversation ni mise à jour ne peut modifier une règle, et chaque version est
            éprouvée par des tentatives de contournement avant d’être publiée.
          </p>
        </div>
      </section>

      {/* Interstitiel — la bobine de présentation Progix */}
      <ProgixReel />

      {/* 02 — PRESTATIONS */}
      <section id="s2" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="02 — PRESTATIONS"
            title="Tout ce qui est inclus"
            lead="Une première version complète et publiée, bâtie autour de la conversation et de la sécurité, avec les fondations dont les phases suivantes auront besoin. Ce qui dépasse deux mois de développement est nommé plus bas comme feuille de route, plutôt que glissé dans le forfait ou oublié."
          />
          <SubHeading first>
            Parler avec Harmonia <Pill>Cœur de l’application</Pill>
          </SubHeading>
          <CheckList items={inclConversation} />
          <SubHeading>
            La Charte Harmonia : le cœur et l’âme, protégés <Pill>Non négociable</Pill>
          </SubHeading>
          <CheckList items={inclCharte} />
          <SubHeading>
            Sécurité de l’utilisateur <Pill>Priorité absolue</Pill>
          </SubHeading>
          <CheckList items={inclSafety} />
          <SubHeading>Inscription et consentements</SubHeading>
          <CheckList items={inclOnboarding} />
          <SubHeading>Espace personnel, mémoire et outils</SubHeading>
          <CheckList items={inclSpace} />
          <SubHeading>Personnalisation et accessibilité</SubHeading>
          <CheckList items={inclAccess} />
          <SubHeading>Données, confidentialité et sécurité technique</SubHeading>
          <CheckList items={inclData} />
          <SubHeading>Gouvernance et administration</SubHeading>
          <CheckList items={inclGovernance} />
          <SubHeading>Identité, publication et documentation</SubHeading>
          <CheckList items={inclLaunch} />

          <SubHeading>
            Phases suivantes <Pill>Feuille de route</Pill>
          </SubHeading>
          <CheckList items={roadmap} />
          <InfoBox icon="!" title="Pourquoi une première version, et pourquoi celle-ci">
            Votre cahier de consultation demande à la firme de{" "}
            <Strong>distinguer l’indispensable du MVP de ce qui peut suivre</Strong>, et de ne pas
            présumer que tout doit être livré d’un coup. Nous avons gardé dans la première version
            tout ce qui fait qu’Harmonia est Harmonia : la conversation, la Charte, la sécurité, le
            contrôle de l’utilisateur sur ses données. Les modules de la feuille de route s’appuient
            sur ces fondations sans les refaire; ils sont chiffrés par avenant si vous les retenez,
            souvent après une validation juridique ou professionnelle. Rien n’est écarté sans être
            nommé : le <DocRef>cahier des charges</DocRef> donne le statut de chaque point.
          </InfoBox>
        </div>
      </section>

      {/* 03 — INVESTISSEMENT */}
      <section id="s3" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="03 — INVESTISSEMENT"
            title="Votre investissement"
            lead="6 400 $ CA au total, réglés par versements de 450 $ toutes les deux semaines, par virement Interac. Le paiement s’étale bien au-delà de la livraison, sans intérêts ni frais."
          />
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Prestation</th>
                  <th className={styles.thRight}>Montant ($ CA)</th>
                </tr>
              </thead>
              <tbody>
                {investment.map((row, idx) => (
                  <tr key={idx} className={row.alt ? styles.tableAlt : undefined}>
                    <td>
                      {"strong" in row && row.strong ? (
                        <>
                          <Strong>{row.strong}</Strong>
                          {row.text}
                        </>
                      ) : (
                        row.text
                      )}
                    </td>
                    <td className={styles.tableNum}>{row.amount}</td>
                  </tr>
                ))}
                <tr className={styles.tableTotal}>
                  <td>
                    <strong>TOTAL · 450 $ AUX DEUX SEMAINES</strong>
                  </td>
                  <td className={styles.tableTotalAmount}>6 400 $</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cn(styles.totalPanel, styles.lift)}>
            <div className={styles.totalPanelInner}>
              <span className={styles.totalArrow} aria-hidden="true">
                —
              </span>
              <div className={styles.totalEyebrow}>Investissement · montant total</div>
              <div className={styles.totalValue}>6 400 $ CA</div>
              <div className={styles.totalNote}>
                Réglé en{" "}
                <Strong>14 versements de 450 $ aux deux semaines, puis un solde de 100 $</Strong>,
                conception, développement, publication, documentation et support de 90 jours
                compris. Prix ferme, aucun coût caché.
              </div>
            </div>
          </div>

          <InfoBox icon="$" title="Un montant tout compris">
            <Strong>6 400 $ CA est le total que vous payez</Strong>, taxes applicables incluses :
            aucun supplément ne s’ajoute aux versements de 450 $. Les révisions demandées en cours
            de projet ne le modifient pas non plus (section 06).
          </InfoBox>

          <SubHeading>Échéancier : 450 $ toutes les deux semaines</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {payments.map((p) => (
              <div key={p.pct} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.pct}</div>
                <div className={styles.payWhen}>{p.when}</div>
                <div className={styles.payDesc}>{p.desc}</div>
                <div className={styles.payAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", margin: 0, lineHeight: 1.6 }}>
            Premier versement à la signature, puis un versement tous les 14 jours : cinq pendant les
            deux mois de développement (<Strong>2 250 $</Strong>), dix après la publication (
            <Strong>4 150 $</Strong>), le dernier ramené à 100 $ pour atteindre exactement 6 400 $.
            Le <DocRef>calendrier</DocRef> donne la date de chacun. Paiement par{" "}
            <Strong>
              virement Interac au <span style={{ whiteSpace: "nowrap" }}>514-576-5993</span>
            </Strong>
            , en indiquant « Harmonia » et le numéro du versement.{" "}
            <Strong>Aucun développement ne débute avant le premier versement.</Strong>
          </p>

          <SubHeading>Ce qui reste à la charge du Client</SubHeading>
          <p className={styles.p}>
            Votre cahier de consultation demande de séparer le développement, les coûts mensuels et
            les coûts d’évolution. Le développement est couvert par ce Devis. Les{" "}
            <Strong>coûts d’exploitation</Strong> vous sont facturés directement par les
            fournisseurs, sans commission de Progix; voici notre estimation indicative, confirmée en
            phase 1 selon les fournisseurs retenus :
          </p>
          <CheckList items={runningCosts} />
          <InfoBox icon="i" title="Et les coûts d’évolution">
            Les <Strong>nouvelles fonctionnalités</Strong>, dont celles de la feuille de route, sont
            chiffrées par avenant avant tout engagement. Au terme des 90 jours de support, la{" "}
            <Strong>maintenance</Strong> (mises à jour de sécurité, compatibilité avec les nouvelles
            versions d’iOS et d’Android, suivi du fournisseur d’IA) peut se poursuivre par forfait
            mensuel, sur devis, ou être confiée à l’équipe de votre choix.
          </InfoBox>
        </div>
      </section>

      {/* 04 — IA & SÉCURITÉ */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — IA & SÉCURITÉ"
            title="Comment le cœur d’Harmonia est protégé"
            lead="C’est la question que vous posez à toute firme : comment faire pour que les règles importantes ne reposent pas sur un simple prompt facilement modifiable? Notre réponse tient en quatre couches, toutes incluses dans cette première version."
          />
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  1
                </span>
                Une Charte versionnée, hors du code
              </h3>
              <p className={styles.cardText}>
                Vos règles vivent dans un référentiel <Strong>versionné</Strong>. Une nouvelle
                version n’est activée qu’après{" "}
                <Strong>votre approbation et celle de l’intervenant de sécurité critique</Strong>,
                sur un écran qui montre en clair ce qui change; la précédente reste prête à être
                rétablie.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  2
                </span>
                Des garde-fous avant et après l’IA
              </h3>
              <p className={styles.cardText}>
                Chaque message est évalué <Strong>avant</Strong> d’atteindre le modèle (niveau de
                risque, malveillance, données bancaires), sur le serveur. Chaque réponse est
                vérifiée <Strong>après</Strong>, pour écarter diagnostic, décision à la place de
                l’utilisateur, lien ou numéro inventé et avis professionnel personnalisé;
                l’efficacité de ce contrôle est mesurée par les scénarios de test.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  3
                </span>
                Le strict nécessaire envoyé à l’IA
              </h3>
              <p className={styles.cardText}>
                Ni nom, ni coordonnées, ni personne de confiance ne quittent la base. Le modèle
                reçoit seulement le <Strong>contexte pertinent et autorisé</Strong>, et une
                information disponible n’est pas automatiquement utilisée.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  4
                </span>
                Des tests qui essaient de casser Harmonia
              </h3>
              <p className={styles.cardText}>
                Suicide, automutilation, reconquête malveillante, manipulation, consignes cachées,
                contenus interdits : une <Strong>batterie de scénarios</Strong> est rejouée à chaque
                version de l’application, de la Charte ou du modèle d’IA. Une version qui échoue
                n’est pas publiée.
              </p>
            </div>
          </div>
          <InfoBox
            variant="ok"
            icon="★"
            title="Et si une faille grave est découverte en production?"
          >
            Nos étapes, dans l’ordre : <Strong>détection</Strong> (alertes et journal d’événements),{" "}
            <Strong>confinement</Strong> (mode de protection temporaire, fonction désactivée,
            utilisateurs informés sans alarmisme), <Strong>correction</Strong>,{" "}
            <Strong>retour à la dernière version sûre</Strong> si nécessaire,{" "}
            <Strong>documentation</Strong>, information des personnes concernées selon la loi, puis{" "}
            <Strong>réévaluation</Strong> pour que le même problème ne revienne pas. Vous êtes avisé
            dès la détection.
          </InfoBox>
          <InfoBox icon="i" title="Le fournisseur d’IA : trois critères, et rien à votre insu">
            Nous retenons avec vous, en phase 1, un fournisseur de premier plan qui{" "}
            <Strong>n’utilise pas les conversations pour entraîner ses modèles</Strong>, offre la{" "}
            <Strong>conservation la plus courte</Strong>, idéalement nulle grâce à une entente de
            non-conservation, et les traite <Strong>au Canada lorsque son offre le permet</Strong>.
            Harmonia lui parle à travers une couche d’abstraction : changer de fournisseur ne
            demande pas de reconstruire l’application. Le modèle et sa version sont en revanche{" "}
            <Strong>figés et consignés</Strong> : tout changement de modèle, de version ou de
            fournisseur, même imposé par celui-ci, repasse la batterie de scénarios et suit la même
            approbation qu’une nouvelle version de la Charte, avec retour possible au modèle
            précédent tant qu’il est offert. La dictée utilise la reconnaissance de l’appareil;
            lorsqu’elle n’est pas locale, l’utilisateur en est prévenu avant d’activer le micro, et
            aucun enregistrement audio n’est conservé.
          </InfoBox>
          <p className={styles.note}>
            Harmonia n’est <Strong>ni un service d’urgence, ni un professionnel de la santé</Strong>{" "}
            : elle fait le pont vers eux. Elle ne remplace jamais le 911, un psychologue ou un
            pharmacien, et le dit à l’utilisateur.
          </p>
        </div>
      </section>

      {/* 05 — APRÈS-LIVRAISON */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="05 — APRÈS-LIVRAISON" title="Propriété, support & documentation" />
          <InfoBox variant="ok" icon="★" title="Vous êtes propriétaire à 100 %">
            La propriété intellectuelle est{" "}
            <Strong>transférée progressivement à mesure des paiements</Strong>. Au quinzième
            versement, <Strong>code source et historique du dépôt</Strong>,{" "}
            <Strong>base de données</Strong>, <Strong>maquettes et fichiers sources</Strong>,{" "}
            <Strong>Charte et instructions de l’IA</Strong>, configurations, scripts de déploiement,
            tests et <Strong>documentation</Strong> appartiennent au Client.{" "}
            <Strong>Aucun verrouillage</Strong>, aucune dépendance propriétaire critique non
            déclarée. Les <Strong>données</Strong> d’Harmonia et de ses utilisateurs, elles,
            n’appartiennent jamais à Progix, à aucun moment. Progix garantit enfin que chaque
            personne affectée au projet lui a <Strong>cédé ses droits</Strong> sur ce qu’elle
            produit et renonce à l’exercice de ses droits moraux, notamment sur le logo et les
            illustrations : la cession au Client est complète.
          </InfoBox>
          <SubHeading>Vos comptes, à votre nom dès le premier jour</SubHeading>
          <p className={styles.p}>
            Apple Developer, Google Play Console, hébergement, fournisseur d’IA, nom de domaine et
            dépôt de code sont ouverts <Strong>à votre nom</Strong>, ou à celui de votre société une
            fois constituée. Progix y intervient comme collaborateur, avec des{" "}
            <Strong>accès individuels, nominatifs et révocables</Strong>, retirés au départ d’une
            personne et, pour la production, à la fin du support de 90 jours, sauf demande écrite de
            votre part. Vous gardez le contrôle de l’infrastructure en tout temps.
          </p>
          <SubHeading>Support inclus pendant 90 jours</SubHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              <Strong>Corrections de bugs</Strong> et ajustements mineurs (hors nouvelles
              fonctionnalités), à compter de la publication.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Surveillance des premières semaines</Strong> : erreurs, disponibilité du
              fournisseur d’IA, alertes de sécurité et retours signalés par les utilisateurs.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Ajustements de la Charte</Strong> constatés en bêta ou après la publication,
              toujours soumis à votre validation avant d’être activés.
            </li>
          </ul>
          <SubHeading>
            Documentation remise à la livraison <Pill>Incluse</Pill>
          </SubHeading>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  ✎
                </span>
                Documentation technique
              </h3>
              <p className={styles.cardText}>
                Architecture, API, modèle et flux de données, intégrations, sécurité, plan et
                rapports de tests, inventaire des dépendances et de leurs licences, procédure de
                sauvegarde et de restauration.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  ▸
                </span>
                Guide d’administration & transfert
              </h3>
              <p className={styles.cardText}>
                Prise en main de la console, publication d’une nouvelle version de la Charte, mise à
                jour des ressources d’aide, installation et déploiement, et{" "}
                <Strong>procédure de transfert du projet</Strong> à une autre équipe.
              </p>
            </div>
          </div>
          <InfoBox icon="i" title="Si vous changez de firme un jour">
            Une autre équipe reprend Harmonia avec le code, son historique, la documentation, les
            accès, les clés et l’infrastructure, <Strong>sans dépendre de Progix</Strong>. C’est la
            réponse à la question que vous posez à toute firme, écrite noir sur blanc.
          </InfoBox>
        </div>
      </section>

      {/* 06 — DÉLAIS */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="06 — DÉLAIS"
            title="Délais & phases de réalisation"
            lead="2 mois de développement, soit 60 jours, en 5 phases, puis 90 jours de support. Réalisation itérative : dès le sprint 2, vous essayez Harmonia sur votre téléphone à la fin de chaque sprint, et vous validez chaque étape clé."
          />
          <div
            className={styles.grid3}
            style={{
              margin: "16px 0",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
            }}
          >
            {phases.map((p) => (
              <div key={p.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.tag}</div>
                <div className={styles.payWhen}>{p.title}</div>
                <div className={styles.phaseDesc}>{p.desc}</div>
              </div>
            ))}
          </div>

          <InfoBox variant="ok" icon="★" title="Vos révisions ne sont jamais facturées">
            Vous pouvez demander autant de <Strong>révisions et de retours</Strong> que vous le
            souhaitez pendant toute la durée du projet : ils ne donnent lieu à{" "}
            <Strong>aucune surfacturation</Strong> et le montant de 6 400 $ ne bouge pas. En
            contrepartie, chaque révision consomme du temps de production. Le{" "}
            <Strong>délai de 2 mois vaut donc à périmètre constant et validations rapides</Strong> :
            tout décalage causé par une demande de révision, un retour tardif ou une validation en
            attente <Strong>relève du Client</Strong> et reporte la date de livraison d’autant. Une
            demande qui ajoute une <Strong>fonctionnalité nouvelle</Strong> n’est pas une révision
            et passe par un avenant.
          </InfoBox>

          <InfoBox icon="i" title="Quatre dépendances hors de notre contrôle">
            L’<Strong>inscription Apple d’une société</Strong> exige un numéro D-U-N-S, dont
            l’obtention peut prendre de quelques jours à deux semaines : la demande part dès la
            phase 1. La <Strong>validation de la Charte</Strong> et des textes juridiques par vos
            professionnels suit leur propre agenda. Le <Strong>fournisseur d’IA</Strong> fixe ses
            conditions et sa disponibilité. Enfin, l’<Strong>App Store</Strong> et{" "}
            <Strong>Google Play</Strong> examinent les applications d’accompagnement avec attention
            et peuvent demander des modifications avant de publier.
          </InfoBox>
          <p className={styles.note}>
            La <Strong>livraison</Strong> s’entend de la soumission de l’Application à l’App Store
            et à Google Play, de la mise en ligne de la console et de la remise de la documentation
            : un délai d’examen des stores ne la reporte pas. Les modules de la{" "}
            <Strong>feuille de route</Strong> suivent leur propre calendrier, en dehors des 2 mois.
            Tout retard du Client entraîne un <Strong>report équivalent du calendrier</Strong>{" "}
            (section 07).
          </p>
        </div>
      </section>

      {/* 07 — ENGAGEMENTS */}
      <section id="s7" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="07 — ENGAGEMENTS"
            title="Ce que nous faisons ensemble"
            lead="Quelques éléments ne peuvent venir que de vous : une décision, une validation, un compte à votre nom, l’avis d’un professionnel. Vous ne les affrontez jamais seul. Pour chacun, voici ce que Progix prend en charge pour que votre part se réduise à un accord ou à une signature."
          />

          <InfoBox variant="ok" icon="★" title="Un seul interlocuteur, du premier jour au dernier">
            Un <Strong>point de contact unique</Strong> chez Progix, un{" "}
            <Strong>point d’avancement chaque semaine</Strong>, une{" "}
            <Strong>démo à la fin de chaque sprint</Strong>, sur votre téléphone dès le sprint 2, et
            un canal direct pour les questions entre deux réunions. Tout ce qui est approuvé est
            consigné, pour ne jamais vous faire répéter la même chose.
          </InfoBox>

          <BadgeHeading badge="A" first>
            Ce que vous apportez, et comment nous vous y aidons
          </BadgeHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              <Strong>Vos validations.</Strong> Chaque fin de sprint arrive avec une démo, une liste
              courte de points à trancher et une <Strong>recommandation Progix</Strong> sur chacun.
              Vous décidez, vous n’arbitrez pas dans le vide.
            </li>
            <li className={styles.arrowItem}>
              <Strong>L’approbation de la Charte Harmonia.</Strong> Nous transcrivons vos règles
              approuvées, sans en retirer ni en réinterpréter une seule, et vous validez la version
              1 <Strong>ligne par ligne</Strong> avant qu’elle ne pilote l’IA, y compris les
              éléments des deux listes compilées par Oméga (le cœur et les règles de sécurité) qui
              n’avaient pas été approuvés un à un. Les <Strong>six points</Strong> que vous vouliez
              ajouter le 5 septembre, restés sur une image, y sont intégrés dès réception s’ils
              relèvent de la conversation; s’ils demandent une fonction nouvelle, nous vous en
              donnons l’impact avant de l’engager. Il en va de même pour la description du{" "}
              <Strong>1-2-3 Go</Strong> et, si vous le souhaitez, les extraits de votre « discussion
              de la tortue » qui donnent le ton d’Oméga.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Les comptes à votre nom</Strong> ou à celui de votre société : Apple Developer
              (99 USD/an; numéro D-U-N-S pour un compte de société), Google Play Console (25 USD une
              fois), hébergement, fournisseur d’IA, nom de domaine. Nous vous envoyons la marche à
              suivre et, <Strong>si vous préférez, nous les créons avec vous en visio</Strong>.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Les validations professionnelles.</Strong> La relecture de la Charte par des
              professionnels (psychologie, soins, éthique) et des textes juridiques par votre
              avocate relève de vous; nous leur remettons un <Strong>dossier clair</Strong> :
              description des traitements de données, flux vers l’IA, grille des niveaux de risque
              et scénarios de test. La description des traitements part{" "}
              <Strong>dès le choix du fournisseur d’IA</Strong>, pour que l’évaluation des facteurs
              relatifs à la vie privée soit faite avant la bêta : aucune conversation réelle n’est
              envoyée au fournisseur d’IA avant.
            </li>
            <li className={styles.arrowItem}>
              <Strong>La politique d’intervention.</Strong> Qui reçoit l’alerte de protection, dans
              quel délai elle doit être prise en charge avant d’être relancée, qui agit, sur quelle
              base légale, si une présence humaine est requise en tout temps et quels seuils
              déclenchent l’alerte se décide avec votre avocate; Progix livre le mécanisme et
              l’adapte aux règles que vous arrêtez.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Les rôles.</Strong> Vos règles exigent des personnes aux rôles distincts :
              nous établissons ensemble, au kickoff, qui approuve la Charte, qui déploie, qui
              détient les clés et qui reçoit les alertes. L’
              <Strong>intervenant de sécurité critique</Strong>, qui approuve avec vous la Charte et
              la fermeture des incidents, et l’<Strong>intervenant formé</Strong>, qui reçoit les
              alertes et tient les ressources à jour, sont des personnes que vous choisissez; une
              même personne ne cumule les deux rôles que sur votre décision écrite. Nous désignons
              aussi la <Strong>relève</Strong> de chacun, habilitée d’avance dans la console, pour
              qu’une absence ne bloque pas une correction urgente ni ne pousse à contourner la
              double validation, et, si vous le souhaitez, la personne à qui vous déléguez par écrit
              votre propre approbation.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Les ressources d’aide.</Strong> Nous compilons la liste vérifiée des
              ressources du Québec et du Canada, avec leur source et leur date de vérification,
              ainsi que la courte liste des numéros d’urgence officiels par pays pour les
              utilisateurs en voyage; vous la validez avant la publication.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Quelques bêta-testeurs de confiance</Strong> pour la phase 5. Nous préparons
              leur invitation et recueillons leurs retours.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Un périmètre tenu.</Strong> La Charte v1 approuvée et les critères
              d’acceptation du cahier des charges forment la base d’exigences de la première
              version. Préciser ou ajouter une règle de conversation est une révision; une règle qui
              exige une fonction nouvelle passe par un avenant. En revanche, vos{" "}
              <Strong>retours sur ce qui est déjà au périmètre sont illimités et gratuits</Strong> :
              voir le point C.
            </li>
          </ul>

          <BadgeHeading badge="B">Équipe, sous-traitance et exclusions</BadgeHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              <Strong>Liste nominative.</Strong> Au kickoff, vous recevez la liste des personnes qui
              travaillent sur Harmonia, leur rôle et leurs accès. Elle est tenue à jour pendant tout
              le mandat.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Aucun tiers sans votre accord.</Strong> Aucun sous-traitant, consultant,
              pigiste ou partenaire externe n’intervient sur Harmonia, ni n’accède à ses données,
              sans votre <Strong>accord écrit préalable</Strong>. Vous disposez d’un{" "}
              <Strong>droit de refus</Strong>.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Exclusions respectées.</Strong> Les personnes et entreprises que vous avez
              désignées, ainsi que toute entité agissant par leur intermédiaire, ne participent{" "}
              <Strong>ni directement ni indirectement</Strong> au projet. Leur liste nominative
              figure en <Strong>annexe confidentielle</Strong> signée par les deux Parties et n’est
              pas reproduite dans ce document en ligne.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Fournisseurs techniques déclarés.</Strong> Hébergement, IA, stores,
              notifications (Apple, Google), reconnaissance vocale de l’appareil lorsqu’elle n’est
              pas locale, envoi des textos et des courriels, rapports d’erreurs : chacun est listé
              avec son rôle et le lieu de traitement des données, et tout changement vous est
              soumis.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Confidentialité.</Strong> Progix signe votre accord de confidentialité avant
              le kickoff, et chaque personne affectée au projet y est tenue individuellement.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Progix, fournisseur comme les autres.</Strong> Accès individuels et
              journalisés, avec double authentification ou clé d’accès, sans mot de passe enregistré
              ni session privilégiée mémorisée, depuis un poste chiffré et à jour; tout accès à la
              production, y compris à distance, est justifié au moment où il s’ouvre; accès revus à
              chaque arrivée, changement de rôle ou départ selon une procédure tracée; aucune donnée
              réelle d’utilisateur sur les postes de l’équipe; tout incident vous est notifié; en
              fin de mandat, restitution complète, révocation de nos accès et{" "}
              <Strong>attestation de suppression</Strong> de toute copie. Aucune porte dérobée,
              aucun accès caché.
            </li>
          </ul>

          <BadgeHeading badge="C">Révisions, retours et délai</BadgeHeading>
          <p className={styles.p}>
            Demandez autant de retours que nécessaire : les{" "}
            <Strong>révisions ne sont jamais facturées</Strong>, sans limite de nombre. Nous
            préférons un aller-retour de plus qu’une Harmonia livrée à côté de ce que vous aviez en
            tête. Une seule contrepartie, dite franchement : chaque révision consomme du temps de
            production, donc le{" "}
            <Strong>délai de 2 mois s’entend à périmètre constant et validations rapides</Strong>.
            Un retour tardif, un compte manquant ou une demande de révision entraîne un{" "}
            <Strong>report équivalent du calendrier</Strong>, et ce report{" "}
            <Strong>relève du Client</Strong> et non de Progix. Nous vous annonçons l’impact en
            jours avant d’engager la révision, pour que le choix reste le vôtre.
          </p>
        </div>
      </section>

      {/* 08 — DISPOSITIONS */}
      <section id="s8" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="08 — DISPOSITIONS" title="Dispositions générales" />
          <BadgeHeading badge="1" first>
            Droit applicable & juridiction
          </BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est régi par les lois de la province de Québec et les lois fédérales du
            Canada applicables. Tout litige sera soumis aux tribunaux compétents du district
            judiciaire de Montréal.
          </p>
          <BadgeHeading badge="2">Versements</BadgeHeading>
          <p className={styles.p}>
            Chaque versement est dû à sa date, par virement Interac. Un versement en retard de plus
            de 14 jours <Strong>suspend le calendrier</Strong> pendant le développement, et le{" "}
            <Strong>support</Strong> après la livraison, jusqu’à sa régularisation, sans pénalité.
            Le Client peut solder le montant restant à tout moment.
          </p>
          <BadgeHeading badge="3">Résiliation anticipée</BadgeHeading>
          <p className={styles.p}>
            Le Client peut mettre fin au contrat avant son terme en cas de{" "}
            <Strong>manquements importants imputables à Progix</Strong> (non-respect majeur du
            périmètre validé, absence prolongée de suivi, dépassements importants de délais sans
            justification). Il conserve alors les éléments déjà développés, les fichiers graphiques
            et la <Strong>propriété intellectuelle correspondant aux montants déjà réglés</Strong>,
            conformément au transfert progressif prévu à la section 05, et les versements restants
            ne sont pas exigibles.
          </p>
          <BadgeHeading badge="4">Dépendance aux fournisseurs tiers</BadgeHeading>
          <p className={styles.p}>
            Le modèle de langage, l’hébergement, les stores, les achats intégrés et les services de
            notification reposent sur des <Strong>services tiers</Strong> dont Progix ne maîtrise ni
            la disponibilité, ni les conditions d’accès, ni les tarifs. Progix livre une intégration
            résistante aux pannes, où le SOS et les ressources d’aide restent accessibles sans l’IA,
            mais ne peut garantir la continuité d’un service opéré par un tiers.
          </p>
          <BadgeHeading badge="5">Nature d’Harmonia et responsabilités</BadgeHeading>
          <p className={styles.p}>
            Harmonia est un outil d’accompagnement : elle ne pose aucun diagnostic, ne remplace ni
            un professionnel de la santé ni les services d’urgence, et oriente vers eux. Progix
            livre les mécanismes décrits au Devis (niveaux de risque, SOS, orientation, alerte). Le{" "}
            <Strong>positionnement public</Strong>, la{" "}
            <Strong>validation clinique et éthique</Strong> de la Charte, la politique
            d’intervention et l’exploitation du service relèvent du <Strong>Client</Strong>, avec
            les professionnels qu’il mandate. Progix ne fournit ni avis juridique, ni avis clinique,
            ni supervision clinique, ni service de garde ou d’intervention.
          </p>
          <BadgeHeading badge="6">Protection des renseignements personnels</BadgeHeading>
          <p className={styles.p}>
            L’Application applique la minimisation, le chiffrement, l’hébergement au Canada, les
            accès nominatifs et journalisés, et aucune consultation des conversations. Le Client
            demeure <Strong>responsable des renseignements personnels</Strong> au sens de la Loi 25
            et publie la politique de confidentialité et les conditions d’utilisation; Progix
            fournit, dès le choix du fournisseur d’IA, la description technique des traitements
            utile à son évaluation des facteurs relatifs à la vie privée, qui précède la bêta, et
            l’avise <Strong>sans délai</Strong> de tout incident de confidentialité.
          </p>
          <BadgeHeading badge="7">Confidentialité</BadgeHeading>
          <p className={styles.p}>
            Progix traite comme confidentiels le concept d’Harmonia, la Charte, les documents remis
            par le Client et l’annexe des exclusions. Cette obligation survit à la fin du contrat.
          </p>
          <BadgeHeading badge="8">Intégralité de l’entente</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis, complété par le <DocRef>cahier des charges</DocRef>, le{" "}
            <DocRef>calendrier</DocRef> et l’annexe confidentielle des exclusions, constitue
            l’intégralité de l’entente entre les Parties et remplace toute communication antérieure.
          </p>
          <BadgeHeading badge="9">Modifications & divisibilité</BadgeHeading>
          <p className={styles.p}>
            Toute modification du Devis ou du périmètre doit faire l’objet d’un écrit signé par les
            deux Parties. Si une disposition est jugée invalide, les autres demeurent en vigueur.
          </p>
        </div>
      </section>
    </>
  );
}
