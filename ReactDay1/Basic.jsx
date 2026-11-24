
function Basic(){

    let user = 'Vineet';

    let city = 'pune';

    function welcome(){
        alert('Welcome');
    }

    return (
        <>
        <div>This is basic copmponenet</div>
        <div>Name : {user} </div>
        <div>City : {city} </div>

        <button onClick={ welcome}>Welcome</button>
        </>
    )
}

export default Basic