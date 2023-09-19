import { useState } from "react";
import Link from "../Links/Link";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {

    const [open, setOpen]= useState(false)

const routes = [
        { id: 1, name: "Home", path: "/"},
        { id: 2, name: "About", path: "/about"},
        { id: 3, name: "Services", path: "/services"},
        { id: 4, name: "Contact", path: "/contact"},
        { id: 5, name: "Blog", path: "/blog"}
      ];
      
      

    return (
        <nav className="text-black bg-yellow-200 p-6">
           <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenuUnfold ></AiOutlineMenuUnfold>
            }
          
           </div>
           <ul className={`md:flex md:static absolute duration-1000 bg-yellow-200 px-6  ${open ? 'top-14' : '-top-60'}`}>
           {
            routes.map(route => <Link key={route.id} route={route}></Link>)
           }
           </ul>
        </nav>
    );
};

export default NavBar;