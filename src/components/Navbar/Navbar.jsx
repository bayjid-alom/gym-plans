import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Membership", path: "/membership" },
    { id: 3, name: "Trainers", path: "/trainers" },
    { id: 4, name: "Facilities", path: "/facilities" },
    { id: 5, name: "Pricing", path: "/pricing" }
];

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleMenuBar = () => {
        setOpen(!open)
    }

    const links = navItems.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <header>
            <nav className='flex justify-between items-center py-2.5 md:py-4 w-11/12 mx-auto'>

                <span className='flex gap-2 items-center'>
                    {/* Part-i */}
                    <span onClick={() => handleMenuBar()}
                        className='md:hidden'>
                        {
                            open ?
                                <X className='md:hidden'></X> :
                                <Menu className='md:hidden'></Menu>
                        }

                        <ul className={`md:hidden absolute duration-1000
                            ${open ? "top-12" : "-top-50"}
                         bg-blue-200 text-black`}>
                            {
                                links
                            }
                        </ul>

                    </span>

                    {/* Part-ii */}
                    <h3 className=' text-2xl font-bold'>Gym<span className='text-orange-400'>Plans</span></h3>
                </span>


                {/* Way - 03 (Component) */}
                <ul className='hidden md:flex' >
                    {
                        links
                    }
                </ul>


                <button className='btn btn-soft'>Get Started</button>



                {/* Way - 02 */}
                {/* <ul className='flex'>
                {
                    navItems.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}


                {/* Way - 01 */}
                {/* <ul className='flex'>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">Contact</a></li>
                <li className='mr-10'><a href="">About</a></li>
                <li className='mr-10'><a href="">Blog</a></li>
                <li className='mr-10'><a href="">More</a></li>
            </ul> */}
            </nav>
        </header>
    );
};

export default Navbar;