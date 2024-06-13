import React from 'react'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Onas from './pages/Onas'
import Krem1karta from './pages/Krem1karta'
import Contact from './pages/Contact'
import Korzina from './pages/Korzina'
import Krem2karta from './pages/Krem2karta'
import Krem3karta from './pages/Krem3karta'
import Krem4karta from './pages/Krem4karta'
import Krem5karta from './pages/Krem5karta'
import Krem6karta from './pages/Krem6karta'
import Krem7karta from './pages/Krem7karta'
import Krem8karta from './pages/Krem8karta'

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
},
{
  path: "Krem1karta",
  element: <Krem1karta/>
},
{
  path: "Contact",
  element: <Contact/>
},
{
  path: "Korzina",
  element: <Korzina/>
},
{
  path: "Krem2karta",
  element: <Krem2karta/>
},
{
  path: "Krem3karta",
  element: <Krem3karta/>
},
{
  path: "Krem4karta",
  element: <Krem4karta/>
},
{
  path: "Krem5karta",
  element: <Krem5karta/>
},
{
  path: "Krem6karta",
  element: <Krem6karta/>
},
{
  path: "Krem7karta",
  element: <Krem7karta/>
},
{
  path: "Krem8karta",
  element: <Krem8karta/>
}


])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
