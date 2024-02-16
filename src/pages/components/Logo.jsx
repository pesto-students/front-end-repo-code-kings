import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className="w-full h-[8%] max-sm:absolute text-white max-sm:flex max-sm:justify-between items-center">
      <div className="image w-fit h-full max-sm:pt-[1%] max-sm:ml-[2%]  hover:cursor-pointer">
        <img
          src="/Energia.png"
          alt="logo"
          className="h-[90%]"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default Logo
