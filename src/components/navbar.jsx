import Logo from "../images/default-logo.png"
import Search from "../images/icons8-search (1).svg"
import { useState } from "react";



const Navbar = () => {
    
     const [homeIsOpen, setHomeIsOpen] = useState(false);
     
     const openHomeState = () => {setHomeIsOpen(!homeIsOpen)}
     const closeHomeState = () => {setHomeIsOpen(homeIsOpen)}

return  <div className="w-full">
    <div>
            {/* border top */}
        <ul className="grid px-2 h-32 grid-cols-10 uppercase font-custom text-white bg-black font-black items-center border-t-2 border-slate-600 border-solid">

            {/* logo */}
            <li className="col-span-2"><a href="#"><img src={Logo} alt="" /></a></li>

            {/* nav element */}
            {/* Home */}
            <li onMouseEnter={openHomeState}  className="home hidden lg:block p-1  hover:text-red-600 transition duration-200 ease-in-out cursor-pointer "><a href="#"></a>home
                {homeIsOpen && (
                    <div onMouseLeave={closeHomeState} className="absolute  p-5 pr-48 bg-black text-white text-left 
                    ">
                        <ul>
                            <li className="py-2"><a className="hover:text-red-600 font-bold text-white" href="#">mastermind</a></li>
                            <li className="py-2"><a className="hover:text-red-600 font-bold text-white" href="#">denizen</a></li>
                            <li className="py-2"><a className="hover:text-red-600 font-bold text-white" href="#">equalizer</a></li>
                            <li className="py-2"><a className="hover:text-red-600 font-bold text-white" href="#">mainfesto</a></li>
                            <li className="py-2"><a className="hover:text-red-600 font-bold text-white" href="#">gonzo</a></li>
                            <li className="py-2"><a className="hover:text-red-600 font-bold text-white" href="#">rorschach</a></li>
                            <li className="py-2"><a className="hover:text-red-600 font-bold text-white" href="#">landing</a></li>
                        </ul>
                    </div>
                )}
            </li>
            {/* Features */}
            <li className="hidden lg:block p-1  hover:text-red-600 transition duration-200 ease-in-out cursor-pointer"><a href="#"></a>features</li>
            {/* PAges */}
            <li className="hidden lg:block p-1  hover:text-red-600 transition duration-200 ease-in-out cursor-pointer"><a href="#"></a>pages</li>
            {/* New */}
            <li className="hidden lg:block p-1  hover:text-red-600 transition duration-200 ease-in-out cursor-pointer"><a href="#"></a>new</li>
            {/* Video */}
            <li className="hidden lg:block p-1  hover:text-red-600 transition duration-200 ease-in-out cursor-pointer"><a href="#"></a>video</li>
            {/* Mood */}
            <li className="hidden lg:block p-1  hover:text-red-600 transition duration-200 ease-in-out cursor-pointer"><a href="#"></a>mood</li>
            {/* Search-icon */}
            <li className="hidden lg:flex p-1 justify-center items-center h-full border-x-2 border-slate-600 border-solid"><a href="#"><img src={Search} alt="Search icon" /></a></li>
            {/* hamburger */}
            <li className="p-1 absolute right-20 hamburger"><a href="#">
                <ul className="group grid place-content-center">
                    <li className="h-1 w-8 bg-white mt-2 group-hover:bg-red-600 group-hover:w-8 transition duration-300 ease-in-out"><span></span></li>
                    <li className="h-1 w-4 bg-white mt-2 group-hover:bg-red-600 group-hover:w-8 transition duration-300 ease-in-out"><span></span></li>
                    <li className="h-1 w-8 bg-white mt-2 group-hover:bg-red-600 group-hover:w-8 transition duration-300 ease-in-out"><span></span></li>
                </ul>
            </a></li>
        </ul>
    </div>
</div>

}

export default Navbar