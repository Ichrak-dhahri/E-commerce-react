
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Brand from './components/Brand/Brand'
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login'
let x =createBrowserRouter([
  { path:'',element:<Layout />,children:[
    {index:true, element:<Home />},
      {path:'categories',element:<Category />},
      {path:'brands',element:<Brand />},
      {path:'cart',element:<Cart />},
      {path:'product',element:<Products />},
      {path:'register',element:<Register />},
      {path:'login',element:<Login />},
      {path:'*',element:<NotFound />}
    
  ]}
]);

function App() {
  

  return (
    <RouterProvider router={x}></RouterProvider>
  )
}

export default App
