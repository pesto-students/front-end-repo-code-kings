import React from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'
import RoutineBlock from './components/RoutineBlock'

const HomeWithRoutines = () => {
  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <RoutineMenu />
      <div className="text-white fixed w-[54.5%] max-h-screen overflow-hidden  left-[25.25%] right-[20.25%] top-[54%]">
        <div className="text-3xl pl-[40px] py-6">My Routines</div>
        <div className="items-center">
          <div className="w-[71.79%] mx-auto min-h-[310px] overflow-y-scroll no-scrollbar">
            <RoutineBlock />
            <RoutineBlock />
            <RoutineBlock />
          </div>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default HomeWithRoutines
