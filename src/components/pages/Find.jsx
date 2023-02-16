import { motion } from "framer-motion";

import Heading from "../Heading";
export default function Find() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
      className="find-container"
    >
      <Heading show="have fun on your way" title="Find Our Location" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.00944219938663!2d31.141240214077705!3d29.975087984037366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584506784efed1%3A0x961ab3bea72d0739!2segypt%20pyramids%20inn!5e0!3m2!1sar!2seg!4v1671984119938!5m2!1sar!2seg"
        title="Googe maps"
      />
    </motion.div>
  );
}
