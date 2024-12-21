import React, { useEffect, useRef } from 'react'
import { Typed } from 'react-typed';

function Hero() {

    const typedRef = useRef(null);

    useEffect(() => {
        if(typedRef.current){
            new Typed(typedRef.current, {
                strings: ['NIKE', 'AIR', 'JORDAN'], 
                typeSpeed: 220, 
                backSpeed: 240, 
                loop:true
            });
        }
    },[]);

  return (
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
            <p className='text-black font-bold p-2'>Nike Air Jordan</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Nike Air Jordan</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'></p>
                <div ref={typedRef} className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'></div>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Nike shop for air jordan</p>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Shop</button>
        </div>
  );
}

export default Hero