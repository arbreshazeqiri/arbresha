import { useEffect, useState } from "react";

function RandomDot({ color }: { color: string }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updatePosition = () => {
      setVisible(false);
      setTimeout(() => {
        const top = Math.random() * 90;
        const left = Math.random() * 90;
        setPosition({ top, left });
        setVisible(true);
      }, 1000);
    };

    updatePosition();
    const interval = setInterval(updatePosition, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute w-2 h-2 ${color} rounded-full transition-opacity duration-1000`}
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}

export default function PulsingDots() {
  return (
    <div className="absolute inset-0">
      <RandomDot color="bg-primary" />
      <RandomDot color="bg-art-purple" />
      <RandomDot color="bg-valorant-red" />
      <RandomDot color="bg-accent-glow" />
    </div>
  );
}
