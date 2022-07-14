import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSignInAlt, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { outlinedButton } from '../../styles/style';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { user } from '../../utils/user';

export default function Navbar(){

  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();

  function Logout(){
    localStorage.removeItem('token');
    navigate("/");
    window.location.reload(false);
  }

  return (      
    <nav className="bg-navblue px-2 sm:px-6 py-3 dark:bg-gray-900 border-b">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <Link to="/"><p className="self-center text-orange-500 text-xl font-semibold whitespace-nowrap"><FontAwesomeIcon icon={faLaptopCode} /> Codeish</p></Link>
        </div>
        <div className="flex items-center md:order-2">
          {user==='no user' ?
            <Link to="/creator"><button className={outlinedButton}><FontAwesomeIcon icon={faSignInAlt} />&nbsp; Login</button></Link>
          :
            <div className="relative group">
              <button className="block py-2 px-4 text-sm rounded-md bg-orange-500 text-white dark:hover:bg-orange-500 dark:text-white" onClick={()=>Logout()} ><FontAwesomeIcon icon={faSignOut} />&nbsp; Logout</button>
            </div> 
          }
          <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" onClick={()=>setToggle(!toggle)}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div className={(toggle ? "hidden " : "")+"justify-between items-center w-full md:flex md:w-auto md:order-1"} id="mobile-menu-2">
          <p className="text-gray-900  dark:text-white font-bold text-xl">Creator Mode</p>
        </div>
      </div>
    </nav>
  )
}