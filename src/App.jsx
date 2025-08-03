// src/App.jsx
import React, { useRef, useEffect } from 'react';

const App = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const handlePlay = () => {
      if (videoRef.current && audioRef.current) {
        videoRef.current.muted = true; // keep video silent
        videoRef.current.play();
        audioRef.current.play();
      }
    };

    // Auto-play when user clicks anywhere (due to browser policies)
    window.addEventListener('click', handlePlay);

    return () => {
      window.removeEventListener('click', handlePlay);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Video + Audio Sync</h1>

        <video
          ref={videoRef}
          src="/sample-video.mp4"
          loop
          className="w-full rounded-xl mb-4"
          playsInline
        />

        {/* Hidden audio element */}
        <audio ref={audioRef} src="/background-audio.mp3" loop />
      </div>
    </div>
  );
};

export default App;
