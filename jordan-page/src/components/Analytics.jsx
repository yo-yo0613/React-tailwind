import React from 'react'
import Laptop from '../assets/b-removebg-preview.png';

function Analytics() {
  return (
    <div className='w-full bg-black py-16 px-4 text-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"   />
            <div className='flex flex-col justify-center'>
                <p className='text-white font-bold'>Nike Air Jordan</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Nike shop for air jordan</h1>
                <p>The Nike Air Jordan is a line of basketball shoes designed 
                    by Nike for NBA legend Michael Jordan. 
                    First released in 1985, the Air Jordan brand revolutionized 
                    sports footwear with its innovative design and performance. 
                    Known for stylish aesthetics and cutting-edge technology, 
                    it remains an iconic symbol of athletic culture.
                </p>
                <button className='bg-white text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Shop</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics