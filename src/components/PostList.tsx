import React, {FC} from 'react';
import Button from "./UI/Button";
import profile from '../assets/profile.jpg'
import post_img from '../assets/video_img.jpg'
import Post from "./Post";

interface PostListProps {
    width?: string
    bg_color?: string
    text_color?: string
}

const PostList: FC<PostListProps> = ({width, bg_color, text_color}) => {
    return (
        <>
            <div className={`h-auto rounded-xl overflow-hidden mt-4 `}
                 style={{width: width, color: text_color}}>
                <div className='h-auto flex flex-row p-4 border-1'  style={{backgroundColor:bg_color}}>
                    <Button customStyles=''>All posts</Button>
                    <Button customStyles='ml-2'>Azamat's posts</Button>
                </div>
                <div className='h-auto mt-[0.1rem] p-4' style={{backgroundColor:bg_color}}>
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
                        Международная Федерация Спортивного Альпинизма (МФСА) утвердила «Положение о жетоне «Снежный
                        Барс»
                        (прилагается)
                    </div>
                    <div className='rounded-xl overflow-x-hidden mt-2'>
                        <a href="#"><img src={post_img} alt="post_img"/></a>
                    </div>
                </div>
            </div>
            <Post width={width} bg_color={bg_color} text_color={text_color}/>
            <Post width={width} bg_color={bg_color} text_color={text_color}/>
            <Post width={width} bg_color={bg_color} text_color={text_color}/>
        </>
    );
};


PostList.defaultProps = {
    width: "500px",
    bg_color: "white",
    text_color: "black",
}

export default PostList;