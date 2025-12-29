import React from "react";
import { X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsDetails = ({ title, description, link, pre, closeModel }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModel}
    >
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
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full overflow-hidden rounded-2xl
                   border border-white/10
                   bg-gradient-to-l from-blue-950 to-black/80 shadow-xl"
      >
        <button
          onClick={closeModel}
          className="absolute top-4 right-4 z-10
                     rounded-full bg-black/70 p-1
                     text-red-500 hover:scale-110 transition"
        >
          <X />
        </button>

        {pre ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={pre}
            className="w-full h-80 object-cover block"
          />
        ) : (
          <div className="w-full h-80 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">No Preview Available</span>
          </div>
        )}

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
