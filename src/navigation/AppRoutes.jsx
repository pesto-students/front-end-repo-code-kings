import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import NewRoutine from '../pages/NewRoutine'
import NewRoutineWithExerciseList from '../pages/NewRoutineWithExerciseList'
import SaveRoutine from '../pages/SaveRoutine'
import HomeWithRoutines from '../pages/HomeWithRoutines'
import EditRoutine from '../pages/EditRoutine'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/exercises" Component={Exercises} />
        <Route path="/profile" Component={Profile} />
        <Route path="/setting" Component={Settings} />
        <Route path="/newRoutine" Component={NewRoutine} />
        <Route
          path="/newRoutine/addExercises"
          Component={NewRoutineWithExerciseList}
        />
        <Route path="/newRoutine/saveRoutine" Component={SaveRoutine} />
        <Route path="/home" Component={HomeWithRoutines} />
        <Route path="/routine/edit" Component={EditRoutine} />
      </Routes>
    </Router>
  )
}

export default AppRouter
