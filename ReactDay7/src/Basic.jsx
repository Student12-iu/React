



function Basic(){
      let user = 'Vineet';
      let city = 'Pune';

      function welcome(){
        alert('Welcome');
      }

      function call(){
        return <h2>Call</h2>
      }

      let arr = [1,2,3,4,5];

      let names = ['Vineet','Shantanu','Pradnya','Swarali'];

      let nameObj = {
        id:1 ,
        n_name: 'Vineet',
        course: 'IT'
      }

      let empArr = [
        {eid : 101, ename : 'Vineet' , esalary: 100000 },
        {eid : 102, ename : 'Shantanu' , esalary: 80000 },
        {eid : 103, ename : 'Pradnya' , esalary: 90000 },
        {eid : 104, ename : 'Swarali' , esalary: 75000 }

      ]


    return(
        <>
        <h1> Hello </h1>
        <h2> This is a basic componenet.</h2>
         <div>Name : {user}</div>
         <div>City : {city} </div>
    
        
        <button onClick={ welcome } > Welcome </button> 

        {call()}
{/* 
        <p> {arr[0]}</p>
        <p>{arr[1]}</p>
        <p>{arr[2]}</p>
        <p>{arr[3]}</p>
        <p>{arr[4]}</p> */}

{/* 
        {
            arr.forEach((a)=>{
               console.log(a);
               
            })
        } */}

        {
            arr.map((a)=>(
                <p> {a} </p>
            ))
        }
{/* 
        {
            names.map((b)=>(
                <p> {b} </p>
            ))
        } */}

        {/* <ul>
            { 
                names.map((s)=>(
                    <li> <p> {s} </p></li>
                ))
            }
        </ul> */}

        <select>
            {
                names.map((s)=>(
                    <option value="">  {s}  </option>
                ))
            }
        </select>

        <p> {nameObj.id }</p>
        <p> {nameObj.n_name }</p>
        <p> {nameObj.course }</p>


        < hr/>

        {
            empArr.map((e)=>(
                <p> {e.eid} - {e.ename} - {e.esalary} </p>
            ))
        }

        </>
    )
}

export default Basic;
