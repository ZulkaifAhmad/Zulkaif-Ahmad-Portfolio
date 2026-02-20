import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Outlit from './Layout/Outlit.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Github from './Pages/Github.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Contact from './Pages/Contact.jsx'


const routes = createBrowserRouter([
  {
    path : "/",
    element : <Outlit />,
    children : [
      {
        path : "",
        element : <Home />
      } ,
      {
        path : "/about",
        element : <About />
      } ,
      {
        path : "/contact",
        element : <Contact />
      } ,
      {
        path : "/portfolio",
        element : <Portfolio />
      } ,
      {
        path : "/github",
        element : <Github />
      } 
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
