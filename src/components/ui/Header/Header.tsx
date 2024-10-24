import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mx-auto px-6 w-11/12 max-w-3xl sticky top-12 bg-[rgba(243,240,240,0.1)] rounded-full shadow-xl backdrop-blur-md border border-white/[.2] text-white">
      <div className="flex justify-between items-center h-14 w-full">
        <h1 className="font-bold">KAMABOKO</h1>
        <div>kamaboko / index</div>
      </div>
    </header>
  );
};

export default Header;
