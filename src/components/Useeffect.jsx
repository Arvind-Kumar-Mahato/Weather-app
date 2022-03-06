import React, { useEffect, useState } from "react";

export const UseEffect=()=>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(count, "I'll get invoked only when the page mounts")

    },[])

    useEffect(()=>{
     console.log(count,"I will get invoked ")
    },[count])

    const handleClick = ()=>{
        setCount(count=>(count+10))
    }
    return(
        <>
        <h5>count:{count}</h5>
        <button onClick = {handleClick}>change</button>
         
         
        </>
    )
}