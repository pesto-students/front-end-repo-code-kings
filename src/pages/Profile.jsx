import React from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import WorkoutRecord from './components/WorkoutRecord'

const Profile = () => {
  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <div className="fixed left-[25.1%] right-[20.25%] top-[8%] h-screen">
        <div className="text-neutral-400 text-3xl my-8 w-full text-center">
          Workout
        </div>
        <div className="h-screen overflow-hidden">
          <div className="items-center w-fit mx-auto overflow-y-auto no-scrollbar max-h-screen">
            <WorkoutRecord />
            <WorkoutRecord />
            <WorkoutRecord />
            <WorkoutRecord />
            <WorkoutRecord />
          </div>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default Profile
