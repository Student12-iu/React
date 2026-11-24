
const Basic = () => {

let arr = [1,2,3,4,5];

let students = ['firoj','aniket','pranay','vineet'];

let studentObj = {
    name: 'firoj',
    age: 22,
    city: 'pune'
    }

let emparr = [
    {eid: 1, ename: 'firoj', esal: 10000},
    {eid: 2, ename: 'aniket', esal: 20000},
    {eid: 3, ename: 'pranay', esal: 30000},
    {eid: 4, ename: 'vineet', esal: 40000},


];

  return (
    <>
    
    <div>Basic</div>

    <h2>This is Basic Component  </h2>
    

    <p> { arr[0] }</p>
     <p> {arr[1] }</p>
     <p> { arr[2] }</p>
     <p> {arr[3] }</p>

    {
            arr.map((a) => (
                <p> {a} </p>
            ))
    }
{
    students.map((s) =>(
    <ul>
        <li>{s}</li>
    </ul>
    ))

}

<select>
    {
        students.map((s) =>(
                <option value="">{s}</option>
        ))
    }
</select>

<p> { studentObj.name } </p>
<p> { studentObj.age } </p>
<p> { studentObj.city } </p>


{
    emparr.map((e) =>(
        <p> {e.eid} - {e.ename} - {e.esal}</p>
    )
    )
}




    </>

  )
}

export default Basic