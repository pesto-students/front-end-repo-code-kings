import { Cookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'

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
            Sign IN
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
