import React from 'react'
import UserAuth from '../components/userAuth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function UserRegister() {
  const navigate = useNavigate()
  const { user, loading, error } = useSelector((state) => state.user);
  return (

    <UserAuth set={1} />

  )
}

export default UserRegister