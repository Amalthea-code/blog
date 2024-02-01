import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutView from './view/aboutView'
import BlogView from './view/blogView'
import ContactsView from './view/contactsView'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/About",
                element: <AboutView/>
            },
            {
                path: "/Blog",
                element: <BlogView/>
            },
            {
                path: "/contacts",
                element: <ContactsView/>
            }
],
},
])
;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);