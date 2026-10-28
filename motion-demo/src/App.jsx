import { motion } from "motion/react"
import { QuadradoGirando, slideUp } from "./animacoes"

export default function App() {
  return (
    <div style={{ display: "grid", placeItems: "center", gap: 32, height: "100vh", alignContent: "center" }}>
      <motion.h1 variants={slideUp} initial="hidden" animate="visible">
        Minhas animações
      </motion.h1>
      <QuadradoGirando />
    </div>
  )
}
