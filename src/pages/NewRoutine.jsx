import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoutineMenu from './components/RoutineMenu'
import NavigationMenu from './components/NavigationMenu'
import BaseFrameLayout from './components/Baseframe'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const NewRoutine = () => {
  const [routineName, setRoutineName] = useState()
  const [error, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const cookie = new Cookies()
  const token = cookie.get('jwt')
  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [])

  const handleClick = async () => {
    if (!routineName) {
      setErrorMessage('Please Add Routine Name!')
      return
    } else {
      const routineId = await handleRoutineSave()

      navigate(`/routine/${routineId}/add-exercises`)
    }
  }

  const handleRoutineSave = async () => {
    if (!routineName) {
      setErrorMessage('Please Add Routine Name!')
      return
    } else {
      try {
        const response = await axios.post(
          'https://energia-backend.onrender.com/api/v1/routines/',
          {
            name: routineName,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        const routineId = response.data.data.data.id
        return routineId
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <RoutineMenu />
      <div className="new-routine text-white ml-[60%]  text-center">
        <h1 className="text-2xl font-semibold leading-[20px] pt-[4.5%] text-center">
          Create a new routine
        </h1>
        <div className="h-0.5 bg-neutral-500 fixed top-[8%]  w-full"></div>
      </div>
      <div className=" text-white ml-[60%] mt-[4%] text-center items-center ">
        <input
          type="text"
          value={routineName}
          placeholder="Routine Name"
          className="bg-transparent border-neutral-700 border-2 text-neutral-400 w-[90%] pl-3 text-2xl"
          onChange={(e) => {
            setErrorMessage('')
            setRoutineName(e.target.value)
          }}
        />
        <div className="text-neutral-300 text-xl  text-center pt-5 w-[70%] mx-auto">
          Get started by adding exercise to your routine
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-500 w-[90%] text-xl h-[45px] mt-[8%]"
          onClick={handleClick}
        >
          + Add Exercises
        </button>
        <button
          className="bg-neutral-600  w-[90%] text-xl h-[45px] mt-[2%]"
          onClick={handleRoutineSave}
        >
          Save
        </button>
      </div>
    </BaseFrameLayout>
  )
}

export default NewRoutine
