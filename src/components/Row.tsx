import React, {FC} from 'react';

interface RowProps {
    name: string,
    path: string
}

const Row: FC<RowProps> = ({name, path}) => {
    return (
        <div className='mt-2 hover:bg-gray-600 p-2 rounded'>
            <a className='h-full w-full' href={path}>{name}</a>
        </div>
    );
};

export default Row;