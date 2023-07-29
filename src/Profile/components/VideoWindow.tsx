import React from 'react';
import video_img from '../../assets/video_img.jpg'
const VideoWindow = () => {
    return (
        <div className='h-[250px] w-[400px] bg-gray-600 rounded-xl border-2 border-gray-500 relative p-4 mt-4'>
            <span className='text-white'>Videos </span>
            <span className='text-gray-400'>1 232</span>
            <div className='flex flex-row mt-4'>
                <a href="#" className=''><img src={video_img} alt="video_img" className='w-[250px] h-[150px] object-cover rounded-md'/></a>
            </div>
        </div>
    );
};

export default VideoWindow;