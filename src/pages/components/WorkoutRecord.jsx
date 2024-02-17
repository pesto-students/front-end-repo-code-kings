import React, { useEffect, useState } from 'react'
import ExerciseListItem from './ExerciseListItem'
import getUser from '../../utils/getUser'

const WorkoutRecord = ({ workoutRecord }) => {
  const [user, setUser] = useState('')
  const [exercises, setExercises] = useState([])
  const [routine, setRoutine] = useState({})

  let image
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setExercises(workoutRecord.exercises)
        setRoutine(workoutRecord.routine)
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

  function formatDate(timestamp) {
    const date = new Date(timestamp)
    const today = new Date() // Current date

    // Check if the date is today
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return 'Today'
    }

    // Get yesterday's date
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    // Check if the date is yesterday
    if (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    ) {
      return 'Yesterday'
    }

    // Format the date as DD/MM/YYYY
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    return formattedDate
  }

  return (
    <div className="h-[400px] w-[500px] bg-neutral-800 overflow-hidden mb-5">
      <div className="px-9 py-9  w-full h-full text-white">
        <div className="flex items-center gap-5">
          <div className="avatar w-[60px]  h-[60px] rounded-full  overflow-hidden border-white object-cover">
            <img
              src={image}
              className="h-[100%] w-[100%] object-cover"
              alt="profile logo"
            />
          </div>
          <div>
            <div className="text-xl">{user.name}</div>
            <div className="text-neutral-300">
              {formatDate(workoutRecord.createdAt)}
            </div>
          </div>
        </div>
        <div className="pl-[6px] mt-6 font-semibold text-xl">
          {routine.name}
        </div>
        <div className="flex pl-[6px] gap-6 mt-3">
          <div className="flex-col gap-3">
            <div className="text-[15px]">Time</div>
            <div className="text-[20px]">{workoutRecord.time} Min</div>
          </div>
          <div className="flex-col gap-3">
            <div className="text-[15px]">Weight</div>
            <div className="text-[20px]">{workoutRecord.weight} Kg</div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-neutral-500 mt-6"></div>
        <div className="mt-6 overflow-y-auto no-scrollbar max-h-[103px] ">
          {exercises.map((exercise, index) => (
            <ExerciseListItem exercise={exercise} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkoutRecord
