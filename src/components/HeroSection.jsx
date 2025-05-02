import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [activeService, setActiveService] = useState('Digital Transformation');
  
  const services = [
    'Digital Transformation',
    'Cloud Solutions',
    'Blockchain',
    'Big Data'
  ];

  const rotateWheel = () => {
    const newRotation = rotation + 90;
    setRotation(newRotation);
    
    // Determine which service is active based on rotation
    const index = (newRotation / 90) % 4;
    setActiveService(services[index]);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Transformation awaits you</h1>
        <p className="text-xl mb-10">Spin to achieve the incogitable</p>
        
        <div className="relative w-64 h-64 mx-auto mb-10">
          {/* Wheel */}
          <div 
            className="absolute inset-0 rounded-full border-8 border-blue-400 transition-transform duration-1000"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {[0, 90, 180, 270].map((angle, index) => (
              <div 
                key={index}
                className="absolute w-1/2 h-1/2 origin-bottom-right"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className={`absolute bottom-0 right-0 w-full h-full ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'} rounded-tr-full`}></div>
              </div>
            ))}
          </div>
          
          {/* Center Button */}
          <button 
            onClick={rotateWheel}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              Spin
            </div>
          </button>
        </div>
        
        {/* Active Service Display */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">{activeService}</h2>
          <p className="max-w-2xl mx-auto">
            {activeService === 'Digital Transformation' && 'Innovative and resilient solutions that transform businesses'}
            {activeService === 'Cloud Solutions' && 'On-demand scalable solutions breathing new life into legacy systems'}
            {activeService === 'Blockchain' && 'Innovative applications for this limitless technology'}
            {activeService === 'Big Data' && 'Make data work for you more efficiently & profitably'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;