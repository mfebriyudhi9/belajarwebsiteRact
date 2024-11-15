import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import ErrorPage from './Pages/404'
import ProductsPage from './Pages/products'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello words</div>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/Register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>
  }



]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
