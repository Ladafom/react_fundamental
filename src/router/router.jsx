import { createBrowserRouter, useNavigate } from 'react-router-dom'
import Header from "../layouts/Header"
import About from "../pages/About"
import Posts from "../pages/Post"
import PostId from "../pages/PostId"
import Error from "../pages/Error"
import Login from "../pages/Login"
import { useEffect } from 'react'

export const privateRoutes = createBrowserRouter([
    {
      path:'/',
      element:< Header />,
      children:[
        {
          path:'/',
          element:<PrivatNavigate/>,
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/posts',
          element:<Posts/>
        },
        {
          path:'/posts/:postId',
          element:<PostId/>
        },
        {
          path:'/login',
          element: <PrivatNavigate/>
        },
        {
          path:'/*',
          element:<Error/>
        },
      ]
    },
  ])

export const publicRoutes = createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/',
    element:<PublicNavigate/>,
  },
  {
    path:'/about',
    element:<PublicNavigate/>,
  },
  {
    path:'/posts',
    element:<PublicNavigate/>,
  },
  {
    path:'/posts/:postId',
    element:<PublicNavigate/>,
  },
  {
    path:'/*',
    element:<Error/>
  },
])

function PrivatNavigate(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/posts')
  },[])
}

function PublicNavigate(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/login')
  },[])
}