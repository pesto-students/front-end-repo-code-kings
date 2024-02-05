import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormInvalid, setIsFormInvalid] = useState(true)

  const validateForm = () => {
    let formErrors = {}

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) formErrors.email = '' //invalid email

    // Password length validation
    if (password.length < 8) formErrors.password = '' //password must be at least 8 characters

    setErrors(formErrors)
    setIsFormInvalid(Object.keys(formErrors).length !== 0)
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    validateForm()
  }, [email, password])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isFormInvalid) {
      try {
        const response = await axios.post('/api/auth/signin', {
          email,
          password,
        })
        if (response.status === 200) {
          // Handle successful authentication, e.g., redirect to a dashboard
          console.log('Successfully signed in')
        } else {
          // Handle authentication error
          console.error('Failed to sign in')
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error during sign in:', error)
      }
      // Handle form submission here
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Your logo at the top-left corner */}
      <img
        src="Energia.png"
        alt="Energía Logo"
        className="absolute top-8 left-8 m-2"
      />

      <div className="p-10 text-center">
        <h2 className="text-5xl mb-8">Sign in</h2>

        <p className="mb-6 text-white ">
          Elevate Your Fitness Journey with Energía
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              className="w-full p-2 mb-5 bg-gray-700 text-white "
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 mb-5 bg-gray-700 text-white"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
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
          <button
            className="w-full py-2  bg-blue-500 text-white mb-4"
            disabled={isFormInvalid}
          >
            Sign In
          </button>
          <div className="ml-auto ">
            <Link to="/create-account" className="text-blue-500  ml-40">
              Create account?
            </Link>
          </div>
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

export default SignInPage
