import React from 'react';

function Newsletter() {
  return (
    <div className='w-full py-16 text-black px-4'>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        {/* 左邊文字部分 */}
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        {/* 右邊表單部分 */}
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input 
              className='p-3 flex w-full rounded-md text-black bg-white m-5 border-2 border-gray-300' 
              type="email" 
              placeholder='Enter Email' 
            />
            <button className='bg-black w-full sm:w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
              Notify Me
            </button>
          </div>
          <p className='text-center'>
            We care about the protection of your data. Read our 
            <span className='text-red-500 cursor-pointer'> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
