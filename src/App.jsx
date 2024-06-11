import React from 'react'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Onas from './pages/Onas'
import Krem1karta from './pages/Krem1karta'
import Contact from './pages/Contact'
import Korzina from './pages/Korzina'
import Krem2karta from './pages/Krem2karta'
import Krem3karta from './pages/Krem3karta'

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
}

])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
