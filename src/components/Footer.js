import "../styles/footer.scss";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="kasa, location d'appartements" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}