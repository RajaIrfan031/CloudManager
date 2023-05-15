import React,{useState} from 'react';
import { GrMenu } from 'react-icons/gr';
import {GiCrossMark} from 'react-icons/gi'

const Navbar = ()=>{

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = ()=>{
        setIsClicked(!isClicked)
    }

    return(
        <>
        <div className='fixed h-[80px] bg-gray-300 drop-shadow-lg z-10 w-screen'>
            <div className='px-2 flex flex-row items-center w-full h-full justify-between'>
                <div className='flex items-center'>
                    <h1 className='py-5 ml-4 text-2xl font-bold'>Cloud'Em.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            {!isClicked ?
                <div className='md:hidden' onClick={handleClick}>
                    <GrMenu className='w-8'/>
                </div> :
                <div className='md:hidden' onClick={handleClick}>
                    <GiCrossMark className='w-8'/>
                </div>
            }

            </div>
            {
                isClicked ?
            <div className='md:hidden transition-all opacity-100 ease-in-out duration-700'>
                <ul className='px-1 bg-gray-300 w-screen'>
                    <li className='border-b border-b-gray-400 text-sm'>Home1</li>
                    <li className='border-b border-b-gray-400 text-sm'>About</li>
                    <li className='border-b border-b-gray-400 text-sm'>Support</li>
                    <li className='border-b border-b-gray-400 text-sm'>Platforms</li>
                    <li className='border-b border-b-gray-400 text-sm'>Pricing</li>
                </ul>
                <div className='m-4 '>
                    <button className='w-full border border-r-1 border-indigo-400 px-4 bg-transparent text-black font-bold py-2 mb-4'>Sign In</button>
                    <button className='md:w-8 border border-r-1 border-indigo-400 px-4 text-white font-bold py-2 mb-4'>Sign Up</button>
                </div>
            </div>
            :
            <>
            
            </> 
            }

        </div>
        </>
    )
}

export default Navbar;