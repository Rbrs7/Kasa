import { Link } from "react-router-dom";
import "../styles/notfound.scss";

export default function Error() {
  return (
    <div className="notFound">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat"
      ></link>
      <h1>404</h1>
      <div className="error_txt">
        <p>Oups! La page que </p>
        <p>vous demandez n'existe pas.</p>
      </div>
      <Link className="homeReturn" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
