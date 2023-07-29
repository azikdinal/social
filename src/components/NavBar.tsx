import React from 'react';
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <header className='bg-gray-600 h-[70px] flex items-center'>
            <div className='flex mr-[200px] ml-[200px]'>
                <div className='mr-10 flex items-center'>
                    <img src={logo} alt="" className='w-[100px] '/>
                </div>
                <div>
                    <input placeholder="Search" type="text" className='h-8'/>
                </div>
            </div>
        </header>
    );
};

export default NavBar;