import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AccountPage = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    // Fetch user information when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user') // Update the endpoint to your user data endpoint
        setUserInfo(response.data.data.user)
      } catch (error) {
        console.error('Error fetching user data:', error)
        // Handle error, maybe redirect to login page
      }
    }

    fetchUserData()
  }, [])

  const onLogoutBtnContainerClick = useCallback(() => {
    navigate('/signin')
  }, [navigate])

  return (
    <div className="w-full relative bg-black h-screen overflow-hidden text-center text-13xl md:text-white font-roboto">
      {/* ... (Other components) */}
      <div className="absolute top-[207px] left-[340px] w-[600px] h-[76px]">
        <div className="absolute top-[75px] left-[45px] box-border w-[765px] h-0.5 border-t-[2px] border-solid border-gray-500" />
        {/* ... (Other components) */}
        <div className="absolute top-[15px] left-[223px] leading-[20px] capitalize hover:text-blue-500 text-2xl cursor-pointer">
          Account
        </div>
        <div className="absolute top-[0px] left-[115px] w-[50px] h-[50px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer">
          <img
            alt=""
            className="absolute top-[0%] left-[0%] max-w-full overflow-hidden max-h-full [transform:_rotate(-0.02deg)]"
            src="/account-icon.svg"
          />
        </div>
      </div>

      {/* Display user information */}
      {userInfo && (
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Account Information</h2>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>
            Date Joined: {new Date(userInfo.createdAt).toLocaleDateString()}
          </p>
          <p>Password: {userInfo.password}</p>
        </div>
      )}

      <button
        className="absolute top-[610px] left-[384px] w-[759px] md:w-[50%] h-[100px] md:h-[60px] bg-transparent hover:bg-white-500 text-red-700 text-2xl md:text-xl font-semibold hover:text-white py-2 px-4 md:py-1 md:px-2 border border-gray-500"
        onClick={onLogoutBtnContainerClick}
      >
        Log Out
      </button>
    </div>
  )
}

export default AccountPage
