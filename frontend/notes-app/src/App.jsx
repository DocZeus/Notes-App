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
          <div className="relative w-9 h-3 bg-gray-200 rounded-full peer peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Home isDarkMode={isDarkMode} />} />
          <Route path='/login' element={<Login isDarkMode={isDarkMode} />} />
          <Route path='/signup' element={<SignUp isDarkMode={isDarkMode} />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;