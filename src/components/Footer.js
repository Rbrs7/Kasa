import "../styles/footer.scss";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>
      <img src={Logo} alt="kasa, location d'appartements" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}