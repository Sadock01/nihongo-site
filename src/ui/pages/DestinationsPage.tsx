import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './destinations-page.css'
// Image de la section 1 (Ganvié) : remplace ce fichier par ton image.
import mapImage from '../../assets/ganvie-1.jpg'
import abomeyImage from '../../assets/Abomey-royal.jpg'
import ouidahImage from '../../assets/vod-2.jpg'
import cotonouImage from '../../assets/amazone-place.jpg'
import portoNovoImage from '../../assets/porto-novo.jpg'
import grandPopoImage from '../../assets/grand-popo-beach-tranquility.jpg'
import natitingouImage from '../../assets/Benin-faire-du-tourisme-a-Natitingou.jpg'
export function DestinationsPage() {
  return (
    <div className="dest-page">
      {/* Bannière comme la page Bénin (fond crème) */}
      <section className="dest-banner">
        <div className="page-container dest-banner__inner">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="dest-banner__eyebrow"
          >
            Explorer le Bénin
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="dest-banner__title"
          >
            À l&apos;aventure !<br />
            <span>7 lieux incontournables à voir au Bénin</span>
          </motion.h1>
        </div>
      </section>

      {/* Paragraphe centré (fond blanc) */}
      <section className="dest-intro">
        <div className="page-container dest-intro__inner">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="dest-intro__text"
          >
            <Link to="/benin" className="dest-intro__link">
              Le Bénin
            </Link>{' '}
            est une des destinations les plus intéressantes d&apos;Afrique de l&apos;Ouest, notamment
            grâce à son histoire. Le pays a en effet joué un rôle fondamental dans le{' '}
            <strong>commerce transatlantique des esclaves</strong> et il est aussi le{' '}
            <strong>berceau de la religion Vaudou</strong>. Ces attributs ont créé une histoire
            complexe et riche qui constitue l&apos;étoffe de la nation. Malgré sa petite taille et le
            peu de grandes villes, le Bénin est doté de <strong>plages paisibles</strong> donnant sur
            l&apos;Océan Atlantique, d&apos;une <strong>faune fascinante</strong>, de{' '}
            <strong>musées dédiés à la culture</strong> et le pays est empreint d&apos;une multitude de{' '}
            <strong>coutumes traditionnelles</strong>. Voyager au Bénin vaut vraiment le coup d’autant
            plus que le pays promeut le développement du tourisme. Allez-y avant l’arrivée des foules
            et visitez nos <strong>sept lieux incontournables</strong>.
          </motion.p>
        </div>
      </section>

      {/* SECTION 1 : Ganvié (fond crème) */}
      <section className="dest-section dest-section--cream">
        <div className="page-container dest-section__inner dest-section__inner--reverse">
          <motion.div
            className="dest-section__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="dest-section__eyebrow">1. Ganvié</p>
            <h2 className="dest-section__title">Le must pour une balade en bateau</h2>
            <p className="dest-section__body">
              Ne manquez pas de visiter <strong>Ganvié</strong>, à la fois populaire et spectaculaire,
              il s&apos;agit du <strong>plus grand village lacustre d&apos;Afrique</strong>. Situé sur le{' '}
              <strong>lac Nokoué</strong>, un plan d&apos;eau de 16&nbsp;000 hectares proche de Cotonou, il
              compte plus de 20&nbsp;000 habitants. Ganvié est connu pour son passé lié à la{' '}
              <strong>traite des esclaves</strong> lorsqu&apos;au XVe siècle le peuple Tofinu cherchait refuge
              sur les îles du lac pour éviter d&apos;être réduits à l&apos;esclavage.
            </p>
            <p className="dest-section__body">
              Ses membres s&apos;y réfugiaient pour fuir les <strong>guerriers Fon</strong>, tristement
              connus car ils vendaient des Africains aux marchands européens du commerce triangulaire.
              Vous apprendrez que les habitants de Ganvié sont appelés les{' '}
              <strong>&quot;hommes de l&apos;eau&quot;</strong> car ils utilisaient autrefois les eaux peu
              profondes du lac comme abri. En naviguant sur le lac Nokoué,{' '}
              <strong>vous observerez aussi des oiseaux</strong> tels que le héron à crête blanche ou le
              bec-ouverte africain.
            </p>
            <p className="dest-section__body">
              Sachez également que les principales sources de revenus des &quot;hommes de l&apos;eau&quot;
              proviennent du <strong>tourisme</strong> et de la <strong>pêche</strong>. Ganvié est à
              environ <strong>45 minutes de Cotonou</strong>, prévoyez une journée entière pour explorer
              cette cité lacustre unique.
            </p>
          </motion.div>

          <motion.div
            className="dest-section__image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Image à côté du texte : change `src={mapImage}` et `alt` pour mettre ton image. */}
            <img src={mapImage} alt="Illustration du Bénin" className="dest-section__image" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 : Abomey */}
      <section className="dest-section">
        <div className="page-container dest-section__inner">
          <motion.div
            className="dest-section__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="dest-section__eyebrow">2. Abomey</p>
            <h2 className="dest-section__title">L&apos;incontournable site historique du Bénin</h2>
            <p className="dest-section__body">
              Ancienne capitale du Bénin du temps où le pays s&apos;appelait le Dahomey, Abomey fut un
              royaume d&apos;Afrique de l&apos;Ouest entre 1600 et 1814. Réputé pour sa puissance militaire,
              il devint même un empire aux XVIIIe et XIXe siècles. Une fois sur place, visitez les
              <strong> palais d&apos;Abomey</strong>, inscrits au patrimoine mondial de l&apos;Unesco. Même
              si la plupart d&apos;entre eux ont été détruits, votre visite vous fera découvrir
              l&apos;histoire fascinante des rois qui régnaient autrefois sur cette terre.
            </p>
            <p className="dest-section__body">
              <strong>Conseil pratique :</strong> Visitez Abomey accompagné d&apos;un{' '}
              <strong>guide expérimenté</strong> qui vous fera découvrir la région. Seul, vous
              risqueriez de passer à côté de points importants de l&apos;histoire du site.
            </p>
          </motion.div>

          <motion.div
            className="dest-section__image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Image Abomey à droite du texte : remplace `src={mapImage}` et `alt` par ton image. */}
            <img src={abomeyImage} alt="Abomey, site historique du Bénin" className="dest-section__image" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 : Ouidah */}
      <section className="dest-section dest-section--cream">
        <div className="page-container dest-section__inner">
          <motion.div
            className="dest-section__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="dest-section__eyebrow">3. Ouidah</p>
            <h2 className="dest-section__title">La ville du Vaudou</h2>
            <p className="dest-section__body">
              Si vous aimez l&apos;histoire ou si vous êtes fasciné par les <strong>sciences occultes</strong>,
              Ouidah ne peut être qu&apos;en tête de votre liste de lieux à visiter au Bénin. Commençons
              par un peu d&apos;histoire : à la fin du XIXème siècle, lorsque le royaume du Dahomey
              commence à décliner, la ville est envahie par les Français qui finissent par coloniser
              le royaume en 1894 au bout de deux années marquées par une succession d&apos;événements
              violents.
            </p>
            <p className="dest-section__body">
              Malgré son <strong>histoire tumultueuse</strong>, Ouidah constitue aujourd&apos;hui une
              escapade paisible, à seulement 40 km des foules de Cotonou. C&apos;est aussi le
              <strong> berceau du Vaudou</strong> qui en a fait sa religion officielle, une religion
              également pratiquée au Togo, en Haïti, au Brésil, à Cuba et à La Nouvelle-Orléans.
              Vous y apprendrez tout ce que vous avez toujours voulu savoir sur le Vaudou sans oser le
              demander en visitant notamment le <strong>Musée d&apos;Histoire de Ouidah</strong>. Si vous
              le pouvez, prévoyez d&apos;être dans les parages un 10 janvier, jour férié du Vaudou.
              Il est célébré par tous les Béninois.
            </p>
            <p className="dest-section__body">
              <strong>Conseil pratique :</strong> Soyez ouvert d&apos;esprit à Ouidah. Dans cette ville
              hors du commun, vous pourriez être témoin de choses qui semblent étranges ou inconnues.
              Évitez tout jugement et respectez la culture locale.
            </p>
          </motion.div>

          <motion.div
            className="dest-section__image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Image Ouidah à droite du texte : remplace `src={mapImage}` et `alt` par ton image. */}
            <img src={ouidahImage} alt="Ouidah, ville du Vaudou" className="dest-section__image" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 : Cotonou */}
      <section className="dest-section">
        <div className="page-container dest-section__inner">
          <motion.div
            className="dest-section__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="dest-section__eyebrow">4. Cotonou</p>
            <h2 className="dest-section__title">La ville de la nuit</h2>
            <p className="dest-section__body">
              Plus que vivante et animée, <strong>Cotonou est la plus grande ville du Bénin</strong>.
              Vous y rencontrerez une multitude de groupes ethniques principalement béninois tels que
              les Adja, les Bariba, les Fon, les Yoruba et les Peuls, qui représentent plus des quatre
              cinquièmes de la population du Bénin. Cotonou a un effet magnétique indéniable et attire
              aussi des voyageurs du monde entier.
            </p>
            <p className="dest-section__body">
              Si le Bénin est le premier pays que vous visitez en Afrique, vous ressentirez peut-être une
              sorte de surcharge émotionnelle et sensorielle à Cotonou. Faites une pause en explorant le
              <strong> parc national de Pendjari</strong>, une réserve naturelle d&apos;envergure nationale
              pour animaux sauvages d&apos;Afrique de l&apos;Ouest. Vous pouvez également vous détendre sur
              les <strong>belles plages de sable doré</strong> bordées de palmiers de Cotonou. Enfin, si
              vous souhaitez vivre une expérience hors des sentiers battus, rendez-vous au
              <strong> Marché des Fétiches</strong> - un marché qui vend des animaux morts destinés aux
              célébrations Vaudou -.
            </p>
            <p className="dest-section__body">
              <strong>Conseil pratique :</strong> Le meilleur moyen de se rendre à Cotonou reste la route.
              Vous pouvez prendre un bus depuis Porto Novo, Lagos, Lomé et Accra, ou loure une voiture
              avec chauffeur.
            </p>
          </motion.div>

          <motion.div
            className="dest-section__image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Image Cotonou à droite du texte : remplace `src={mapImage}` et `alt` par ton image. */}
            <img src={cotonouImage} alt="Cotonou, la ville de la nuit" className="dest-section__image" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 : Porto Novo */}
      <section className="dest-section dest-section--cream">
        <div className="page-container dest-section__inner">
          <motion.div
            className="dest-section__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="dest-section__eyebrow">5. Porto Novo</p>
            <h2 className="dest-section__title">La ville du shopping insolite</h2>
            <p className="dest-section__body">
              À Porto Novo, capitale du Bénin et ancienne capitale coloniale, vous apprécierez
              l&apos;atmosphère plus calme que celle de Cotonou. Dans cette ville de 250&nbsp;000
              habitants, vous ressentirez l&apos;influence portugaise résultant du passé de Porto Novo.
              Les Portugais se sont en effet implantés au Bénin au XVème siècle pour faire du commerce
              d&apos;esclaves mais aussi de produits tels que le laiton, le cuivre, les tissus et le poivre.
              Sachez que les bracelets en cuivre béninois étaient particulièrement prisés et que des
              millions de produits en laiton du Bénin circulaient dans les pays européens.
            </p>
            <p className="dest-section__body">
              À Porto Novo, visitez le Musée des Rois, le Musée Ethnographique, ainsi que le Palais
              Royal et ses jardins.
            </p>
            <p className="dest-section__body">
              <strong>Conseil pratique :</strong> Visitez Porto Novo après Cotonou. Le trajet est
              agréable et vous découvrirez un petit bout de campagne béninoise.
            </p>
          </motion.div>

          <motion.div
            className="dest-section__image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Image Porto Novo à droite du texte : remplace `src={mapImage}` et `alt` par ton image. */}
            <img src={portoNovoImage} alt="Porto Novo, la ville du shopping insolite" className="dest-section__image" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 : Grand Popo */}
      <section className="dest-section">
        <div className="page-container dest-section__inner">
          <motion.div
            className="dest-section__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="dest-section__eyebrow">6. Grand Popo</p>
            <h2 className="dest-section__title">La station balnéaire du Bénin</h2>
            <p className="dest-section__body">
              Grand Popo est une jolie ville balnéaire bien sympathique. Elle est pourtant marquée par
              un passé tragique. Au XVIème siècle, on y rassemblait les futurs esclaves avant de les
              faire embarquer sur des pirogues en direction de Ouidah. Ils étaient ensuite entassés sur
              des navires en partance pour les Amériques, sans aucun espoir de retour.
            </p>
            <p className="dest-section__body">
              Aujourd&apos;hui, la ville est peuplée de visages amicaux et dévoile une véritable beauté
              africaine. Située à une heure de Cotonou, Grand Popo offre l&apos;opportunité de se
              détendre, de se baigner et de lézarder sur la plage. Vous pouvez également vous promener
              jusqu&apos;à la Rivière Mono, proche de Grand Popo, un joyau caché où vous trouverez de
              jolies mangroves et des plages isolées.
            </p>
            <p className="dest-section__body">
              <strong>Conseil pratique :</strong> Terminez votre voyage au Bénin par Grand Popo,
              l&apos;endroit idéal pour se détendre et se rappeler les merveilleux moments de son voyage.
            </p>
          </motion.div>

          <motion.div
            className="dest-section__image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Image Grand Popo à droite du texte : remplace `src={mapImage}` et `alt` par ton image. */}
            <img src={grandPopoImage} alt="Grand Popo, station balnéaire du Bénin" className="dest-section__image" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 : Natitingou */}
      <section className="dest-section dest-section--cream">
        <div className="page-container dest-section__inner">
          <motion.div
            className="dest-section__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="dest-section__eyebrow">7. Natitingou</p>
            <h2 className="dest-section__title">La ville où s&apos;imprégner de la culture locale</h2>
            <p className="dest-section__body">
              Natitingou est une petite ville riche en culture et en patrimoine. Pour en savoir plus sur
              les différentes tribus du pays, visitez le Musée Régional de Natitingou dans le nord du
              Bénin et découvrez les traditions, les arts, l&apos;artisanat, ainsi que les rituels anciens
              du peuple Somba. Le musée est situé dans un ancien bureau colonial français.
            </p>
            <p className="dest-section__body">
              À votre arrivée, vous verrez une statue d&apos;un héros local nommé Keba, au milieu
              d&apos;un rond-point. Demandez à un guide local de vous raconter l&apos;histoire captivante
              de ce guerrier vénéré connu pour sa lutte intrépide contre le colonialisme. À Natitingou,
              vous aurez aussi l&apos;opportunité de découvrir comment on fabrique le beurre de karité,
              la ville étant réputée pour la fabrication de ce produit dans toute l&apos;Afrique de
              l&apos;Ouest.
            </p>
            <p className="dest-section__body">
              <strong>Conseil pratique :</strong> Si vous aimez l&apos;histoire, Natitingou est une
              destination idéale. Passez-y quelques jours pour vous imprégner de sa culture locale
              particulièrement riche.
            </p>
          </motion.div>

          <motion.div
            className="dest-section__image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Image Natitingou à droite du texte : remplace `src={mapImage}` et `alt` par ton image. */}
            <img src={natitingouImage} alt="Natitingou, culture locale du nord du Bénin" className="dest-section__image" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

