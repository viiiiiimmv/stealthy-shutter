import React from 'react';

export default function Closure() {
  return (
    <div className="min-h-screen bg-[linear-gradient(45deg,#181818,#101010)] p-8">
      
      <div className="min-h-screen flex flex-col items-center text-center">
        
        <div className="flex flex-col items-center justify-center flex-grow space-y-16">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-galant text-white tracking-wide">
            Elsewhere
          </h1>

          <div className="space-y-4 font-space-grotesk">
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
              Portfolio
            </h2>
            <a
              href="https://shivchauhan835.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base"
            >
              https://shivchauhan835.netlify.app
            </a>
          </div>

          <div className="space-y-4 font-space-grotesk">
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
              Instagram
            </h2>
            <a
              href="https://instagram.com/stealthy.shutter"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base"
            >
              https://instagram.com/stealthy.shutter
            </a>
          </div>
        </div>

        <div className="text-gray-400 text-xs md:text-sm space-y-1 font-space-grotesk pb-6">
          <p>© 2025 Shiv Chauhan.</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}
