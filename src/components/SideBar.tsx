import React, { FC } from 'react';
import Row from './Row';

interface Service {
    path: string;
    text: string;
}

interface SideBarProps {
    services: Service[];
}

const SideBar: FC<SideBarProps> = ({ services }) => {
    return (
        <ul className='ml-[200px]'>
            {services.map((row, index) => (
                <Row path={row.path} name={row.text} key={index} />
            ))}
        </ul>
    );
};

export default SideBar;
