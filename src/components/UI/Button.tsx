import React, {FC, ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode,
    customStyles: string
}

const Button : FC<ButtonProps> = ({children , customStyles}) => {
    return (
        <div className={`cursor-pointer rounded-md h-[30px] w-[100px] bg-gray-800 hover:bg-gray-600 text-white flex items-center justify-center ${customStyles}`}>
            <button>
                {children}
            </button>
        </div>
    );
};

export default Button;