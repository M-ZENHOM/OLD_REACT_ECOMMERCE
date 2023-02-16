import { motion } from "framer-motion";
import React from "react";

export default function SubMail() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, dealy: 0.2 }}
      className="sub-mail"
    >
      <h2>Subscribe to our mailing list</h2>
      <div className="sub-input">
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </motion.div>
  );
}
