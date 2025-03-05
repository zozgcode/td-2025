'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative border flex items-center justify-between bg-white px-[15px] py-3">
      <Image src="https://i.imgur.com/FUCIqQD.png" width={230} height={28} className="w-[200px]" alt="logo" />
      <span className="text-base font-semibold text-[#008a00]">Log In</span>
    </div>
  );
}
