import React from 'react'
import { useLocation } from 'react-router-dom'

const BaseFrameLayout = ({ children }) => {
  const location = useLocation()

  const isExercisesRoute = location.pathname === '/exercises'

  return (
    <div className="flex ">
      <div className="w-0.5 h-832 bg-neutral-500 absolute ml-340"></div>
      <div className="w-600 h-0.5 bg-neutral-500 absolute ml-340 mt-90"></div>
      {isExercisesRoute ? (
        <div></div>
      ) : (
        <div className="w-600 h-0.5 bg-neutral-500 absolute ml-340 mt-710"></div>
      )}
      <div className="w-0.5 h-832 bg-neutral-500 absolute ml-940"></div>
      {children}
    </div>
  )
}

export default BaseFrameLayout
