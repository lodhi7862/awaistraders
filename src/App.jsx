import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CeoMessage from './components/CeoMessage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <CeoMessage />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
