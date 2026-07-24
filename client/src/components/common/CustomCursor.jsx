import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Primary Kinetic Pointer Dot */}
      <div
        className="custom-cursor fixed top-0 left-0 w-3 h-3 bg-copper rounded-full pointer-events-none z-[9999] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 2.5 : 1})`,
        }}
      />
      {/* Outer Halo */}
      <div
        className="custom-cursor fixed top-0 left-0 w-10 h-10 border border-copper/40 rounded-full pointer-events-none z-[9998] transition-transform duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 1.8 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
