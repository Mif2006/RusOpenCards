import { motion } from "framer-motion";
import { useState } from "react";
import { Projects } from "../constants";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "540px",
    },
    collapsed: {
      width: "200px",
    },
  };
  return (
    <div className="bg-tranparent w-full h-full flex flex-col gap-12 items-center mb-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#FFD700]">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-200">Check out our latest works</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {Projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${project.src})`,
            }}
            transition={{ duration: 0.5 }}
            className="h-[500px] rounded-[20px] bg-cover bg-[20%]  cursor-pointer"
            animate={index != expandedIndex ? "collapsed" : "expanded"}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default OpenCards;
