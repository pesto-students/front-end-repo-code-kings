import React, { useEffect, useState } from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import WorkoutRecord from './components/WorkoutRecord'
import { Cookies } from 'react-cookie'
import axios from 'axios'

const Profile = () => {
  const cookies = new Cookies()
  const token = cookies.get('jwt')

  const [workoutRecords, setWorkoutRecords] = useState([])

  useEffect(() => {
    const fetchWorkoutRecords = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/workoutRecords/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        setWorkoutRecords(response.data.data.data)
        console.log(response.data.data.data)
      } catch (error) {
        // setError('Failed to fetch records.')
        console.log(error)
      }
    }
    fetchWorkoutRecords()
  }, [token])

  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <div className="fixed left-[25.1%] right-[20.25%] top-[8%] h-screen">
        <div className="text-neutral-400 text-3xl my-8 w-full text-center">
          Workout
        </div>
        <div className="h-screen overflow-hidden">
          <div className="items-center w-fit mx-auto overflow-y-auto no-scrollbar max-h-screen">
            {workoutRecords.map((workoutRecord, index) => (
              <WorkoutRecord key={index} workoutRecord={workoutRecord} />
            ))}
          </div>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default Profile
