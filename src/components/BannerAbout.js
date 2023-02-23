import aboutImg from "../assets/about_cover.png";
import "../styles/about.scss";

export default function BannerAbout() {
  return <section className="about_banner">
    <img src={aboutImg} alt="bannière à propos" />
  </section>;
}
