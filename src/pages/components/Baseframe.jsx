import React from 'react'
import { useLocation } from 'react-router-dom'

const BaseFrameLayout = ({ children }) => {
  const location = useLocation()

  // const isExercisesRoute = location.pathname === '/exercises'
  const isNewRoutineRoute = location.pathname === '/newRoutine'
  const isNewRoutineWithExerciseRoute =
    location.pathname === '/newRoutine/addExercises'
  const isSaveRoutine = location.pathname === '/newRoutine/saveRoutine'

  return (
    <div className="items-center">
      <div className="w-0.5 h-full bg-neutral-500 max-sm:hidden absolute left-[25%] "></div>

      {isNewRoutineRoute || isNewRoutineWithExerciseRoute || isSaveRoutine ? (
        <>
          <div className="max-sm:w-full h-0.5 bg-neutral-500 absolute top-[8%] w-[35%] lg:left-[25%] md:left-[25%]"></div>
          <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[8%] w-[35%] lg:left-[25%] md:left-[25%]"></div>
          <div className="w-0.5 h-full bg-neutral-500 absolute max-sm:hidden right-[40%]"></div>
        </>
      ) : (
        <>
          <div className="max-sm:w-full h-0.5 bg-neutral-500 absolute top-[8%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
          <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[8%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
          <div className="w-0.5 h-full bg-neutral-500 absolute max-sm:hidden right-[20%]"></div>
        </>
      )}

      {children}
    </div>
  )
}

export default BaseFrameLayout
