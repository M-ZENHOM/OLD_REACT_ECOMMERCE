import { motion } from "framer-motion";
import React from "react";

export default function Ourstory() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, dealy: 0.4 }}
      className="ourStory"
    >
      <div className="text-story">
        <h2>How we make a difference?</h2>
        <p>
          We're on a mission to create a world without waste. Because waste is
          just a waste! Of time, money, resources and especially the
          environment...
        </p>
        <p>
          And just like you, we don’t want to add to the big pile of waste
          already collecting in the world oceans, forests, deserts and
          landfills...
        </p>
        <p>
          So, we make sure we reduce as much waste as possible, while making our
          you look good.
        </p>
        <p>
          We only use only recycled and biodegradable materials to make the high
          quality eyewear that allows you to…
        </p>
        <span>Look good for your planet.</span>
        <br />
        <button>Our Story</button>
      </div>
      <div className="story-box">
        <div className="sBox">
          <i className="bi bi-battery-charging"></i>
          <div className="text">
            <h2>Energy</h2>
            <p>
              We save 924kwh of energy per 1000 frames* produced, which is the
              same as…
            </p>
          </div>
        </div>
        <div className="sBox">
          <i className="bi bi-ev-front-fill"></i>
          <div className="text">
            <h2>CO2</h2>
            <p>
              We save 263kg of CO2 emission per 1000 frames* produced, which is
              the same as…
            </p>
          </div>
        </div>
        <div className="sBox">
          <i className="bi bi-droplet-half"></i>
          <div className="text">
            <h2>Water</h2>
            <p>
              We save 5000 liter of water per 1000 frames* produced, which is
              the same as… * compared to the industry average
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
