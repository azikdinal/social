import React, {useState} from 'react';
import video_img from '../../assets/video_img.jpg'
import ScrollButton from "../../components/UI/ScrollButton";
const VideoWindow = () => {
    const [leftPosition, setLeftPosition] = useState(0);
    const handleClick = () => {
        setLeftPosition(leftPosition - 200)
        console.log("HANDLE")
    }

    return (
        <div className='h-[250px] w-[400px] bg-gray-600 rounded-xl border-2 border-gray-500 relative p-4 mt-4 relative overflow-hidden '>
            <ScrollButton customStyles='right-0 absolute flex top-[120px] z-20' onClick={handleClick}/>
            <span className='text-white'>Videos </span>
            <span className='text-gray-400'>1 232</span>
            <div className={`flex flex-row mt-4 w-[1000px] relative`}
            style={{left: leftPosition}}
            >
                <a href="#" className='ml-2 relative'><img src={video_img} alt="video_img" className='w-[250px] h-[150px] object-cover rounded-md'/></a>
                <a href="#" className='ml-2 relative'><img src={video_img} alt="video_img" className='w-[250px] h-[150px] object-cover rounded-md'/></a>
                <a href="#" className='ml-2 relative'><img src={video_img} alt="video_img" className='w-[250px] h-[150px] object-cover rounded-md'/></a>
            </div>
        </div>
    );
};

export default VideoWindow;