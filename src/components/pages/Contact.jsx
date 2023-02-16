import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
      className="contact-container"
    >
      <div className="contact-info">
        <h2>Contact us</h2>
        <span>Wholesale new business inquiries:</span>
        <p>wholesale@gmail.com</p>
        <span>Wholesale order inquiries:</span>
        <p>mad-store@gmail.com</p>
        <span>PR and marketing inquiries:</span>
        <p>marketing@gmail.com</p>
        <span>Webshop orders inquiries</span>
        <p>Check our FAQ or reach out to: webshop@gmail.com</p>
        <span>Our business details</span>
        <p>
          MAD STORE B.V. Herengracht 493 S3 1017 BT Amsterdam The Netherlands,
          Planet Earth
        </p>
      </div>
    </motion.div>
  );
}
