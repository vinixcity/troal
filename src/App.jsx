// src/App.jsx
import React, { useRef } from 'react';

const App = () => {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className="w-screen h-screen bg-black flex items-center justify-center"
      onClick={handleClick}
    >
      <img
        src="/cover.jpg"
        alt="Click to play audio"
        className="w-full h-full object-cover cursor-pointer"
      />
      <audio ref={audioRef} src="/background-audio.mp3" />
    </div>
  );
};

export default App;
