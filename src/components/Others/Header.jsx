import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl font-semibold'>Coders👋</span></h1>
      <button className='border-none bg-emerald-600 rounded-full py-2 px-8 text-white outline-none placeholder:text-white font-medium'>Log Out</button>
    </div>
  )
}

export default Header
