import React, { useEffect } from 'react'
import UserAuth from '../components/userAuth'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function UserLogin() {
  const navigate = useNavigate()
  const { user, loading, error } = useSelector((state) => state.user);
  useEffect(()=>{
    if(user){
      navigate('/')
    }else{
      navigate('/login')
    }
  },[user])
  return (
    <UserAuth set={0} />
  )
}

export default UserLogin