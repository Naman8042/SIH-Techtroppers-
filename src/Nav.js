import React from "react"
import loginpage from './loginpage.png'
import Test from './Test'
// import {AppBar,IconButton,Stack,Toolbar,Typography} from '@mui/material'
import Navbarlogo from './Navbarlogo.jpg'
// import { Link } from "@mui/material"
// import {Button} from "@mui/material"
import { useState } from "react"
function Navbar(){
    const[state,setstate]=useState(false);
    const onenter=()=>(
       setstate(true)
    )
    const ondenter=()=>(
       setstate(false)
    )
    return (
       
        <div className="flex h-16">
            <div className="w-11/12">
            <nav className="flex items-center justify-between   bg-green-600 sticky top-0 p-3 h-16">
            <div className="flex items-center justify-between">
                <button className="">
                    <img src={Navbarlogo} alt="techtroppers" className="w-24 h-16"/>
                </button>
                <span className="px-2">
                   <h2 className="text-3xl tracking-wide font-bold text-white"> E-waste Scout</h2>
                </span>
            </div>
            <div className=" flex">
                <ul className="flex items-center justify-center ">
                <li className="px-10   text-white text-2xl hover:text-lime-700 ease-in-out hover:border-solid hover:border-b-2 border-emerald-300 ">About</li>
                <li className="px-10   text-white text-2xl hover:text-lime-700 ease-in-out hover:border-solid hover:border-b-2 border-emerald-300">E-CAL</li>
                <li className="px-10   text-amber-300 text-2xl hover:text-lime-700 ease-in-out hover:border-solid hover:border-b-2 border-emerald-300">Learn & Explore</li>
                <li className="px-10 px-10   text-amber-300 text-2xl "><button className="text-white text-xl bg-lime-500 font-medium rounded-full text-sm px-5 py-2.5 text-center">LOCATE E-WASTE FACILITY</button></li>
                
                
                </ul> 
                <div>
            </div>   
            </div>  
             
        </nav>
        
            </div>
            <div onMouseLeave={ondenter} className="  w-1/12 items-center justify-between   bg-green-600 sticky top-0  ">
             <button onClick={onenter}  className=" justify-items-center  text-center h-16 py-2 px-4">
                <img  className="h-12 w-12 rounded-full "src={loginpage} alt=""/>
                
             </button>
             <div>
             {state?(
                    
                    <ul className="bg-green-600 mx-2">
            
            <li className="text-center border-2 text-white text-xl h-8">Your Profile </li>
            <li className="text-center border-2 text-white text-xl h-8">Sign Out </li>
        </ul>
                ):(null)}
             </div>
            </div>
        </div>

        
    )
}
export default Navbar