import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home({ toggleTheme, theme }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-300">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="max-w-5xl mx-auto p-6">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
