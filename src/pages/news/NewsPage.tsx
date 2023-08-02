import React from 'react';
import WhatIsNewInput from "./WhatIsNewInput";
import NewsRightPanel from "./NewsRightPanel";
import NewsHistories from "./NewsHistories";
import PostList from "../../components/PostList";
import Post from "../../components/Post";

const NewsPage = () => {
    return (
        <div className='w-full flex flex-row-reverse'>
            <NewsRightPanel/>
            <div className='w-[65%] mr-4 ml-2'>
                <WhatIsNewInput/>
                <NewsHistories/>
                <Post />
            </div>
        </div>
    );
};

export default NewsPage;