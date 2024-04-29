import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home"
import Items from "../Pages/Allitems/Items"
import Login from "../Pages/Login/Login"
import Update from "../Pages/Update/Update"
import Register from "../Pages/Register/Register.jsx"
import PrivateRoute from "../Pages/Private/PrivateRoute"
import Mylist from './../Pages/Mylist/Mylist';
import Additem from "../Pages/Additem/Additem.jsx";
import Category from "../Pages/Category/Category.jsx";
import Details from "../Pages/Details/Details.jsx";
const Route = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
          {
            path: '/',
            loader: ()=>fetch('http://localhost:5000/items'),
            element: <Home></Home>
          },
          {
            path:'/allitems',
            loader: ()=>fetch('http://localhost:5000/items'),
            element: <Items></Items>
          },
          {
            path: '/mylist',
            element:<PrivateRoute><Mylist></Mylist></PrivateRoute>
          },
          {
            path: '/login',
            element:  <Login></Login>
          },
          {
            path: "/register",
            element: <Register></Register>
          },
          {
            path:'/update/:id',
            loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`),
            element: <PrivateRoute><Update></Update></PrivateRoute>
          },
          {
            path:'/additem',
            loader: ()=>fetch("http://localhost:5000/category"),
            element: <PrivateRoute><Additem></Additem></PrivateRoute>
          },
          {
            path:'/category/:name',
            loader: ({params})=>fetch(`http://localhost:5000/category/${params.name}`),
            element: <Category></Category>
          },
          {
            path:'/details/:id',
            loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`),
            element: <PrivateRoute><Details></Details></PrivateRoute>
          }
         
        ]
    }
  ])
export default Route;
