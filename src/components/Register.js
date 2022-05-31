import React, {useState} from 'react'
import { useAuth } from '../context/authContext';
import {Link, useNavigate} from 'react-router-dom'
import Alert from './Alert';


export function Register() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const {signup} = useAuth()

  const navigate = useNavigate()

  const [error, setError] = useState()


  const handleChange = ({target: {name, value}}) =>{
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError("")

    try {
      await signup(user.email, user.password)
      navigate("/")

    } catch (error) {
      if(error.code === "auth/internal-error"){
        setError("Correo Invalido")
      }
    }
  }

  const handleResetPassword = () =>{
    if (!user.email) return setError("Please enter your email adddress")

    console.log("Reset")
  }


  return (

    <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error}/>}

      <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className='mb-4'>
          
          <label htmlFor="email" className='block text-gray-700 font-bold my-2'>Email</label>
            <input 
              type="email" 
              name='email' 
              placeholder="youremail@gmail.com"
              onChange={handleChange}
              className="shadow apprence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>


        </div>

        <div className='mb-4'>

            <label htmlFor="password" className='block text-gray-700 font-bold my-2' >Password</label>
              <input 
                type="password" 
                name='password' 
                id='password'
                onChange={handleChange}
                placeholder="******"
                className="shadow apprence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

        </div>

        <div className='flex items-center justify-between'>
            
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>

            <a hreef="#!" className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' onClick={handleResetPassword}>Forgot password?</a>

          </div>

      </form>

      <p className='my-4 text-sm flex justify-between px-3'>Already have an account?<Link to="/login">Login</Link></p>


    </div>
  )
}

export default Register;
