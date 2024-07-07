import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
const items = ["Home", "About", "Servdwdwdwdwdwdwdwices", "Contact"];
function ButtionList() {
  const [active, setActive] = useState(0);

  return (
    <nav>
    <ul className="flex flex-row justify-center items-center mt-20 gap-5 relative list-none">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative cursor-pointer pb-10 px-5"
          onClick={() => setActive(index)}
        >
          {item}
          {active === index && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
              layoutId="border"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </li>
      ))}
    </ul>
  </nav>
  );
}

export default ButtionList;
