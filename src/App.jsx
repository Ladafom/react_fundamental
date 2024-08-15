import {RouterProvider } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './router/router'
import './styles/App.css'
import { useState, useEffect } from 'react'
import { AuthContext } from './context/context'
import Loader from './components/UI/Loader/Loader'

function App() {

  const [isAuthorised, setIsAuthorised] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuthorised(true)
    }
    setIsLoading(false)
  },[])

  if(isLoading) {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{
      isAuthorised,
      setIsAuthorised,
      isLoading
    }}>
      <RouterProvider router={isAuthorised ? privateRoutes : publicRoutes}/>
    </AuthContext.Provider>
  )
}

export default App
