"use client";
import { AnimatedGradientTextDemo } from "./animatedtext";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] min-h-[80vh] flex items-center relative overflow-clip py-12 sm:py-0">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative px-4">
        <div className="flex items-center justify-center">
          <AnimatedGradientTextDemo />
        </div>
        <div className="flex justify-center mt-6 sm:mt-8">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tightner text-center leading-tight">
            Engineering Your <br /> Digital Future
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-base sm:text-lg md:text-xl text-center mt-6 sm:mt-8 max-w-2xl text-white/80 px-4">
            Empowering businesses through innovative technology solutions,
            expert talent, and digital transformation strategies that drive
            measurable results.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-8 gap-3 sm:gap-4 px-4">
          <button className="bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-white/90 transition-colors w-full sm:w-auto">
            Get Started
          </button>
          <button className="border border-white/30 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};
