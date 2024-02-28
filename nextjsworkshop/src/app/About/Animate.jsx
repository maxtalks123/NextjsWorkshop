"use client";
import { motion } from "framer-motion";

export default function Animate({ children }) {
  return (
    <motion.div
      initial={{ translateX: -180 }}
      animate={{ translateX: 180 }}
      transition={{ duration: 5 }}
    >
      {children}
    </motion.div>
  );
}
