import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import LoginPage from './pages/LoginPage'
import Account from './pages/Account'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
    errorElement: <div> 404 Page Not Found</div>
  },
  {
    path: '/profile',
    element: <Account/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
