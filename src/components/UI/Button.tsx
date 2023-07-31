import React, {FC, ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode,
    customStyles: string
}

const Button : FC<ButtonProps> = ({children , customStyles}) => {
    return (
        <div className={`cursor-pointer rounded-md h-[30px] w-auto bg-gray-800 hover:bg-gray-600 text-white flex items-center justify-center p-2 ${customStyles}`}>
            <button>
                {children}
            </button>
        </div>
    );
};

export default Button;