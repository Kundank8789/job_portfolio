import { useEffect, useState } from 'react';

export default function FloatingParticles({ theme }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  const particleColor = theme === 'dark' 
    ? 'from-purple-500/30 to-pink-500/30'
    : 'from-purple-400/20 to-pink-400/20';

  return (
    <div className="fixed inset-0 pointer-events-none -z-5">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full bg-gradient-to-r ${particleColor}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s infinite ease-in-out`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(10px) translateX(-15px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-10px) translateX(15px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}