import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoutineMenu from './components/RoutineMenu'
import NavigationMenu from './components/NavigationMenu'
import BaseFrameLayout from './components/Baseframe'

const NewRoutine = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/newRoutine/addExercises')
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
          value=""
          placeholder="Routine Name"
          className="bg-transparent border-neutral-700 border-2 text-neutral-400 w-[90%] pl-3 text-2xl"
        />
        <div className="text-neutral-300 text-xl  text-center pt-5 w-[70%] mx-auto">
          Get started by adding exercise to your routine
        </div>
        <button
          className="bg-blue-500 w-[90%] text-xl h-[45px] mt-[8%]"
          onClick={handleClick}
        >
          + Add Exercises
        </button>
        <button className="bg-neutral-600  w-[90%] text-xl h-[45px] mt-[2%]">
          Save
        </button>
      </div>
    </BaseFrameLayout>
  )
}

export default NewRoutine
