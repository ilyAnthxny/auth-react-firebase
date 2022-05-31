import { Navigate, useNavigate} from 'react-router-dom';
import { useAuth } from "../context/authContext";

function Home() {

  const {user, logout, loading} = useAuth()
  // const navigate = useNavigate()

  const handleLogout = async ()=> {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  if(loading) return <h1>Loading...</h1>

  return (
    <div className='w-full max-w-xs m-auto'>
      <div className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 '>

        
      <h1 className='text-xl mb-4'>Welcome {user.displayName || user.email}</h1>

      <button onClick={handleLogout} className="bg-slate-200 hover:bg-slate rounded py-2 px-4 text-black">Logout</button>

      </div>

    </div>
  )
}

export default Home