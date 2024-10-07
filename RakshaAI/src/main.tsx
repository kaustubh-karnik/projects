import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chat from './Pages/Chat.js';
import Login from './Pages/Login.tsx';
import Home from './Pages/Home.tsx';
import Contact from './Pages/Contact.tsx';
import About from './Pages/About.tsx';

const router = createBrowserRouter([
  {
    path: "/Chat",
    element: <Chat/>,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
