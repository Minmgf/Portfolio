import React from 'react'
import logo from '../icons/logo.svg'

const footer = () => {
  return (
    <div className='flex justify-center w-2/3 h-auto p-6 px-2 mx-auto border-t-2 opacity-70 rounded-2xl'>
      <img src={logo} className='w-24' />
    </div>
  )
}

export default footer
