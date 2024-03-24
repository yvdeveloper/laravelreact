import {createBrowserRouter, Navigate} from 'react-router-dom';
import Index from "./views/Index.jsx";

import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import Error from "./views/Error.jsx";
import Lovelight from './components/templates/Lovelight.jsx';
import TemplateAdmin from './components/templates/TemplateAdmin.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import Dashboard from './views/Dashboard.jsx';
import UserForm from './views/UserForm.jsx';
import Board from './components/Board.jsx';
const router = createBrowserRouter([
    {
        path:'/',
        element: <Lovelight/>,
        children: [
            {
                path: '/index',
                element:<Index/>
            }
        ]
    },
    {
        path:'/',
        element: <TemplateAdmin/>,
        children:[
            {
                path: '/',
                element:<Navigate to="/boards"/>
            },
            {
                path: '/dashboard',
                element:<Dashboard/>   
            },
            {
                path: '/users',
                element:<Users/>   
            },
            {
                path: '/users/new',
                element:<UserForm key="userCreate"/>   
            },
            {
                path: '/users/:id',
                element:<UserForm key="userUpdate"/>   
            },
            {
                path: '/boards',
                element:<Board/>   
            },
        ]
    },
    {
        path:'/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/index',
                element:<Index/>
            },
            {
                path: '/login',
                element:<Login/>   
            },
            {
                path: '/signup',
                element:<Signup/>   
            },
        ]
    },
    
    {
        path: '*',
        element:<Error/>   
    }

])

export default router;