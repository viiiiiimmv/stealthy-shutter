import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <div className="space-y-1.5">
          <div className="w-12 h-0.5 bg-white"></div>
          <div className="w-12 h-0.5 bg-white"></div>
        </div>
      </div>

      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-20">
        <div className="writing-mode-vertical transform -rotate-180">
          <span className="font-montserrat text-sm md:text-base tracking-[0.3em] font-light uppercase">
            SHIV CHAUHAN
          </span>
        </div>
      </div>

      <div className="absolute left-8 md:left-12 bottom-12 md:bottom-16 z-20">
        <div className="writing-mode-vertical transform -rotate-180">
          <span className="font-montserrat text-sm md:text-base tracking-widest font-light">
            0835
          </span>
        </div>
      </div>

      <div className="absolute left-18 md:left-22 top-1/4 bottom-12 w-px bg-white/30 z-10"></div>

      <div className="relative min-h-screen flex items-center justify-between px-8 md:px-16 lg:px-24">
        <div className="relative z-10 flex-1 max-w-3xl translate-x-12 md:translate-x-12 lg:translate-x-40">
          <div className="relative">
            <div className="font-ibm-plex-sans text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold leading-none opacity-20 select-none">
              08
            </div>
            
            <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-20">
              <div className="font-space-grotesk max-w-md space-y-6">
                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                  I'm Shiv. I take photos when<br />
                  moments feel interesting,<br />
                  nothing more than that.
                </p>
                <p className="text-lg md:text-xl font-light opacity-80">
                  @stealthy.shutter
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 shrink-0 ml-8">
          <div className="w-72 h-112 md:w-104 md:h-152 lg:w-lg lg:h-176 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-full bg-cover bg-center" 
                   style={{
                     backgroundImage: `url('https://res.cloudinary.com/ddyc6aljm/image/upload/v1765987544/hero-me_rdvkuh.png')`,
                   }}>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}