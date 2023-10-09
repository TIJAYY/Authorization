import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const welcomeText = "Welcome.";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const revealWelcome = (index) => {
      if (index <= welcomeText.length) {
        setDisplayText(welcomeText.slice(0, index));
        setTimeout(() => {
          revealWelcome(index + 1);
        }, 150); // Adjust the timing as needed
      }
    };

    revealWelcome(0);
  }, []);

  return (
    <div className="welcome">{displayText}</div>
  );
};

export default HomePage;
