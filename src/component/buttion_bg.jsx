import React, { useState } from "react";
import { motion } from "framer-motion";
import ButtionList from "./buttion_list_animation";

const BackgroundToggle = () => {
  const [showBackground, setShowBackground] = useState(false);

  const toggleBackground = () => {
    setShowBackground(!showBackground);
  };

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <button
        onClick={toggleBackground}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          zIndex: 1,
        }}
      >
        Toggle Background
      </button>
      <motion.div
        initial={{ clipPath: "circle(0px at 0% 0%)" }}
        animate={{
          clipPath: showBackground
            ? "circle(2000px at 0% 0%)"
            : "circle(0px at 0% 0%)",
        }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      >
        <ButtionList />
      </motion.div>
    </div>
  );
};

export default BackgroundToggle;
