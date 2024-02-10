import React from 'react'

const ExerciseListItem = () => {
  return (
    <div className="flex gap-5 items-center mb-3">
      <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
        <img
          src="/Hip-Bridge.webp"
          alt="exerciseImage"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="text-xl">Exercise Name</div>
    </div>
  )
}

export default ExerciseListItem
