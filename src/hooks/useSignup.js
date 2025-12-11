import {useState} from 'react'
import { projectAuth} from '../firebase/config'
export const useSignup=()=>{
    const [error ,setError]=useState(null)
    const [isPending,setIsPending]=useState(false)

    const signup = async (email,password,displayName) => {
        setError(null)
        setIsPending(true)

        try{

           const res =  await projectAuth.createUserWithEmailAndPassword(email,password)
           console.log(res.user)

           if(!res){
            throw new Error('Could not complete signup')
           }

           //add display name

           await res.user.updateProfile({ displayName })

           setIsPending(false)
           setError(null)

           return res.user

        }catch(err){
            console.log("Signup error :",err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return {signup , isPending , error}
}