import React from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import ExerciseBlock from './components/ExerciseBlock'
import SearchBar from './components/SearchBar'

const Exercises = () => {
  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <div className="top-[8%] left-[25.25%] right-[20.25%] absolute">
        <div className="new-routine text-white   text-center">
          <h1 className="text-2xl font-semibold leading-[20px] pt-[4.5%] text-center">
            Add Exercise
          </h1>
        </div>
        <div className=" text-white  mt-[4%] pt-[0.5%] text-center flex flex-col items-center gap-10 overflow-hidden">
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
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default Exercises
