import React, { useEffect } from 'react';
import './ParticleBackground.css'; // Import CSS for styling

const ParticleBackground = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;
        script.onload = () => {
          // Initialize Particle.js after the script has loaded
          window.particlesJS('particles-container', {
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 1,
              },
              fps_limit: 60,
              color: {
                value: '#FF8F00', // Set the particle color to red
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
              },
              line_linked: {
                enable: true,
                distance: 150, // Adjust the distance between particles
                color: '#FF8F00', // Set the line color to green
                opacity: 0.5, // Set the line opacity
                width: 1, // Set the line width
              },
            },
            // Add more configuration options as needed
          });
        };
        document.body.appendChild(script);
      
        return () => {
          // Cleanup if needed
          document.body.removeChild(script);
        };
      }, []);
      

  return (
    <div id="particles-container" className="particles"></div>
  );
};

export default ParticleBackground;
