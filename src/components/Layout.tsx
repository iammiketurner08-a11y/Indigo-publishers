import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
