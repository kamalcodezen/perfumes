import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { CollectionItem } from "./collectionsData";
import { FaArrowRight } from "react-icons/fa6";

interface CollectionCardProps {
  collection: CollectionItem;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <motion.div
      // whileHover={{ y: -8 }}
      className="relative overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={collection.image}
        alt={collection.title}
        className="h-[170px] w-full object-cover"
      />

      {/* Button Overlay Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link to={collection.link}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="
              group/btn relative overflow-hidden
              border-2 border-white
              bg-transparent text-black
              font-semibold px-8 py-4 uppercase tracking-[0.25em] text-xs sm:text-sm
              shadow-xl flex items-center gap-3 cursor-pointer
              transition-colors duration-500 hover:text-white
            "
          >
            {/* Initial White Background (Only slides when hovering DIRECTLY on button) */}
            <span
              className="
                absolute inset-0 bg-perf-gold
                translate-x-0 group-hover/btn:translate-x-full
                transition-transform duration-500 ease-in-out z-0
              "
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-3">
              <span>{collection.title}</span>
              <FaArrowRight
                size={14}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
