import React from 'react';
import placeholder from '../../../assets/placeholder.jpeg'

const FriendWindow = () => {
    return (
        <div className='h-[150px] w-[400px] bg-gray-600 rounded-xl border-2 border-gray-500 relative p-4  mt-4'>
            <span className='text-white'>Friends </span>
            <span className='text-gray-400'>1 232</span>
            <div className='flex flex-row justify-between mt-2'>
                <a href="#" className="h-[80px] w-[80px] ml-2"><img src={placeholder} alt="placeholder"
                                                                    className='w-full h-full rounded-[50%] object-cover'/></a>
                <a href="#" className="h-[80px] w-[80px] ml-2"><img src={placeholder} alt="placeholder"
                                                                    className='w-full h-full rounded-[50%] object-cover'/></a>
                <a href="#" className="h-[80px] w-[80px] ml-2"><img src={placeholder} alt="placeholder"
                                                                    className='w-full h-full rounded-[50%] object-cover'/></a>
                <a href="#" className="h-[80px] w-[80px] ml-2"><img src={placeholder} alt="placeholder"
                                                                    className='w-full h-full rounded-[50%] object-cover'/></a>
            </div>
        </div>
    );
};

export default FriendWindow;