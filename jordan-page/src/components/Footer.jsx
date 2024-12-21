import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-black'>
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
            <div>
                <h1 className='w-full text-3xl font-bold text-white'>Jordan</h1>
                <p className='py-4 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                The Nike Air Jordan is a line of basketball shoes designed by 
                Nike for NBA legend Michael Jordan. First released in 1985, 
                the Air Jordan brand revolutionized sports footwear with its 
                innovative design and performance. 
                Known for stylish aesthetics and cutting-edge technology, 
                it remains an iconic symbol of athletic culture.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} className="text-white" />
                    <FaInstagram size={30} className="text-white" />
                    <FaTwitterSquare size={30} className="text-white" />
                    <FaGithubSquare size={30} className="text-white" />
                    <FaDribbbleSquare size={30} className="text-white" />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
