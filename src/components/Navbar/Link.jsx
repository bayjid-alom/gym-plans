import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='md:mr-10  text-sm md:hover:bg-transparent hover:bg-sky-300 px-5 py-2 md:py-0 md:hover:text-sky-300'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;