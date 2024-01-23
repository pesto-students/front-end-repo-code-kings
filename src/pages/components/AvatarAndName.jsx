import React from 'react'
import { useNavigate } from 'react-router-dom'

const AvatarAndName = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/profile')
  }

  return (
    <div
      className="max-sm:mr-[2%] max-sm:right-[1%] flex absolute md:right-[21%] top-[1%] items-center w-fit gap-5 cursor-pointer"
      onClick={handleClick}
    >
      <div className="max-min:hidden lg:text-2xl">Profile Name</div>
      <div className="avatar w-[50px]  h-[50px] rounded-full  overflow-hidden border-white">
        <img
          src="/pimage.jpg"
          className="h-[100%] w-[100%] object-cover"
          alt="profile logo"
        />
      </div>
    </div>
  )
}

export default AvatarAndName
