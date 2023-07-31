import React from 'react';
import profile from '../assets/profile.jpg'
import NavBar from "../components/NavBar";
import Cover from "./components/Cover";
import LeftComponents from "./components/LeftComponents";
import RightComponents from "./components/RightComponents";

const ProfilePage = () => {

    return (
        <div className='ml-2'>
            <Cover/>
            <div className='flex flex-row justify-between'>
                <LeftComponents/>
                <RightComponents/>
            </div>
        </div>
    );
};

export default ProfilePage;