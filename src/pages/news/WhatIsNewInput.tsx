import React from 'react';
import profile_photo from '../../assets/profile.jpg'
const WhatIsNewInput = () => {
    return (
        <div className='h-14 flex items-center bg-white rounded-xl p-4'>
            <a href="#" className=''><img src={profile_photo} alt="profile_photo" className='h-[35px] w-[35px] object-cover rounded-full'/></a>
            <input type="text" placeholder="What's new?" className='ml-2 bg-transparent border-none outline-none'/>
        </div>
    );
};

export default WhatIsNewInput;