import React from 'react'

const ExerciseListItem = ({ exercise }) => {
  return (
    <div className="flex gap-5 items-center mb-3">
      <div className="text-xl">{exercise.name}</div>
    </div>
  )
}

export default ExerciseListItem
