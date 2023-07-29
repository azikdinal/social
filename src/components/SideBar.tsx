import React from 'react';
import Row from "./Row";

const rows = [
    {text: "Friends", link: '#friends'},
    {text: "Communities", link: '#communities'},
    {text: "Messages", link: '#messages'},
    {text: "Photos", link: '#photos'},
    {text: "Music", link: '#music'},
    {text: "Videos", link: '#videos'},
]

const SideBar = () => {
    return (
        <ul className='ml-[200px]'>
            {rows.map((row, index) => (
                <Row link={row.link} name={row.text} key={index}/>
            ))}
        </ul>
    );
};

export default SideBar;