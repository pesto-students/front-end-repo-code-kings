import React, { useEffect, useState } from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'
import RoutineBlock from './components/RoutineBlock'
import { useNavigate, useParams } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import axios from 'axios'

const EditRoutine = () => {
  const [exercises, setExercises] = useState([])
  const [routineName, setRoutineName] = useState('')
  const [error, setError] = useState('')
  const [routines, setRoutines] = useState([])

  const { id } = useParams()
  const navigate = useNavigate()
  const cookies = new Cookies()
  const token = cookies.get('jwt')

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const response = await axios.get(
          `https://energia-backend.onrender.com/api/v1/routines/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        setExercises(response.data.data.data.exercises)
        setRoutineName(response.data.data.data.name)
        console.log(response.data.data.data)
      } catch (error) {
        setError('Failed to fetch routine.')
      }
    }
    console.log(exercises, routineName)
    fetchRoutine()
  }, [id, token])

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const response = await axios.get(
          `https://energia-backend.onrender.com/api/v1/routines/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )

        setRoutines(response.data.data.data)
        console.log(response.data)
      } catch (err) {
        setError('Failed to fetch routine.')
        console.log(error)
      }
    }

    fetchRoutine()
  }, [token])

  const handleAddExercise = () => {
    navigate(`/routine/${id}/add-exercises`)
  }

  const handleSave = async () => {
    exercises.map(async (exercise) => {
      try {
        await axios.patch(
          `https://energia-backend.onrender.com/api/v1/exercises/${exercise._id}`,
          {
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
      } catch (error) {
        console.error(error)
      }
    })

    navigate('/home')
  }

  return (
    <>
      <BaseFrameLayout>
        <NavigationMenu />
        <RoutineMenu />
        <div className="text-white fixed  max-h-screen overflow-hidden  left-[25.25%] right-[34.4%] top-[54%]">
          <div className="text-3xl pl-[40px] py-6">My Routines</div>
          <div className="items-center">
            <div className="w-[71.79%] mx-auto h-[310px] overflow-y-scroll no-scrollbar">
              {routines.map((routine, index) => (
                <RoutineBlock key={index} routine={routine} />
              ))}
            </div>
          </div>
        </div>
        <div className="new-routine text-white ml-[65.5%]  text-center">
          <h1 className="text-2xl font-semibold leading-[20px] pt-[4.5%] text-center">
            Edit Routine
          </h1>
          <div className="h-0.5 bg-neutral-500 fixed top-[8%]  w-full"></div>
        </div>
        <div className=" text-white ml-[65.5%] mt-[4%] pt-[0.5%] text-center flex flex-col items-center gap-10 overflow-hidden">
          <input
            type="text"
            value={routineName}
            placeholder="Routine Name"
            className="bg-transparent border-neutral-700 border-2 text-neutral-400 w-[90%] pl-3 text-2xl"
          />
          <div className="w-[90%] no-scrollbar overflow-y-auto text-center flex flex-col gap-8">
            {exercises.map((exercise, index) => (
              <div key={index}>
                <div className="w-fit font-[500] text-xl pl-[5%] pb-3">
                  {exercise.name}
                </div>

                <div className="text-neutral-300 text-center flex gap-11 pl-[5%]">
                  <div className="w-fit">
                    <div>SET</div>
                    <input
                      type="text"
                      name="set"
                      value={exercise.sets}
                      defaultValue={1}
                      onChange={(e) =>
                        setExercises([
                          ...exercises.slice(0, index),
                          { ...exercise, sets: e.target.value },
                          ...exercises.slice(index + 1),
                        ])
                      }
                      className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                    />
                  </div>
                  <div className="w-fit">
                    <div>KG</div>
                    <input
                      type="text"
                      name="kg"
                      value={exercise.weight}
                      defaultValue={1}
                      onChange={(e) =>
                        setExercises([
                          ...exercises.slice(0, index),
                          { ...exercise, weight: e.target.value },
                          ...exercises.slice(index + 1),
                        ])
                      }
                      className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                    />
                  </div>
                  <div className="w-fit">
                    <div>REPS</div>
                    <input
                      type="text"
                      name="reps"
                      value={exercise.reps}
                      defaultValue={1}
                      onChange={(e) =>
                        setExercises([
                          ...exercises.slice(0, index),
                          { ...exercise, reps: e.target.value },
                          ...exercises.slice(index + 1),
                        ])
                      }
                      className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[90%]">
            <button
              className="bg-blue-500 w-[90%] text-xl h-[45px] mt-[2%]"
              onClick={handleAddExercise}
            >
              + Add Exercises
            </button>
            <button
              className="bg-neutral-600  w-[90%] text-xl h-[45px] mt-[2%]"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </BaseFrameLayout>
    </>
  )
}
export default EditRoutine
