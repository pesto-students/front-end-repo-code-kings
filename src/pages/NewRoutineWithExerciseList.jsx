import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'

const NewRoutineWithExerciseList = () => {
  const [isItemSelected, setSelectedItem] = useState(null)
  const navigate = useNavigate()

  const handleIsItemSelected = (data) => {
    setSelectedItem(data)
  }

  const handleClick = () => {
    navigate('/newRoutine/saveRoutine')
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
            value=""
            placeholder="Exercise Name"
            className="bg-transparent border-neutral-700 border-2 text-neutral-400 w-[90%] pl-3 text-2xl"
          />
          <div className="text-neutral-300 text-center flex gap-11 pl-[5%]">
            <div className="w-fit">
              <div>SET</div>
              <input
                type="text"
                name="set"
                defaultValue={1}
                className="bg-transparent max-w-[25px] text-center  focus:outline-none "
              />
            </div>
            <div className="w-fit">
              <div>KG</div>
              <input
                type="text"
                name="kg"
                defaultValue={1}
                className="bg-transparent max-w-[25px] text-center  focus:outline-none "
              />
            </div>
            <div className="w-fit">
              <div>REPS</div>
              <input
                type="text"
                name="reps"
                defaultValue={1}
                className="bg-transparent max-w-[25px] text-center  focus:outline-none "
              />
            </div>
          </div>
        </div>
        <div className="w-[90%]">
          <button className="bg-neutral-600  w-[90%] text-xl h-[45px] ">
            + Add Set
          </button>
          <button className="bg-blue-500 w-[90%] text-xl h-[45px] mt-[2%]">
            + Add Exercises
          </button>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default NewRoutineWithExerciseList
