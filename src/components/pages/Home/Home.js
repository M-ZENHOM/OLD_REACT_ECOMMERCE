import React from "react";
import Slider from "../../pages/Home/Slider";
import Products from "../Products/Products";
import Ourstory from "../../pages/Home/Ourstory";
import SubMail from "../../pages/Home/SubMail";
import InstaPeek from "../../pages/Home/InstaPeek";
import img1 from "../../../imgs/bg.jpg";
import Description from "./Description";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
      className="home"
    >
      <Slider
        img={img1}
        btnTitle="Shop Electronics"
        toBtn="/shop"
        description="You can shop everything u want form here"
      />
      <Description />
      <Products />
      <Ourstory />
      <SubMail />
      <InstaPeek />
    </motion.div>
  );
}
