import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
const initState = {
    query :"",
    data :[]
}
export const WeatherInfo =()=>{
    const [state, setState] = useState(initState)
    const[loading, setloading] = useState(false)
      const handlechange = (e)=>{
          console.log(e.target.value);
          setState({...state, query:e.target.value})
      }
      useEffect(()=>{
          handleSearch();
      },[])
      const handleSearch =()=>{
          //api call to weather api
          //params
          //apikey
          //q
          setloading(true)
          axios({
              method:"get",
              baseURL:" http://api.weatherapi.com/v1",
              url:"/current.json",
              params:{
                  key:"0c22ded8e5f54894bb9142632220403",
                  q:state.query || "delhi"
              }
          })
         .then(res=>setState({...state,data:res.data}))
         .catch(err=>console.log(err))
         .finally(()=>setloading(false))
      }
      console.log(state.data,"state")
    return(
        <>
            <h1>Search for Weather Info of different Cities</h1>
            <input placeholder="enter city name" value = {state.query} onChange={handlechange}/>
            <button onClick = {handleSearch}>Search</button>
            {loading && <h1>Loading....</h1>}
            {state?.data?.location && 
            <h2>{state.data?.location?.name}</h2>}
            {state?.data?.current && <>
            <h5>{state?.data?.current?.condition?.text}</h5>
            <img src={state?.data?.current?.condition?.icon} alt="weather icon"/>
            </>
            }
        </>
    )
}

//useEffect
//delhi => default city
//useEffect (callback, dependancy array)