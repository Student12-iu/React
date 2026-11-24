import React from 'react'
import {useForm} from 'react-hook-form'

const Ex5 = () => {
const{ register , handleSubmit , formState:{errors}}= useForm();

function onSubmit(data){
    console.log(data);
    console.log('form submitted');

}

  return (
    <>
    <p>Ex5</p>
{/* 
    // useform is used to manage the form data handle input feilds and submit form data easily.
// useform is not a building react hook it comes from the external library called react hook form. */}


    <form action="" onSubmit={handleSubmit(onsubmit)}>
        Name : <input type='text' {...register("name",{
            required :"this field is required",
            minLength: {
                value: 3,
                message: "Min 3 Characters are required"
            },
            maxLength: {
                value : 8,
                message: "Max 8 characters are allowed"
            }
        }) } />

        Email : <input type='email' {...register("email",{
            required :"this field is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
        })} />
        
        <p style={{'color':'red'}}>{errors.name && errors.name.message }</p>
        <p style={{'color':'red'}}>{errors.email && errors.email.message }</p>

        <input type ="submit" name="" id="" />
    </form>
    </>
  )
}

export default Ex5


// {register,handleSubmit, fromState{Errors}}useform()
// <input { ...register ("name" {
//      required:' this is requiered'
// })
// }/>
// <p>{errors.name && errors.name.requiered}</p>
// <input { ...register ("pass", {
//              required: "pass is required"})}
// />