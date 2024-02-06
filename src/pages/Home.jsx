import { useState, useEffect } from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (
      localStorage.getItem('isLogin') === null ||
      localStorage.getItem('isLogin') === undefined ||
      localStorage.getItem('isLogin') === false
    ) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, [])

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
      {!isLogin && (
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
