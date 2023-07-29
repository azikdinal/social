import React from 'react';
import group_photo from '../../assets/group_photo.jpg'

const SubscriptionWindow = () => {
    return (
        <div className='h-[400px] w-[400px] bg-gray-600 rounded-xl border-2 border-gray-500 relative p-4 mt-4'>
            <span className='text-white'>Following </span>
            <span className='text-gray-400'>1 232</span>
            <div className='flex flex-col justify-between mt-2'>
                <a href="#" className='ml-2 overflow-hidden mb-2 flex flex-row hover:bg-gray-500 p-2 rounded-md'><img src={group_photo}
                                                                                                       alt="following-photo"
                                                                                                       className='h-[60px] w-[60px] rounded-full object-cover'/>
                    <div className='flex flex-col ml-2'>
                        <span>Dico group</span>
                        <span className='text-gray-400'>3 345</span>
                    </div>
                </a>
                <a href="#" className='ml-2 overflow-hidden mb-2 flex flex-row hover:bg-gray-500 p-2 rounded-md'><img src={group_photo}
                                                                                                       alt="following-photo"
                                                                                                       className='h-[60px] w-[60px] rounded-full object-cover'/>
                    <div className='flex flex-col ml-2'>
                        <span>Dico group</span>
                        <span className='text-gray-400'>3 345</span>
                    </div>
                </a>
                <a href="#" className='ml-2 overflow-hidden mb-2 flex flex-row hover:bg-gray-500 p-2 rounded-md'><img src={group_photo}
                                                                                                       alt="following-photo"
                                                                                                       className='h-[60px] w-[60px] rounded-full object-cover'/>
                    <div className='flex flex-col ml-2'>
                        <span>Dico group</span>
                        <span className='text-gray-400'>3 345</span>
                    </div>
                </a>
                <a href="#" className='ml-2 overflow-hidden mb-2 flex flex-row hover:bg-gray-500 p-2 rounded-md'><img src={group_photo}
                                                                                                       alt="following-photo"
                                                                                                       className='h-[60px] w-[60px] rounded-full object-cover'/>
                    <div className='flex flex-col ml-2'>
                        <span>Dico group</span>
                        <span className='text-gray-400'>3 345</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SubscriptionWindow;