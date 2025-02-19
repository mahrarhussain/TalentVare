import { Header, Main } from "./components";
import { motion, AnimatePresence } from "framer-motion";
import "./assets/css/style.css";

const App = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Header />
        <Main />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
