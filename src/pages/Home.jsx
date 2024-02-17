import { Cookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {
  const navigate = useNavigate()
  const cookie = new Cookies()
  const token = cookie.get('jwt')

  const handleSignIn = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/signup')
  }

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const response = await axios.get(
          `https://energia-backend.onrender.com/api/v1/routines/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        const length = response.data.results
        console.log(response.data.results)
        if (length > 0) {
          navigate('/home')
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchRoutine()
  }, [token])

  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <RoutineMenu />
      {!token && (
        <div className="text-white flex gap-5   absolute md:right-[21%] top-[2%] ">
          <button
            className="px-4 py-1 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <button
            className="px-4 py-1 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-400"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      )}
    </BaseFrameLayout>
  )
}

export default Home
