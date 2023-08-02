import React, {FC} from 'react';
import profile from "../assets/profile.jpg";
import post_img from "../assets/video_img.jpg";
import PostList from "./PostList";

interface PostProps {
    width?: string
    bg_color?: string
    text_color?: string
}

const Post: FC<PostProps> = ({width, bg_color, text_color}) => {
    return (
        <div className='h-auto rounded-xl mt-2 p-4 bg-white'
             style={{width: width, backgroundColor: bg_color, color: text_color}}>
            <div className='flex flex-row '>
                <a href="#" className=''><img className='h-12 w-12 object-cover rounded-full' src={profile}
                                              alt="profile"/></a>
                <div className='ml-2 mb-2 flex flex-col'>
                    <span className=''>Azamat Dinaev</span>
                    <span className='text-[13px] text-gray-300'>3 june on 19:21</span>
                </div>
            </div>
            <div>
                Жетон "СНЕЖНЫЙ БАРС"
                <br/>
                <br/>
                31 мая 2023 года родился долгожданный «Снежный Барс»!
                <br/>
                <br/>
                Международная Федерация Спортивного Альпинизма (МФСА) утвердила «Положение о жетоне «Снежный Барс»
                (прилагается)
            </div>
            <div className='rounded-xl overflow-x-hidden mt-2'>
                <a href="#"><img src={post_img} alt="post_img"/></a>
            </div>
        </div>
    );
};


export default Post;