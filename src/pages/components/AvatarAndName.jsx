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
  const location = useLocation()

  const isNewRoutineRoute = location.pathname === '/newRoutine'
  const isNewRoutineWithExerciseRoute =
    useBasePath() === `/routine/:id/add-exercises`
  const isSaveRoutine = useBasePath() === `/routine/:id/save-routine`
  const isEditRoutine = useBasePath() === '/routine/:id/edit'

  const [user, setUser] = useState('')

  const handleClick = () => {
    navigate('/profile')
  }
  let image
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
      {isNewRoutineRoute || isNewRoutineWithExerciseRoute || isSaveRoutine ? (
        <div
          className="max-sm:mr-[2%] max-sm:right-[1%] flex absolute md:right-[41%] top-[1%] items-center w-fit gap-5 cursor-pointer"
          onClick={handleClick}
        >
          <div className="max-min:hidden lg:text-2xl">{user.name}</div>
          <div className="avatar w-[50px]  h-[50px] rounded-full  overflow-hidden border-white">
            <img
              src={image}
              className="h-[100%] w-[100%] object-cover"
              alt="profile logo"
            />
          </div>
        </div>
      ) : isEditRoutine ? (
        <div
          className="max-sm:mr-[2%] max-sm:right-[1%] flex absolute md:right-[36%] top-[1%] items-center w-fit gap-5 cursor-pointer"
          onClick={handleClick}
        >
          <div className="max-min:hidden lg:text-2xl">{user.name}</div>
          <div className="avatar w-[50px]  h-[50px] rounded-full  overflow-hidden border-white">
            <img
              src={image}
              className="h-[100%] w-[100%] object-cover"
              alt="profile logo"
            />
          </div>
        </div>
      ) : (
        <div
          className="max-sm:mr-[2%] max-sm:right-[1%] flex absolute md:right-[21%] top-[1%] items-center w-fit gap-5 cursor-pointer"
          onClick={handleClick}
        >
          <div className="max-min:hidden lg:text-2xl">{user.name}</div>
          <div className="avatar w-[50px]  h-[50px] rounded-full  overflow-hidden border-white">
            <img
              src={image}
              className="h-[100%] w-[100%] object-cover"
              alt="profile logo"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default AvatarAndName
