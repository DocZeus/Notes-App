import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleThemeMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    document.body.classList.toggle('dark', updatedDarkMode);
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="fixed top-20 right-4 z-50">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked={isDarkMode} onChange={toggleThemeMode} />
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </label>
      </div>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Home isDarkMode={isDarkMode} />} />
          <Route path='/login' element={<Login isDarkMode={isDarkMode} />} />
          <Route path='/signup' element={<SignUp isDarkMode={isDarkMode} />} />
          <Route path='/' element={<SignUp isDarkMode={isDarkMode} />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;