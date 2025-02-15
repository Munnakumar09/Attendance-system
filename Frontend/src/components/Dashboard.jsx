import React, { useState } from 'react';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className={`min-w-[320px] font-sans ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <nav className={`flex justify-between items-center flex-wrap gap-2.5 shadow-md w-full p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-[50px] h-[50px] rounded-full border-3 relative overflow-hidden ${isDarkMode ? 'border-white' : 'border-purple-700'}`}>
            <div className={`w-1 h-1 absolute rounded-full top-[35%] left-[25%] ${isDarkMode ? 'bg-white' : 'bg-purple-700'}`}></div>
            <div className={`w-1 h-1 absolute rounded-full top-[35%] right-[25%] ${isDarkMode ? 'bg-white' : 'bg-purple-700'}`}></div>
            <div className={`absolute top-1/2 left-1/2 text-xl font-bold rotate-90 ${isDarkMode ? 'text-white' : 'text-purple-700'}`}>)</div>
            <div className="absolute inset-0 flex justify-center"></div>
          </div>
          <h1 className="text-[clamp(20px,4vw,32px)] text-purple-700 m-0">AI Attendance System</h1>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <button onClick={toggleTheme} className="bg-transparent border-none cursor-pointer text-[clamp(14px,2.5vw,18px)] flex items-center gap-1.5 p-1">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-[clamp(20px,3vw,28px)] w-[clamp(20px,3vw,28px)]" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </svg>
          </button>
          <button className="bg-purple-700 text-white px-3 py-1.5 rounded-lg font-medium text-[clamp(14px,3vw,18px)] border-none cursor-pointer whitespace-nowrap hover:bg-purple-500">Register</button>
          <button className="bg-purple-700 text-white px-3 py-1.5 rounded-lg font-medium text-[clamp(14px,3vw,18px)] border-none cursor-pointer whitespace-nowrap hover:bg-purple-500">Login</button>
        </div>
      </nav>

      <main className="flex items-center justify-between p-5 max-w-[1200px] mx-auto flex-wrap gap-8">
        <div className="flex-1 basis-[280px] min-w-[280px] pr-4">
          <h1 className="text-[clamp(28px,5vw,64px)] leading-tight mb-5 font-semibold">We make attendance tracking smart!</h1>
          <p className="text-[clamp(14px,2vw,18px)] leading-relaxed text-gray-700 mb-6 max-w-[500px]">
            Transform your attendance management with AI-powered facial recognition. Save time, increase accuracy,
            and streamline your organization's attendance process with our cutting-edge system.
          </p>
          <a href="#" className="inline-block bg-purple-700 text-gray-100 px-[clamp(20px,3vw,32px)] py-[clamp(10px,1.5vw,16px)] rounded-3xl font-medium text-[clamp(14px,2vw,18px)] shadow-md hover:bg-purple-500">Get Started</a>
        </div>

        <div className="flex-1 basis-[280px] min-w-[280px] flex justify-center bg-purple-300 rounded-2xl p-4">
          <div className="w-full max-w-[400px] relative bg-white rounded-lg p-4 shadow-lg">
            <img src="/api/placeholder/500/800" alt="AI Attendance System Interface" className="w-full h-auto rounded-lg object-cover" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;