import React from 'react';

const BackgroundSection = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C0C] via-[#120F0F] to-[#0D0C0C]" />

      {/* Diagonal Gold Lines */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
        repeating-linear-gradient(
          -45deg,
          transparent 0px,
          transparent 140px,
          rgba(210,175,52,0.8) 140px,
          rgba(210,175,52,0.8) 142px
        )

        
      `,
        }}
      />

      {/* Extra Thin Accent Lines (زي اللي على اليمين في الصورة) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
        linear-gradient(
          to bottom,
          transparent 0%,
          rgba(210,175,52,0.7) 50%,
          transparent 100%
        )
      `,
          backgroundSize: '1px 100%',
          backgroundPosition: '85% 0',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Soft Gold Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#D2AF34] opacity-5 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#D2AF34] opacity-5 blur-3xl rounded-full" />
      </div>
    </div>
  );
};

export default BackgroundSection;
