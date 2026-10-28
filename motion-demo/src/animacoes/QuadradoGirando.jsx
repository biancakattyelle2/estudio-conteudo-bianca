import { motion } from "motion/react"

export default function QuadradoGirando() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, rotate: 360 }}
      transition={{ duration: 1.2 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      style={{ width: 120, height: 120, borderRadius: 24, background: "#7c3aed" }}
    />
  )
}
