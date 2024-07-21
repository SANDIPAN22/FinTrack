import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const LoginPage = lazy(() => import ("./pages/LoginPage"))
const SignupPage = lazy(() => import ("./pages/SignupPage"))
const HomePage = lazy(() => import ("./pages/HomePage"))
const TransactionPage = lazy(() => import ("./pages/TransactionPage"))
const NotFoundPage = lazy(() => import ("./pages/NotFoundPage"));

import PageLoader from './components/PageLoader'
import ProtectedRouteTemplate from "./components/ProtectedRouteTemplate"
const App = () => {
  return (
   
    <Suspense fallback={ <PageLoader/>}>
    <Router>
      <Routes>
        <Route  path='/login' element={<LoginPage/>} />
        <Route  path='/signup' element={<SignupPage/>} />

        <Route element={<ProtectedRouteTemplate/>}>
          <Route  path='/' element={<HomePage/>} />
          <Route  path='/transaction/:id' element={<TransactionPage/>} />
        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>

 </Suspense>
    
  )
}

export default App