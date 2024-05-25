import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';


const PasswordInput = ({ value, onChange, placeholder, isLoginPage }) => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [strength, setStrength] = useState(0);
    const [feedback, setFeedback] = useState('');
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const calculateStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[\W_]/.test(password)) strength++;
        return strength;
    };

    const handleChange = (e) => {
        const newPassword = e.target.value;
        onChange(e);
        const newStrength = calculateStrength(newPassword);
        setStrength(newStrength);
        switch (newStrength) {
            case 0:
            case 1:
                setFeedback('Very Weak');
                break;
            case 2:
                setFeedback('Weak');
                break;
            case 3:
                setFeedback('Moderate');
                break;
            case 4:
                setFeedback('Strong');
                break;
            case 5:
                setFeedback('Very Strong');
                break;
            default:
                setFeedback('');
                break;
        }
    }

    const strengthColor = () => {
        switch (strength) {
            case 0:
            case 1:
                return 'bg-red-500';
            case 2:
                return 'bg-orange-500';
            case 3:
                return 'bg-yellow-500';
            case 4:
                return 'bg-green-500';
            case 5:
                return 'bg-blue-500';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <div>
            <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
                <input
                    value={value}
                    onChange={handleChange}
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder={placeholder || 'Password'}
                    className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
                />
                {value && value.length > 0 && (
                    <>
                        {isShowPassword ?
                            <FaRegEye
                                size={22}
                                className='text-primary cursor-pointer'
                                onClick={() => toggleShowPassword()}
                            /> :
                            <FaRegEyeSlash
                                size={22}
                                className='text-slate-400 cursor-pointer'
                                onClick={() => toggleShowPassword()}
                            />}
                    </>
                )}
            </div>
            {value && value.length > 0 && !isLoginPage && (
                <div className='flex items-center mt-2'>
                    <div className={`w-24 h-2 rounded ${strengthColor()}`}></div>
                    <span className='ml-2 text-sm'>{feedback}</span>
                </div>
            )}
        </div>
    )
}

export default PasswordInput