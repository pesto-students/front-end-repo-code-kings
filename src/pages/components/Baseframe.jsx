import React from 'react'
// import { useLocation } from 'react-router-dom'

const BaseFrameLayout = ({ children }) => {
  // const location = useLocation()

  // const isExercisesRoute = location.pathname === '/exercises'

  return (
    <div className="items-center">
      <div className="w-0.5 h-full bg-neutral-500 hidden"></div>
      <div className="w-full h-0.5 bg-neutral-500 absolute top-[8%]"></div>

      <div className="w-full h-0.5 bg-neutral-500  fixed bottom-[8%]"></div>
      <div className="w-0.5 h-full bg-neutral-500 absolute hidden"></div>
      {children}
    </div>
  )
}

export default BaseFrameLayout
