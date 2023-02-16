import Slider from "../Slider";
import img1 from "../../imgs/bg-two.jpg";
import { motion } from "framer-motion";
import { FaqData } from "../FaqData";
export default function FAQ() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", duration: 0.75, ease: "easeOut" }}
      className="faq-container"
    >
      <Slider
        img={img1}
        toBtn="/shop"
        btnTitle="Shop"
        description="Ho Back to our shop"
      />
      <div className="faq">
        <h2>Frequently asked questions</h2>
        {FaqData.map((faq) => (
          <div className="frq" key={faq.id}>
            <h3>{faq.title}</h3>
            <span>{faq.Question}</span>
            <p>{faq.Answer}</p>
            <span>{faq.QuestionTwo}</span>
            <p>{faq.AnswerTwo}</p>
            <span>{faq.QuestionThree}</span>
            <p>{faq.AnswerThree}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
