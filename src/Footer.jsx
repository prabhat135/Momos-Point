import React from 'react'

const Footer = () => {
  return (
    <div className='text-center bg-[#333] text-white md:pl-32 md:pr-32 p-6'>
      <hr className='text-gray-600 opacity-50' />
      
      <span className='text-md text-[#F3EDE1]'>
        All rights reserved Momos Point &copy; {new Date().getFullYear()}
      </span>
    </div>
  )
}

export default Footer