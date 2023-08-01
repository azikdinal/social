import React from 'react';
import profile_photo from '../../assets/profile.jpg'

const NewsHistories = () => {
    return (
        <div className='h-[250px] bg-white mt-4 rounded-xl p-4'>
            <span >Histories</span>
            <div className='mt-2 flex'>
                <a href="#" className='ml-2'><img src={profile_photo} alt="profile_photo" className='h-[190px] w-[100px] object-cover rounded-xl'/></a>
                <a href="#" className='ml-2'><img src={profile_photo} alt="profile_photo" className='h-[190px] w-[100px] object-cover rounded-xl'/></a>
                <a href="#" className='ml-2'><img src={profile_photo} alt="profile_photo" className='h-[190px] w-[100px] object-cover rounded-xl'/></a>
                <a href="#" className='ml-2'><img src={profile_photo} alt="profile_photo" className='h-[190px] w-[100px] object-cover rounded-xl'/></a>
                <a href="#" className='ml-2'><img src={profile_photo} alt="profile_photo" className='h-[190px] w-[100px] object-cover rounded-xl'/></a>
            </div>
        </div>
    );
};

export default NewsHistories;