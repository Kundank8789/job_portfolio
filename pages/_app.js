import "../styles/globals.css";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kundan Kumar - Full Stack Developer | MERN Stack & Next.js Portfolio</title>
        <meta name="title" content="Kundan Kumar - Full Stack Developer | MERN Stack & Next.js" />
        <meta 
          name="description" 
          content="Full Stack Developer specializing in MERN stack, Next.js, and AI integration. Built Grocery Delivery Platform, AI Fitness Tracker, and more. Open to full-time opportunities." 
        />
        <meta name="keywords" content="Full Stack Developer, MERN Stack, Next.js, React Developer, Node.js, MongoDB, TypeScript, Web Developer Portfolio, JavaScript Developer, Kundan Kumar" />
        <meta name="author" content="Kundan Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://job-portfolio-dusky.vercel.app/" />
        <meta property="og:title" content="Kundan Kumar - Full Stack Developer | MERN Stack & Next.js" />
        <meta 
          property="og:description" 
          content="Full Stack Developer specializing in MERN stack, Next.js, and AI integration. View my portfolio of real-world projects." 
        />
        <meta property="og:image" content="https://job-portfolio-dusky.vercel.app/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://job-portfolio-dusky.vercel.app/" />
        <meta property="twitter:title" content="Kundan Kumar - Full Stack Developer | MERN Stack & Next.js" />
        <meta 
          property="twitter:description" 
          content="Full Stack Developer specializing in MERN stack, Next.js, and AI integration. View my portfolio of real-world projects." 
        />
        <meta property="twitter:image" content="https://job-portfolio-dusky.vercel.app/og-image.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://job-portfolio-dusky.vercel.app/" />
      </Head>

      {/* ✅ Pass theme toggle function to all components */}
      <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
    </>
  );
}