import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TvShow from './Pages/TvShow/TvShow.jsx'
import Movies from './Pages/Movies/Movies.jsx'
import Home from './Pages/Home/Home.jsx'
import Loading from './components/Loading/Loading.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import MovieDetails from './Pages/MovieDetails/MovieDetails.jsx'

function App() {

const routes = createBrowserRouter([{
  path:"/", 
  element:<Layout/>, 
  children: [
    {index:true, element:<Home/>},
    {path:'/movies', element:<Movies/>},
    {path:'/tvshow', element:<TvShow/>},
    {path:'/movieInfo/:id', element :<MovieDetails/>} 
  ]
}])
  return (
    <>
  
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
