// src/components/Loader.jsx
import { useState, useEffect } from 'react';

const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Will complete in 800ms (100% / 10 intervals * 80ms)
      });
    }, 80); // Update every 80ms
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      {/* F1 track background element */}
      <div className="relative w-full max-w-md h-2 mb-8">
        <div className="absolute inset-0 bg-base-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-75 ease-linear"
               style={{ width: `${loadingProgress}%` }}></div>
        </div>
        {/* Track lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-warning transform -translate-y-1/2 opacity-50"></div>
      </div>

      {/* Daisy UI Spinner with F1 theme - Circular */}
      <div className="relative mb-8">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>

      {/* F1 themed text */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-base-content mb-2">
          <span className="text-primary">TU Sofia</span> Racing
        </h1>
        <p className="text-base-content opacity-70 mb-4">Loading race data...</p>
        
        {/* Progress indicator */}
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-base-content opacity-50">{loadingProgress}%</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-75 ${
                  i < Math.floor(loadingProgress / 20) 
                    ? 'bg-success' 
                    : 'bg-base-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* F1 flag pattern decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-20">
        <div className="flex">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 ${i % 2 === 0 ? 'bg-base-content' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;