import React from "react";
import img1 from "../../../imgs/bg.jpg";
import img2 from "../../../imgs/bg-two.jpg";
import img3 from "../../../imgs/bg-three.jpg";
import { motion } from "framer-motion";

export default function InstaPeek() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, dealy: 0.6 }}
      className="insta-peek"
    >
      <div className="insta-heading">
        <h2>Follow us</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.instagram.com/mahmouud_zenhom/`}
        >
          @mahmoud.zenhom
        </a>
      </div>
      <div className="insta-imgs">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.instagram.com/mahmouud_zenhom/`}
          className="overlay"
        >
          <i className="bi bi-instagram" />
        </a>
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
      </div>
    </motion.div>
  );
}
