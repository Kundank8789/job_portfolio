// pages/index.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import StructuredData from "../components/StructuredData";

export default function Home({ toggleTheme, theme }) {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-300">
        <Navbar toggleTheme={toggleTheme} theme={theme} />

        <main className="max-w-5xl mx-auto p-6">
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
