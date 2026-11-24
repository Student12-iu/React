import React , { useState } from 'react'
const Ex3 = () => {

    const [names, setNmaes] = useState(['shivani','diptesh']);

    function add()
    {
        setNmaes([...names , 'new']);
    }

    return (
        <>
            <p>Ex.3</p>
            {
                names.map((n)=>(
                    <p>{n}</p>
                ))
            }

            <button onClick={add}>Add item </button>
        </>
    )
}

export default Ex3