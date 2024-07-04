import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../store/reducers/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg md:grid-cols-5 grid-cols-1 gap-4'>
            <div className='flex items-center justify-between md:justify-start col-span-1'>
                <img 
                    className='h-12 cursor-pointer' 
                    onClick={toggleMenuHandler} 
                    alt='menu' 
                    src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' 
                />
                <a href='/' className='ml-2 md:ml-4'>
                    <img 
                        className='h-12' 
                        alt='logo' 
                        src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' 
                    />
                </a>
            </div>
            <div className='col-span-1 md:col-span-2 flex justify-center'>
                <input 
                    className='w-full md:w-1/2  xl:w-4/5 border border-gray-500 rounded-l-full p-2' 
                    type='text' 
                />
                <button className='border border-gray-500 bg-gray-100 rounded-r-full p-2'>
                    🔍
                </button>
            </div>
            <div className='flex justify-end items-center col-span-2 space-x-4 md:col-span-2'>
                <button className='border border-gray-500 bg-gray-100 rounded-full p-2 hidden md:block'>
                    <img
                        className='h-6'
                        alt='microphone' 
                        src='https://img.icons8.com/material-rounded/24/000000/microphone.png' 
                    />
                </button>
                <button className='border border-gray-500 bg-gray-100 rounded-full p-2 hidden md:block'>
                    <img
                        className='h-6'
                        alt='create' 
                        src='https://img.icons8.com/material-rounded/24/000000/create-new--v1.png' 
                    />
                </button>
                <button className='border border-gray-500 bg-gray-100 rounded-full p-2 hidden md:block'>
                    <img
                        className='h-6'
                        alt='notification' 
                        src='https://img.icons8.com/material-rounded/24/000000/appointment-reminders.png' 
                    />
                </button>
                <img
                    className='h-12'
                    alt='icon' 
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' 
                />
            </div>
        </div>
    );
};

export default Head;
