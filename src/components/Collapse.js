import arrow from "../assets/arrow.png";
import "../styles/collapse.scss";

export default function Collapse({ title, content }) {
  return (
    <div className="collapse">
      <h2 className="collapse_title">
        {title}
        <img src={arrow} alt="display/hide content arrow" />
      </h2>
      <div className="collapse_text">{content}</div>
    </div>
  );
}
