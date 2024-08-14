import React from 'react'
import { BiLogOut } from 'react-icons/bi'

const LogoutButton = () => {
  return (
    <div className='mt-auto'>
         <BiLogOut  className='text-3xl cursor-pointer text-white hover:text-red-500'/> 
    </div>
  )
}

export default LogoutButton