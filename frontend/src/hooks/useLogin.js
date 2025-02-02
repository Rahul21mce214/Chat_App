import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const [loading, setLoading] = React.useState(false)
  const { setAuthUser } = useAuthContext()
  const navigate = useNavigate()

  const login = async(username, password) => {

    const success= handleInputErrors(username, password);
    if(!success) return;
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })

        const data = await res.json()

        if(data.error) {
            throw new Error(data.error)
        }

        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)

        
    } catch (error) {
        
    } finally {
        setLoading(false)
    }
  }

  return { login, loading }
}

export default useLogin



function handleInputErrors(username , password) {

    if(!username || !password) {
      toast.error ('Please fill in all fields');
      return false;
  }
  
   
  
    return true
  }