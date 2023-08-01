import React from 'react';
import profile from "../../../assets/profile.jpg";
import Button from "../../../components/UI/Button";
import cover from '../../../assets/cover.jpg'

const Cover = () => {
    return (
        <div className='relative'>
            <div className='h-[350px] w-[916px] border-2 rounded-xl overflow-hidden relative'>
                <div className='absolute'>
                    <img src={cover} alt="cover"/>
                </div>
                <div className='absolute bg-gray-700 h-[40%] w-full bottom-0 rounded-[15px_15px_0_0]'/>
            </div>
            <span className="ml-10 absolute bottom-4 ">
                    <img src={profile} alt="profile-photo" className="h-[150px] w-auto rounded-full"/>
            </span>
            <span className='left-[200px] bottom-16 text-white text-[1.4rem] font-bold absolute'>Azamat Dinaev</span>
            <span>
                <Button customStyles="absolute right-8 top-10">Edit Cover</Button>
            </span>
        </div>

    );
};

export default Cover;