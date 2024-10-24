import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContentsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-12 ">
      <Link
        href={'/'}
        className="p-3 sm:p-6 aspect-square rounded-lg shadow-2xl relative text-white bg-gradient-to-br from-purple-400 to-amber-100  "
      >
        <h3 className="text-xl sm:text-4xl font-medium ">Blog</h3>
        <small className="text-sm ">日々のことなど</small>
        <img
          alt="cat foot stamp"
          src={'/neko-stamp-white.png'}
          className="absolute bottom-0 right-0 aspect-auto z-0 w-6/12"
        />
      </Link>
      <Link
        href={'/'}
        className="p-3 sm:p-6 aspect-square rounded-lg shadow-2xl relative text-white bg-gradient-to-br from-teal-500 to-amber-100  "
      >
        <h3 className="text-xl sm:text-4xl font-medium ">Works</h3>
        <small className="text-sm ">趣味で作ったもの</small>
        <img
          alt="cat foot stamp"
          src={'/neko-stamp-white.png'}
          className="absolute bottom-0 right-0 aspect-auto z-0 w-6/12"
        />
      </Link>
    </div>
  );
};

export default ContentsCards;
