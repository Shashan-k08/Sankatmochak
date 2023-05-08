import React, { useState, useEffect, useRef } from 'react';
import WOW from 'wowjs';

const Earthmore = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    new WOW().init();
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        let i = 0;
        const timer = setInterval(() => {
          if (i < 100) {
            setCount(i++);
          } else {
            clearInterval(timer);
          }
        }, 50);
      }
    }, { threshold: 0.5 });
    observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={countRef} className="wow fadeIn">
      <h1>Count: {count}</h1>
    </div>
  );
};

export default Earthmore
