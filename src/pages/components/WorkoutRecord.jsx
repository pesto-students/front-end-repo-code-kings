import React from 'react'
import ExerciseListItem from './ExerciseListItem'

const WorkoutRecord = () => {
  return (
    <div className="h-[400px] w-[500px] bg-neutral-800 overflow-hidden mb-5">
      <div className="px-9 py-9  w-full h-full text-white">
        <div className="flex items-center gap-5">
          <div className="avatar w-[60px]  h-[60px] rounded-full  overflow-hidden border-white object-cover">
            <img
              src="/pimage.jpg"
              className="h-[100%] w-[100%] object-cover"
              alt="profile logo"
            />
          </div>
          <div>
            <div className="text-xl">User Name</div>
            <div className="text-neutral-300">Today</div>
          </div>
        </div>
        <div className="pl-[6px] mt-6 font-semibold text-xl">Routine Name</div>
        <div className="flex pl-[6px] gap-6 mt-3">
          <div className="flex-col gap-3">
            <div className="text-[15px]">Time</div>
            <div className="text-[20px]">15 Min</div>
          </div>
          <div className="flex-col gap-3">
            <div className="text-[15px]">Weight</div>
            <div className="text-[20px]">15 Kg</div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-neutral-500 mt-6"></div>
        <div className="mt-6 overflow-y-auto no-scrollbar max-h-[103px] ">
          <ExerciseListItem />
          <ExerciseListItem />
          <ExerciseListItem />
          <ExerciseListItem />
          <ExerciseListItem />
        </div>
      </div>
    </div>
  )
}

export default WorkoutRecord
