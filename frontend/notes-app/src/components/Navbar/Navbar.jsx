import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import PasswordInput from '../Input/PasswordInput';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    console.log('Current location:', location.pathname);

    const onLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery)
        }
    }

    const onClearSearch = () => {
        setSearchQuery('')
        handleClearSearch()
    }

    if (location.pathname === '/login' || location.pathname === '/SignUp') {
        return null;
    }

    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
            <h2 className='text-xl font-medium text-black py-2'>Notes</h2>

            <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
    )
}

export default Navbar