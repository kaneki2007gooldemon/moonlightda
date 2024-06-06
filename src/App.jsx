import React from 'react'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Onas from './pages/Onas'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
{
  path: "/",
  element: <Home />
},
{
  path: "Katalog",
  element: <Katalog />
},
{
  path: "Onas",
  element: <Onas/>
}
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
