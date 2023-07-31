import React from 'react';
import Button from "../../components/UI/Button";
import profile from '../../assets/profile.jpg'
import post_img from '../../assets/video_img.jpg'
import Post from "./Post";

const PostList = () => {
    return (
        <>
            <div className='bg-gray-500 h-auto w-[500px] rounded-xl overflow-hidden mt-4'>
                <div className='bg-gray-600 h-auto flex flex-row p-4 border-1'>
                    <Button customStyles=''>All posts</Button>
                    <Button customStyles='ml-2'>Azamat's posts</Button>
                </div>
                <div className='h-auto bg-gray-600 mt-[0.1rem] p-4 text-white'>
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
            <Post/>
            <Post/>
            <Post/>
        </>
    );
};

export default PostList;