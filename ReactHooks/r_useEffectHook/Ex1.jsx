import React, { useEffect, useState } from 'react'

const Ex1 = () => {

    const[count , setCount] = useState(0);
// Case 1: With Dependancy Array
    useEffect(() => {
      
    console.log('Ex1 Ccomponent Rendered');
    
    }, [])
    

  return (
    <>
    
    <p>Ex1.jsx</p>

    <h1>Count : {count}</h1>

    <button onClick={()=> setCount(count + 1)}>Increase</button>
    
    </>

  )
}

export default Ex1