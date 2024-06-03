import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#32405e] bg-[url('https://i.ibb.co/RCLYHn5/bg.png')]"> 
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>SERVICES</NavLink></li>
                            <li><NavLink>RESUME</NavLink></li>
                            <li><NavLink>PROJECTS</NavLink></li>
                            <li><NavLink>BLOG</NavLink></li>
                            <li><NavLink>CONTACT</NavLink></li>
                            <li><NavLink>PAGES</NavLink></li>                        
                        </ul>
                    </div>
                    <a className=" text-xl lg:text-4xl font-bold text-[#0d6efd]">Afrin</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><NavLink>Home</NavLink></li>
                            <li><NavLink className="bg-white">SERVICES</NavLink></li>
                            <li><NavLink>RESUME</NavLink></li>
                            <li><NavLink>PROJECTS</NavLink></li>
                            <li><NavLink>BLOG</NavLink></li>
                            <li><NavLink>CONTACT</NavLink></li>
                            <li><NavLink>PAGES</NavLink></li> 
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;