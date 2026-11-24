import React , {useState}from 'react'

const UseState = () => {

    const [user ,setUser] = useState('') ;


const [ inputValue, setInputValue ] = useState('');

const [clickValue, setClickValue] = useState('');

    
  return (

    <>
       
      <div>
         Name: <input type="text" onChange={(e) => setUser(e.target.value)} />
         <p>User: {user}</p>
         </div>


          <div>
                 Click Name : <input type="text" onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => setClickValue(inputValue)}>Click to Print</button>

             <p>{clickValue}</p>
           </div>



    </>
  )
}

export default UseState