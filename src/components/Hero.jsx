import React from 'react';
import bg from '../assets/cyber-bg.png';
import {GiCloudUpload, GiServerRack, GiDatabase, GiCommercialAirplane} from 'react-icons/gi'

const Hero = () =>{
    return(
        <>
        <div className='w-full h-screen align-middle justify-between flex flex-col'>
            <div className='md:flex md:flex-1 justify-center py-32 md:py-0 px-4'>
                <div className='md:flex md:flex-1 justify-center items-center'>
                    <div className=''>
                        <h1 className='text-2xl'>Unique Sequencing & Production</h1>
                        <h1 className='text-5xl font-bold'>Cloud</h1>
                        <h1 className='text-5xl font-bold'>Management</h1>
                        <h1 className='text-xl my-2'>One provider for all.</h1>
                        <button className='w-[320px] border border-r-1 border-indigo-400 px-4 text-white font-bold py-2 mb-4'>Get Started</button>
                </div>
                </div>
                <div className='md:flex md:flex-1 '>
                    <img src={bg} alt="" className='w-full py-32'/>
                </div>
            </div>
            <div className='absolute flex flex-col justify-center bottom-[-5%] mx-1 md:left-1/4  py-8 min-w-[760px]
            border border-slate-300 rounded-xl text-center shadow-lg bg-zinc-200'>
                <div className='flex flex-col justify-center items-center'>
                    <h1>Data Services</h1>
                    <div className='flex flex-wrap justify-between py-2'>
                        <p className='text-black flex px-4'><GiCloudUpload className='text-indigo-700' size={30}/>App Security</p>
                        <p className='text-black flex px-4'><GiDatabase className='text-indigo-700' size={30}/>Cloud Data</p>
                        <p className='text-black flex px-4'><GiCommercialAirplane className='text-indigo-700' size={30}/>API</p>
                        <p className='text-black flex px-4'><GiServerRack className='text-indigo-700' size={30}/>Dashboard Design</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;