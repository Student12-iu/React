import { useForm } from 'react-hook-form'
import './Register.css'

const Register = () => {

  const { register, handleSubmit, formState:{errors} } = useForm()
  function onSubmit(data) {
    console.log(data);
    console.log('form submitted');
  }

  return (
    <main className="register-page">
      
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Your Account</h1>
        <label htmlFor="register-name">Full Name</label>
        <input id="register-name" type="text" {...register('name',
            {
            required :"this field is required",
            minLength: {
                value: 3,
                message: "Min 3 Characters are required"
            },
            maxLength: {
                value : 8,
                message: "Max 8 characters are allowed"
            }
          })} />

           <p style={{'color':'red'}}>{errors.name && errors.name.message }</p>

        <label htmlFor="register-name">User Name</label>
        <input id="register-name" type="text" {...register('username',
          {
            required : "This field is required",
            pattern :{
              value : "[a-zA-Z0-9_]{3,16}",
              message : "This is invalid"
            }
            
          }
        )} />

           <p style={{'color':'red'}}>{errors.username && errors.username.message }</p>

        <label htmlFor="register-email">Email</label>
        <input id="register-email" type="email" {...register('email',
          {
            required: "This field is required",
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          }
        )} />

        <p style={{color:"red"}}>{errors.email && errors.email.message}</p>

        <label htmlFor="register-password">Password</label>
        <input id="register-password" type="text" {...register('name')} />

        <label htmlFor="register-Cpassword">Confirm Password</label>
        <input id="register-Cpassword" type="text" {...register('name')} />

        <label htmlFor="register-phone">Phone No.</label>
        <input id="register-phone" type="text" {...register('phone')} />

        <button type="submit">Register</button>
      </form>
    </main>
  )
}

export default Register