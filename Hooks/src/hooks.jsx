import React, { userstate, useState } from "react";
export default function HooksExample1(){
    const[count,setcount] = useState(0);
    const[name,setname] = useState("");
    const[selected,setselected] = useState(false);
    return(
        <>
           <h1>count: {count}</h1>
         
        <button on onClick={() => setcount(count +1 )}>Increment</button>
        <button on onClick={() => setcount(count -1 )}>Decrement</button>
        <br/>
        
         <h2>name: {name}</h2>
        <input
        type="text"
        placeholder="name"
        onChange={(e) => setname(e.target.value)}
        />
        <br/>
        {"selected value"}:{selected ? "true" :"false"}
        <input
        type="checkbox"
        checked={selected}
        onChange={() =>setselected(!selected)}
        /> 
        </>
       
    );
}