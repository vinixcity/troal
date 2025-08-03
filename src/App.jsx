import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Video Player</h1>
        <video controls className="w-full rounded-xl">
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default App;
