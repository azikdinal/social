import React, {createElement} from 'react';
import ProfilePage from "./pages/profile/ProfilePage";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewsPage from "./pages/news/NewsPage";
import FriendsPage from "./pages/friends/FriendsPage";
import CommunitiesPage from "./pages/communities/CommunitiesPage";
import MessagesPage from "./pages/messages/MessagesPage";
import MusicPage from "./pages/music/MusicPage";
import VideosPage from "./pages/videos/VideosPage";
import PhotosPage from "./pages/photos/PhotosPage";

interface Service {
    text: string;
    path: string;
    element: JSX.Element; // Fix the type to JSX.Element
}

const services: Service[] = [
    {text: "Profile", path: '/profile', element: <ProfilePage/>},
    {text: "News", path: '/news', element: <NewsPage/>},
    {text: "Friends", path: '/friends', element: <FriendsPage/>},
    {text: "Communities", path: '/communities', element: <CommunitiesPage/>},
    {text: "Messages", path: '/messages', element: <MessagesPage/>},
    {text: "Photos", path: '/photos', element: <PhotosPage/>},
    {text: "Music", path: '/music', element: <MusicPage/>},
    {text: "Videos", path: '/videos', element: <VideosPage/>},
]


function App() {
    const router = createBrowserRouter(services.map(({path, element}) => ({path, element})));

    return (
        <>
            <NavBar/>
            <div className='flex mt-4 ml-[200px] mr-[200px]'>
                <SideBar services={services}/>
                <RouterProvider router={router}/>
            </div>
        </>
    );
}

export default App;
