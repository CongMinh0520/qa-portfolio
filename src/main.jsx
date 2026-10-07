import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import Blog from './Blog.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(<StrictMode>{location.pathname.startsWith('/admin')?<Admin/>:location.pathname.startsWith('/blog')?<Blog/>:<App/>}</StrictMode>)
