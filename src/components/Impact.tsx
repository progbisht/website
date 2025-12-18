import ImpactPathways from "./ImpactPathways";

export const Impact = () => {
  return (
    <div className="bg-black text-white  bg-gradient-to-b from-black via-[#5D2CA8] to-black py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Transform Your Business
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Partner with us to unlock exponential growth, streamline operations,
            and gain a competitive edge through innovative technology solutions
            tailored to your unique challenges.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 px-24 py-[72px] sm:py-24  ">
          <ImpactPathways />
        </div>
      </div>
    </div>
  );
};
