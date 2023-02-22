import { Link } from "react-router-dom";
import "../styles/notfound.scss";

export default function Error() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Oups! La page que </p>
      <p>vous demandez n'existe pas.</p>
      <Link className="homeReturn" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
