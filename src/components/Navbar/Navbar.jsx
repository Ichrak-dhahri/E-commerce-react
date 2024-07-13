
import Style from "./Navbar.module.css"
import logo from "../../assets/images/logo2.png"
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
     <nav className='bg-gray-100 fixed top-0 left-0 right-0 py-0'>
      <div className='Container justify-between mx-auto py-2 flex flex-col lg:flex-row items-center'>
          <div className='flex flex-col lg:flex-row items-center'>
            <img src={logo} width={110}  alt='fresh cartLogo' />
            <ul className='flex flex-col lg:flex-row items-center'>
              <li className="py-2"  ><NavLink className='mx-2 text_lg text-slate-900 font-light'  to=''> Home</NavLink></li>
              <li className="py-2" ><NavLink className='mx-2 text_lg text-slate-900 font-light' to='cart'>Cart</NavLink></li>
              <li className="py-2"><NavLink className='mx-2 text_lg text-slate-900 font-light' to='product'>Products</NavLink></li>
              <li className="py-2"><NavLink className='mx-2 text_lg text-slate-900 font-light' to='brands'> Brands</NavLink></li>
              <li className="py-2"><NavLink className='mx-2 text_lg text-slate-900 font-light' to='categories'> Categories</NavLink></li>
            </ul>
          </div> 
          <div>
          <ul className='flex flex-col lg:flex-row items-center' >
              <li className="py-2"><NavLink className='mx-2 text_lg text-slate-900 font-light'  to='login'> login</NavLink></li>
              <li className="py-2"><NavLink className='mx-2 text_lg text-slate-900 font-light' to='register'>Register</NavLink></li>
              <li className="py-2"><NavLink className='mx-2 text_lg text-slate-900 font-light' >logout</NavLink></li>
              <li className='flex items-center'>
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-youtube"></i>
                <i className="fab mx-2 fa-tiktok"></i> 
              </li>
              </ul>
          </div>
      </div>
     </nav>
    </>
  )
}
