import React, { useState } from 'react'
import { Outlet, Link, Navigate } from 'react-router-dom'
import Header from './Header'

const ProtectedRouteTemplate = () => {
    const [auth, setAuth] = useState(true)
   
  return (
    <>
       {auth ? 
       <>
       <Header/>
       <Outlet/>
       </>
       
       : <Navigate to="/login"/>}
    </>
  )
}

export default ProtectedRouteTemplate