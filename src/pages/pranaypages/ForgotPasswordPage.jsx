import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validateForm = () => {
    let formErrors = {}

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) formErrors.email = 'Invalid email'

    setErrors(formErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    validateForm()

    try {
      if (Object.keys(errors).length === 0) {
        const response = await axios.post('/your-api-endpoint', {
          email: email,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        })

        console.log(response.data)
        // Clear the form
        setEmail('')
        setNewPassword('')
        setConfirmPassword('')
        navigate('/signin')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const onChangePasswordClick = () => {
    navigate('/signin')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img
        src="Energia.png"
        alt="Energía Logo"
        className="absolute top-8 left-8 m-2"
      />

      <div className="p-8 text-center">
        <h2 className="text-5xl mb-8">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-60 p-2 mb-2 bg-gray-700 text-white"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              className="w-60 p-2 mb-2 bg-gray-700 text-white"
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-60 p-2 mb-2 bg-gray-700 text-white"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="w-60 py-2 rounded bg-blue-500 text-white mb-2"
            disabled={!email || !newPassword || !confirmPassword}
            onClick={onChangePasswordClick}
          >
            Change Password
          </button>
        </form>
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
