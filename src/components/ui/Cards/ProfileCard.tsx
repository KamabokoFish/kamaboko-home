import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <article className="flex flex-row justify-normal gap-6 w-full rounded-md bg-slate-400 text-white py-4 px-6 shadow-xl duration-200 hover:shadow-none">
      <div className="flex flex-col  justify-center items-center gap-2">
        <Image className="rounded-full" src={`/profile_icon.jpg`} width={80} height={80} alt="profile icon image" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-medium text-sm">KAMABOKO</h2>
          <small>かまぼこ</small>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 text-sm sm:gap-3">
        <p className="underline">Frontend Dev.</p>
        <p className="sm:text-base">
          フロントエンドを書いたり、あれこれデザインを見たり考えたりするのが好きです。料理と美術館巡り(特に現代美術)も好き。
        </p>
        <Link className="font-bold" href={'/about'}>
          Read More→
        </Link>
      </div>
    </article>
  );
};

export default ProfileCard;
