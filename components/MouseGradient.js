import { useEffect, useState } from 'react';

export default function MouseGradient({ children, theme }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Different gradients for light/dark mode
  const getGradientColors = () => {
    if (theme === 'dark') {
      return {
        base: 'rgba(0, 0, 0, 0.95)',
        colors: [
          'rgba(139, 92, 246, 0.15)',  // purple
          'rgba(59, 130, 246, 0.1)',   // blue
          'rgba(236, 72, 153, 0.08)',  // pink
        ]
      };
    } else {
      return {
        base: 'rgba(255, 255, 255, 0.98)',
        colors: [
          'rgba(139, 92, 246, 0.08)',  // purple (lighter)
          'rgba(59, 130, 246, 0.05)',   // blue (lighter)
          'rgba(236, 72, 153, 0.04)',  // pink (lighter)
        ]
      };
    }
  };

  const gradient = getGradientColors();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="fixed inset-0 -z-10 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            ${gradient.colors[0]} 0%,
            ${gradient.colors[1]} 25%,
            ${gradient.colors[2]} 50%,
            ${gradient.base} 80%
          )`,
        }}
      />
      
      {/* Subtle noise texture - lighter for light mode */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          opacity: theme === 'dark' ? 0.3 : 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {children}
    </div>
  );
}