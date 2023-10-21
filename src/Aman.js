import React from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "./redux/slices/productSlices"
export default function Naman(){
    const dispatch=useDispatch();
    // const data=[
    //     {
    //         id:"1",
    //         title:"naman",
    //         price:"100"
    //     }
    // ]
    return (
        <div>
        <button onClick={()=>{
            dispatch(
                addProduct({
                    
                })
            )
        }}
        >+</button>
        <button>-</button>
        </div>
    )
}