import React, {FC} from 'react';

interface RowProps {
    name: string,
    link: string
}

const Row : FC<RowProps> = ({name, link}) => {
    return (
        <div className='mt-2 hover:bg-gray-600 p-2 rounded'>
            <a href={link}>{name}</a>
        </div>
    );
};

export default Row;