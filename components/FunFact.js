import { useState } from 'react';

const funFacts = [
  "🐍 I debug better with music at 2am",
  "☕ My code works first time... in my head",
  "🎮 I've spent more time customizing VS Code than coding",
  "🚀 My commits: 'fixed bug' (actually rewrote everything)",
  "💡 The best code is the code I deleted",
  "🎯 99% of my bugs are typos. The other 1% is also typos",
  "🌙 Dark mode isn't a preference, it's a lifestyle",
  "🔥 Stack Overflow is my second home",
];

export default function FunFact({ theme }) {
  const [fact, setFact] = useState(funFacts[0]);
  const [isHovering, setIsHovering] = useState(false);

  const getRandomFact = () => {
    let newFact;
    do {
      newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    } while (newFact === fact);
    setFact(newFact);
  };

  const bgColor = theme === 'dark' 
    ? 'bg-black/60 backdrop-blur-md border-white/10'
    : 'bg-white/70 backdrop-blur-md border-black/10 shadow-lg';

  const textColor = theme === 'dark' ? 'text-white/90' : 'text-gray-800';
  const subTextColor = theme === 'dark' ? 'text-white/40' : 'text-gray-500';

  return (
    <div 
      className={`fixed bottom-6 right-6 max-w-xs z-20 cursor-pointer group transition-all duration-300 hover:scale-105 ${isHovering ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={getRandomFact}
    >
      <div className={`rounded-2xl p-4 border ${bgColor} transition-all duration-300`}>
        <div className="flex items-start gap-2">
          <span className="text-2xl animate-bounce">🤔</span>
          <div className="flex-1">
            <p className="text-xs text-purple-500 dark:text-purple-400 mb-1 font-mono font-semibold">
              fun fact {isHovering ? '✨' : '💡'}
            </p>
            <p className={`${textColor} text-sm leading-relaxed`}>{fact}</p>
            <p className={`text-[10px] ${subTextColor} mt-2 font-mono transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-60'}`}>
              {isHovering ? "click for another →" : "hover + click me"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}