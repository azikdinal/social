import React from 'react';
import FriendWindow from "./FriendWindow";
import VideoWindow from "./VideoWindow";
import SubscriptionWindow from "./SubscriptionWindow";

const RightComponents = () => {
    return (
        <div className=''>
            <FriendWindow/>
            <SubscriptionWindow/>
            <VideoWindow/>
        </div>
    );
};

export default RightComponents;