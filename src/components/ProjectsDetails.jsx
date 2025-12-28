import React from "react";
import { X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsDetails = ({
  title,
  description,
  link,
  thumbnail,
  closeModel,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModel}   // 👈 click outside closes modal
    >
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
          mass: 0.6,
        }}
        onClick={(e) => e.stopPropagation()} // 👈 prevent inside click
        className="relative max-w-2xl w-full overflow-hidden rounded-2xl
                   border border-white/10
                   bg-gradient-to-l from-blue-950 to-black/80 shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={closeModel}
          className="absolute top-4 right-4 z-10
                     rounded-full bg-black/70 p-1
                     text-red-500 hover:scale-110 transition"
        >
          <X />
        </button>

        {/* Image */}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-60 object-cover block"
        />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-gray-300">{description}</p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex justify-end items-center gap-2
                       text-white font-medium hover:underline"
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsDetails;
