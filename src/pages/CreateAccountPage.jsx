import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const CreateAccountPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Please provide valid information')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match")
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/users/signup',
        {
          name: username,
          email: email,
          password: password,
          passwordConfirm: confirmPassword,
        },
      )
      console.log(response.data)
      navigate('/signin')
    } catch (error) {
      console.error(error)
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="absolute top-8 w-[17.2%] h-[7.5%] left-8 m-2 object-cover">
        <img src="Energia.png" alt="Energía Logo" />
      </div>

      <div className="p-8 text-center">
        <p className="mb-6 tracking-wide font-bold text-2xl text-white-400">
          Elevate Your Fitness Journey with Energía
        </p>

        <div className="mb-4">
          <input
            className="w-60 p-2 mb-5 bg-gray-700 text-white"
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-60 p-2 mb-5 bg-gray-700 text-white"
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
            className="w-60 p-2 mb-5 bg-gray-700 text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-60 p-2 mb-5 bg-gray-700 text-white"
            type="password"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        <p className="text-xs text-white-400 mb-4">
          <p>By clicking Agree & Join, you agree to the LinkedIn</p>
          User Agreement, Privacy Policy, and Cookie Policy.
        </p>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          className="w-60 py-2  bg-blue-500 text-white mb-4"
          onClick={handleSignUp}
        >
          Agree & Join
        </button>
      </div>
      <div className="absolute bottom-0 w-full h-auto">
        <img src="vector-design.svg" alt="Your SVG Design" />
      </div>
    </div>
  )
}

export default CreateAccountPage
