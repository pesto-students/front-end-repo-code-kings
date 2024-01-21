import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className="w-full h-[8%] absolute text-white flex justify-between items-center">
      <div className="image w-fit h-full pt-[1%] ml-[2%]  hover:cursor-pointer">
        <img
          src="/Energia.png"
          alt="logo"
          className="h-[90%]"
          onClick={handleClick}
        />
      </div>
      {/* <div className=" mr-[2%]">
        <div className="hidden">Profile Name</div>
        <div className="avatar w-[50px]  h-[50px] rounded-full  overflow-hidden border-white">
          <img
            src="/pimage.jpg"
            className="h-[100%] w-[100%] object-cover"
            alt="profile logo"
          />
        </div>
      </div> */}
    </div>
  )
}

export default Logo
