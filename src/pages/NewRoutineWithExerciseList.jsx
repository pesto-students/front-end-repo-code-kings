import React from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'
import SearchBar from './components/SearchBar'
import ExerciseBlock from './components/ExerciseBlock'

const NewRoutineWithExerciseList = () => {
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
      <div className=" text-white ml-[60%] mt-[4%] text-center flex flex-col items-center gap-10 ">
        <SearchBar />
        <div className="w-[90%] max-h-[565px] no-scrollbar overflow-y-auto text-center">
          <ExerciseBlock />
          <ExerciseBlock />
          <ExerciseBlock />
          <ExerciseBlock />
          <ExerciseBlock />
          <ExerciseBlock />
          <ExerciseBlock />
          <ExerciseBlock />
        </div>
        <div className="w-[90%]">
          <button className="bg-blue-500 text-xl h-[45px] w-full">
            Add Exercises
          </button>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default NewRoutineWithExerciseList
