import React, { useEffect, useState } from 'react'

const Ex2 = () => {

    const[count , setCount] = useState(0);
    const[name, setName] = useState('user');
// Case 1: Without Dependancy Array
    useEffect(() => {
      
    console.log('Ex2 Ccomponent Rendered');  //on every render
    
    },[count])
    

  return (
    <>
    
    <p>Ex2.jsx</p>

    <h1>Number : {count}</h1>

    <button onClick={()=> setCount(count + 1)}>Increase</button>

    <hr/>

    <h2>Name : {name}</h2>

    <button onClick={()=> setCount(count+1)}>Changename</button>
    
    </>

  )
}

export default Ex2