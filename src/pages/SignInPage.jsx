import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSignIn = async () => {
    if (!email || !password) {
      setErrorMessage('Please provide valid information')
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/users/signin',
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        },
      )
      localStorage.setItem('isLogin', true)
      console.log(response.data)
      navigate('/')
    } catch (error) {
      console.error(error)
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Your logo at the top-left corner */}
      <Link to="/">
        <img
          src="Energia.png"
          alt="Energía Logo"
          className="absolute top-8 left-8 m-2"
        />
      </Link>

      <div className="p-10 text-center">
        <h2 className="text-5xl mb-8">Sign in</h2>

        <p className="mb-6 text-white ">
          Elevate Your Fitness Journey with Energía
        </p>

        <div className="mb-6">
          <input
            className="w-full p-2 mb-5 bg-gray-700 text-white "
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 mb-5 bg-gray-700 text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe)
              }}
              className=" border-gray-300 text-blue-500"
            />
            <label htmlFor="rememberMe" className=" ml-1">
              Remember me
            </label>
          </div>
          <Link to="/forgot-password" className="text-blue-500">
            Forgot password?
          </Link>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          className="w-full py-2  bg-blue-500 text-white mb-4"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <div className="ml-auto ">
          <Link to="/signup" className="text-blue-500  ml-40">
            Create account?
          </Link>
        </div>
      </div>

      <img
        src="vector-design.svg"
        alt="Your SVG Design"
        className="absolute bottom-0 w-full h-auto"
      />
    </div>
  )
}

export default SignInPage
