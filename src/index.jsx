import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fontsource/montserrat'
import './styles/normalize.css'
import './styles/index.css'
import Home from './pages/Home'
import Error from './components/Error'
import About from './pages/About'
import Housing from './pages/Housing'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/housing/:housingId',
        element: <Housing />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()