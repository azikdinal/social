import React from 'react';
import Profile from "./Profile/Profile";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
    return (
        <>
            <NavBar/>
            <div className='flex mt-2'>
                <SideBar/>
                <Profile/>
            </div>
        </>
    );
}

export default App;
