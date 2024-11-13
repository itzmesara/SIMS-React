import Home from "./HomePage/Home";
import Login from "./LoginPage/Login";
import React from "react";
import './App.css'

import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import SignUp from "./SignUp/Signup";
import StudentList from "./AddStudent/addStd";
import List from "./StdList/stdList";
import Forgot from "./forgotpass/forgot";
import Edit from "./EditStd/Editstd";


function App() {
 const route=createBrowserRouter([
    {
        path:"/signup",
        element:<Login/>
    },
    {
        path:'/' ,
        element:<SignUp/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/addStudent",
        element:<StudentList/>
    },
    {
        path:"/ListOfStudent",
        element:<List/>
    },
    {
        path: '/forgotPassword',
        element:<Forgot/>
    },
    {
        path:'/editStudent',
        element:<Edit/>
    }
 ])
return(
    <div>
        <RouterProvider router={route}></RouterProvider>
    </div>
)
}

export default App;

