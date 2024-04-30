"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  title: string;
  data: string[];
  icon?: string;
  description: string;
};
const FivePillarsCard = ({ title, data, icon, description }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-1/3 h-44 p-1 flex justify-center items-center">
      <div className="relative w-full h-full" onClick={handleFlip}>
        <AnimatePresence>
          {isFlipped ? (
            <motion.div
              key="back"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 180 }}
              transition={{ duration: 0.5 }}
              className="absolute bg-blue-600 p-6 rounded-lg shadow-md text-white w-full h-full flex flex-col justify-between"
              style={{ transformOrigin: 'center' }}
            >
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm">{description}</p>
              <p className="text-xs italic text-gray-300">Click to flip</p> {/* Note added here */}
            </motion.div>
          ) : (
            <motion.div
              key="front"
              initial={{ opacity: 0, rotateY: 0 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.5 }}
              className="absolute bg-green-600 p-6 rounded-lg shadow-md text-white w-full h-full flex flex-col justify-between"
              style={{ transformOrigin: 'center' }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">{title}</h2>
                {icon && (
                  <img src={icon} alt={`${title} icon`} className="h-12 w-12" />
                )}
              </div>
              <ul className="mt-4">
                {data.map((item, index) => (
                  <li key={index} className="text-sm mt-2">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-gray-300">Click to flip</p> {/* Note added here */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FivePillarsCard;
