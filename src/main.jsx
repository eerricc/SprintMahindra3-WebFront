//default
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//imports from routes
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Registration from './routes/Registration.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Sobre from './routes/Sobre.jsx'


//import from react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    //father elements
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //children elements
    children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/registration', element:<Registration/>},
      {path:'/dashboard', element:<Dashboard/>},
      {path:'/sobre', element:<Sobre/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
