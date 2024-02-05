import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AboutView from "../view/aboutView";
import BlogView from "../view/blogView";
import ContactsView from "../view/contactsView";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <AboutView/>
            },
            {
                path: "/blog",
                element: <BlogView/>
            },
            {
                path: "/contacts",
                element: <ContactsView/>
            }
        ],
    },
]);

export default router;