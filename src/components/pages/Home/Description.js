import React from "react";
import shape1 from "../../../imgs/element-one.svg";
import shape2 from "../../../imgs/element-two.svg";
import shape3 from "../../../imgs/element-three.svg";
import { motion } from "framer-motion";

export default function Description() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="about-container"
    >
      <img className="shapeOne" src={shape1} alt="shapeOne" />
      <img className="shapeTwo" src={shape2} alt="shapeOne" />
      <img className="shapeThree" src={shape3} alt="shapeOne" />
      <div className="texts">
        <p>
          We are MAD STORE. We love this planet. We also love looking good and
          we don’t see why anyone should ever have to choose between the two.
        </p>
        <p>
          That is why we only use biodegradable and recycled materials to make
          high quality and stylish eyewear. For you and for your planet.
        </p>
        <p>So don’t just look good.</p>
        <span>Look good for your planet!</span>
      </div>
    </motion.div>
  );
}
