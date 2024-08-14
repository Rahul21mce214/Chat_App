import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const SearchInput = () => {
  return (
   <form className='flex items-center gap-2'>
    <input type="text" placeholder="Search" className="input input-bordered rounded-full  bg-slate-600 text-white" />
    <button type="submit" className="btn btn-circle bg-sky-500">
      <IoSearchSharp className= "w-6 h-6 outline-none text-white" />
    </button>
   </form>
  )
}

export default SearchInput