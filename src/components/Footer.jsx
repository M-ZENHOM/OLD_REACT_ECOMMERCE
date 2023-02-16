import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="Flinks">
          <Link to="/FAQ">FAQ</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Find">Find Store</Link>
        </div>
        <i className="bi bi-globe-asia-australia"></i>
      </div>
      <div className="store-address">
        <p>
          MAD STORE, Herengracht 493, 1017 BT, Amsterdam The Netherlands, Planet
          Earth.
        </p>
        <div className="address">
          <span>+31(0) 20 210 31 35</span>
          <span>mad-store@gmail.com</span>
        </div>
      </div>
      <div className="copyrights">
        <span>
          <div>&copy;</div>All copyrights reserved by ZEHNOM
        </span>
      </div>
    </div>
  );
}
