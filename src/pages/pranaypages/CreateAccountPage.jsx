import React, { useState } from 'react'

const CreateAccountPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let formErrors = {}

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) formErrors.email = 'Invalid email'

    // Add more validation logic for password if needed

    setErrors(formErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    validateForm()
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img
        src="Energia.png"
        alt="Energía Logo"
        className="absolute top-8 left-8 m-2"
      />

      <div className="p-8 text-center">
        <p className="mb-6 tracking-wide font-bold text-2xl text-white-400">
          Elevate Your Fitness Journey with Energía
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-60 p-2 mb-5 bg-gray-700 text-white"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              className="w-60 p-2 mb-5 bg-gray-700 text-white"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-xs text-white-400 mb-4">
            <p>By clicking Agree & Join, you agree to the LinkedIn</p>
            User Agreement, Privacy Policy, and Cookie Policy.
          </p>
          <button
            className="w-60 py-2  bg-blue-500 text-white mb-4"
            disabled={!email || !password}
          >
            Agree & Join
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

export default CreateAccountPage
