import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Section from '../components/Section';
import '../styles/Pages.css';

import ImgBannerAPropos from '../assets/BannerAPropos.svg';

export default function APropos() {
  return (
    <div className="page">
      <Header />
      <Banner src={ImgBannerAPropos} alt="Illustration d'une côte" />
      <div className="bloc-section">
        <Section
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. "
        />
        <Section
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. "
        />
        <Section
          title="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. "
        />
        <Section
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "
        />
      </div>
      <Footer />
    </div>
  );
}
