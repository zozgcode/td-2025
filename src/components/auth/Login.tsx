'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="relative h-screen">
      <Header />
      <div className="p-5 py-3 min-h-[60px] border-y border-y-[#008a00] text-black flex items-center gap-2">
        <Image src="https://i.imgur.com/pV1UAOf.png" width={36} height={32} className="w-[36] h-[32px]" alt="logo" />
        <Image src="https://i.imgur.com/bHc70iS.png" width={38} height={15} className="w-[38] h-[15px]" alt="logo" />
        <p className="text-xs leading-3">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</p>
      </div>
      <h1 className='px-5 py-4 text-[26px] text-[#1a5336] font-[500]'>Welcome to Online Banking</h1>
      <div className="bg-[white] px-4">
        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 py-5">
              <div className="flex flex-col gap-3">
                {/* <label htmlFor="Username" className="text-[#000000] font-[600] text-[16px]">
                  User ID
                </label> */}
                <input
                  type="text"
                  value={username}
                  placeholder="User name"
                  className="p-4 rounded text-[#000000] bg-transparent border border-gray-400 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* <label htmlFor="password" className="text-[#000000] font-[600] text-[16px]">
                  Password
                </label> */}
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="p-4 rounded text-[#000000] bg-transparent border border-gray-400 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
                <button type="submit" className="p-4 bg-[#008a00] w-full text-white font-semibold rounded-md">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] absolute bottom-0 z-50 flex flex-col gap-4 bg-white px-[10px] p-[20px]">
        <p className="text-sm text-[#22262A] text-left">
          Registered Investment Advisory, Securities and Brokerage services are offered through TD Private Client Wealth, LLC, member FINRA/SIPC. TD Private Client Wealth, LLC and TD Bank, N.A. are
          affiliated through their parent company the Toronto-Dominion Bank. TD Wealth is a trademark owned by the Toronto-Dominion Bank, used with permission.
        </p>
        <p className="text-sm text-[#22262A] text-left">© 2025 TD Bank, N.A. All Rights Reserved</p>
      </div>
    </div>
  );
}
