import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleChangePassword = async () => {
    if (!email || !newPassword || !confirmPassword) {
      setErrorMessage('Please provide valid information')
      return
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match")
      return
    }

    try {
      const response = await axios.post(
        'https://energia-app.vercel.app/api/v1/users/forgotPassword',
        {
          email: email,
          password: newPassword,
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
      <Link to="/">
        <img
          src="Energia.png"
          alt="Energía Logo"
          className="absolute top-8 left-8 m-2"
        />
      </Link>

      <div className="p-8 text-center">
        <h2 className="text-5xl mb-8">Forgot Password</h2>

        <div className="mb-4">
          <input
            className="w-60 p-2 mb-2 bg-gray-700 text-white"
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
            className="w-60 p-2 mb-2 bg-gray-700 text-white"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-60 p-2 mb-2 bg-gray-700 text-white"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              setErrorMessage('')
            }}
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          className="w-60 py-2 rounded bg-blue-500 text-white mb-2"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </div>

      <img
        src="vector-design.svg"
        alt="Your SVG Design"
        className="absolute bottom-0 w-full h-auto"
      />
    </div>
  )
}

export default ForgotPasswordPage
