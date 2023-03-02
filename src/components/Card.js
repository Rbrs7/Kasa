import "../styles/card.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="gallery_card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
