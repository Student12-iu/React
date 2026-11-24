import React , { useRef } from 'react'

const Ex2 = () => {
    let userRef = useRef();
    let emailRef = useRef();

    function submit(e){
        e.preventDefault();
        let user = userRef.current.value;
        let email = emailRef.current.value;
        console.log('user : '+user);
         console.log('eamil : '+email);
    }
    return (
        <>
        <form action ="" onSubmit={submit} >
            User Name :  <input type="text" ref = {userRef} name=" " id=" " /> <br /><br />
            User Email : <input type="text" ref={emailRef}  name="" id= "" /> <br /> <br />
        <input type="submit" name="" id=""/>
        
        </form>
        </>
    )
}

export default Ex2;