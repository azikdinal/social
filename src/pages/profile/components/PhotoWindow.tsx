import React from 'react';
import photo from '../../../assets/photo.jpeg'
import Button from "../../../components/UI/Button";
const PhotoWindow = () => {
    const imgStyle = 'h-[160px] mt-1 ml-1'
    return (
        <div className='h-[450px] w-[500px] bg-gray-600 rounded-xl border-2 border-gray-500 p-4  mt-4'>
            <div className='mt-4 ml-5'>
                <Button customStyles='bg-gray-500 hover:bg-gray-400'>Photos</Button>
            </div>
            <div className='flex flex-wrap overflow-hidden border-0 justify-center items-center'>
                <a><img src={photo} alt="photo" className={imgStyle}/></a>
                <a><img src={photo} alt="photo" className={imgStyle}/></a>
                <a><img src={photo} alt="photo" className={imgStyle}/></a>
                <a><img src={photo} alt="photo" className={imgStyle}/></a>
                <a><img src={photo} alt="photo" className={imgStyle}/></a>
                <a><img src={photo} alt="photo" className={imgStyle}/></a>
            </div>
            <div className='flex justify-center bottom-5'>
                <Button customStyles='w-[95%] bg-gray-500 mt-4 hover:bg-gray-400'>Show all</Button>
            </div>
        </div>
    );
};

export default PhotoWindow;