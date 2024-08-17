import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import { toast } from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = React.useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    if(search.length <3) {
      return toast.error("Please enter at least 3 characters")
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch("")
    } else {
      toast.error("Conversation not found")
    }
  }


  return (
   <form onSubmit={handleSubmit} className='flex items-center gap-2'>
    <input type="text" placeholder="Search..." className="input input-bordered rounded-full  bg-slate-600 text-white" value={search} onChange={(e) => setSearch(e.target.value)} />
    <button type="submit" className="btn btn-circle bg-sky-500">
      <IoSearchSharp className= "w-6 h-6 outline-none text-white" />
    </button>
   </form>
  )
}

export default SearchInput