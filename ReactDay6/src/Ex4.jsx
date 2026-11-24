import React , { useState } from 'react'

const Ex4 = () => {

    const [student, setStudent] = useState({
        id: 1,
        uname: 'abcd',
        marks: 88
    });

    function changeName()
    {

    }

    return (
        <>
            <p>Id : {student.id}</p>
            <p>Name : {student.uname}</p>
            <p>Marks : {student.marks}</p>

            <button onClick={add}>Add item</button>
        </>
    )


}

export default Ex3;
