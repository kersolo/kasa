import ImgBannerAPropos from '../../assets/bannerAPropos.svg';
import './banner.css';

export default function Banner({ src, text, alt }) {
  return src !== ImgBannerAPropos ? (
    <aside className="banner">
      <img className="img-banner" key={src.id} src={src} alt={alt} />
      <p className="text"> {text} </p>
    </aside>
  ) : (
    <aside className="banner-APropos">
      <img className="img-banner" key={src.id} src={src} alt={alt} />
    </aside>
  );
}
