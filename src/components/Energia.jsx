import React, { Component } from 'react'

class Energia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleCheckboxChange = (event) => {
    this.setState({
      rememberMe: event.target.checked,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={this.handleFormSubmit}>
            <input
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="email"
              name="email"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  name="rememberMe"
                  checked={this.state.rememberMe}
                  onChange={this.handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Energia
