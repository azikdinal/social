import React from 'react';
import PhotoWindow from "./PhotoWindow";
import PostList from "./PostList";

const LeftComponents = () => {
    return (
        <div className='relative'>
            <PhotoWindow/>
            <PostList/>
        </div>
    );
};

export default LeftComponents;