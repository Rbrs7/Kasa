import { Link } from "react-router-dom";
import "../styles/notfound.scss";

export default function ErrorId() {
  return (
    <div className="notFound">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat"
      ></link>
      <h1>500</h1>
      <div className="error_txt">
        <p>Oups! La location que </p>
        <p>vous demandez n'existe pas.</p>
      </div>
      <Link className="homeReturn" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
