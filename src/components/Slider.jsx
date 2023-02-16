import { Link } from "react-router-dom";
export default function Slider(props) {
  return (
    <div className="img-container">
      <img src={props.img} alt="IMG" />
      <div className="short-description">
        <h2>
          Hello there,
          <br />
          {props.description}
        </h2>
        <Link className="shopBtn" to={props.toBtn}>
          {props.btnTitle}
        </Link>
      </div>
    </div>
  );
}
