import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const useBasePath = () => {
  const location = useLocation()
  const params = useParams()

  return Object.entries(params).reduce(
    (path, [key, value]) => path.replace('/' + value, '/:' + key),
    location.pathname,
  )
}

const BaseFrameLayout = ({ children }) => {
  const location = useLocation()

  const isExercisesRoute = location.pathname === '/exercises'
  const isProfile = location.pathname === '/profile'
  const isNewRoutineRoute = location.pathname === '/newRoutine'
  const isNewRoutineWithExerciseRoute =
    useBasePath() === '/routine/:id/add-exercises'
  const isSaveRoutine = useBasePath() === `/routine/:id/save-routine`
  const isHomeWithRoutineRoute = location.pathname === '/home'
  const isEditRoutine = location.pathname === '/routine/edit'
  const isSettingsRoute = location.pathname === '/setting'

  return (
    <div className="items-center">
      <div className="w-0.5 h-full bg-neutral-500 max-sm:hidden absolute left-[25%] "></div>

      {isNewRoutineRoute || isNewRoutineWithExerciseRoute || isSaveRoutine ? (
        <>
          <div className="max-sm:w-full h-0.5 bg-neutral-500 absolute top-[8%] w-[35%] lg:left-[25%] md:left-[25%]"></div>
          <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[8%] w-[35%] lg:left-[25%] md:left-[25%]"></div>
          <div className="w-0.5 h-full bg-neutral-500 absolute max-sm:hidden right-[40%]"></div>
        </>
      ) : isHomeWithRoutineRoute ? (
        <>
          <div className="max-sm:w-full h-0.5 bg-neutral-500 absolute top-[8%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
          <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[46%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
          <div className="w-0.5 h-full bg-neutral-500 absolute max-sm:hidden right-[20%]"></div>
        </>
      ) : isEditRoutine ? (
        <>
          <div className="max-sm:w-full h-0.5 bg-neutral-500 absolute top-[8%] w-[40.5%] lg:left-[25%] md:left-[25%]"></div>
          <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[46%] w-[40.5%] lg:left-[25%] md:left-[25%]"></div>
          <div className="w-0.5 h-full bg-neutral-500 absolute max-sm:hidden right-[34.4%]"></div>
        </>
      ) : isExercisesRoute || isProfile ? (
        <>
          <div className="max-sm:w-full h-0.5 bg-neutral-500 absolute top-[8%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
          {/* <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[8%] w-[55%] lg:left-[25%] md:left-[25%]"></div>  */}
          <div className="w-0.5 h-full bg-neutral-500 absolute max-sm:hidden right-[20%]"></div>
        </>
      ) : isSettingsRoute ? (
        <>
          <div className="max-sm:w-full h-0.5 bg-neutral-500 absolute top-[9.4%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
          <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[8%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
          <div className="w-0.5 h-full bg-neutral-500 absolute max-sm:hidden right-[20%]"></div>
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
