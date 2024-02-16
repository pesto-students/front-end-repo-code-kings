import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import getUser from '../../utils/getUser'

export const useBasePath = () => {
  const location = useLocation()
  const params = useParams()

  return Object.entries(params).reduce(
    (path, [key, value]) => path.replace('/' + value, '/:' + key),
    location.pathname,
  )
}

const AvatarAndName = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState('')

  const handleClick = () => {
    navigate('/profile')
  }
  let image = `https://ui-avatars.com/api/?name=${user.name}&background=random&length=1`
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        console.log(userData)
        setUser(userData)
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }
    fetchUser()
  }, [])

  if (!user.image) {
    image = `https://ui-avatars.com/api/?name=${user.name}&background=random&length=1`
  } else {
    image = user.image
  }

  return (
    <>
      <div
        className="max-sm:mr-[2%] max-sm:right-[1%] flex absolute md:left-[27%] top-[1%] items-center w-fit gap-5 cursor-pointer"
        onClick={handleClick}
      >
        <div className="avatar w-[50px]  h-[50px] rounded-full  overflow-hidden border-white">
          <img
            src={image}
            className="h-[100%] w-[100%] object-cover"
            alt="profile logo"
          />
        </div>
        <div className="max-min:hidden lg:text-2xl">{user.name}</div>
      </div>
    </>
  )
}

export default AvatarAndName
