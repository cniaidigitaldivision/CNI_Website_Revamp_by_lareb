import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#061B2B] text-slate-100 font-sans-clean flex flex-col relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
