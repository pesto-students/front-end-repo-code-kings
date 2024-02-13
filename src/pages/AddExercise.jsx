import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const AddExercise = () => {
  const [exerciseName, setExerciseName] = useState()
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [error, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const cookie = new Cookies()
  const token = cookie.get('jwt')
  const params = useParams()

  const handleCreateExercise = async () => {
    if (!exerciseName) {
      setErrorMessage('Please Add Exercise Name!')
      return
    }

    const routineId = params.id

    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/routines/${routineId}/exercises`,
        {
          name: exerciseName,
          sets: sets,
          reps: reps,
          weight: weight,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(response.data)
      navigate(`/routine/${routineId}/save-routine`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <RoutineMenu />
      <div className="new-routine text-white ml-[60%]  text-center">
        <h1 className="text-2xl font-semibold leading-[20px] pt-[4.5%] text-center">
          Add Exercise
        </h1>
        <div className="h-0.5 bg-neutral-500 fixed top-[8%]  w-full"></div>
      </div>
      <div className=" text-white ml-[60%] mt-[4%] pt-[0.5%] text-center flex flex-col items-center gap-10 overflow-hidden">
        <div className="w-[90%] no-scrollbar overflow-y-auto text-center flex flex-col gap-8">
          <input
            type="text"
            value={exerciseName}
            placeholder="Exercise Name"
            className="bg-transparent border-neutral-700 border-2 text-neutral-400 w-[90%] pl-3 text-2xl"
            onChange={(e) => {
              setErrorMessage('')
              setExerciseName(e.target.value)
            }}
          />
          <div className="text-neutral-300 text-center flex gap-11 pl-[5%]">
            <div className="w-fit">
              <div>SET</div>
              <input
                type="text"
                name="set"
                value={sets}
                placeholder="1"
                className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                onChange={(e) => setSets(e.target.value)}
              />
            </div>
            <div className="w-fit">
              <div>KG</div>
              <input
                type="text"
                name="kg"
                value={weight}
                placeholder="1"
                className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="w-fit">
              <div>REPS</div>
              <input
                type="text"
                name="reps"
                placeholder="1"
                value={reps}
                className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                onChange={(e) => setReps(e.target.value)}
              />
            </div>
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-[90%]">
          <button className="bg-neutral-600  w-[90%] text-xl h-[45px] ">
            + Add Set
          </button>
          <button
            className="bg-blue-500 w-[90%] text-xl h-[45px] mt-[2%]"
            onClick={handleCreateExercise}
          >
            + Add Exercises
          </button>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default AddExercise
