import React, {useState, useEffect} from 'react'

const Ex1 = () => {

    // const [user , setUser] = useState(' ');

    // const[userName , setUserName] = useState( ' ' );
  const [count, setcount] = useState(0);
  
  useEffect(()=>{
    console.log('i am rendering this first time');
  },[count])

  return (
    <>
{/*     
    Name: <input type="text" name='' onChange={ (e)=> setUser(e.target.value)} />

    <p> User : {user} </p>

    <button onClick={(e)=> setUserName(user) }>Click Me !</button>

    <p>{userName}</p> */}

    <p>Ex1</p>

    <button onClick={()=> setcount(count+1)}>Click</button>
    <h2>Count: {count}</h2>
    </>
  )
}

export default Ex1