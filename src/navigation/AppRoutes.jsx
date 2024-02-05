import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddExercise from '../pages/AddExercise'
import EditRoutine from '../pages/EditRoutine'
import Exercises from '../pages/Exercises'
import Home from '../pages/Home'
import HomeWithRoutines from '../pages/HomeWithRoutines'
import NewRoutine from '../pages/NewRoutine'
import Profile from '../pages/Profile'
import SaveRoutine from '../pages/SaveRoutine'
import Settings from '../pages/Settings'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/exercises" Component={Exercises} />
        <Route path="/profile" Component={Profile} />
        <Route path="/setting" Component={Settings} />
        <Route path="/newRoutine" Component={NewRoutine} />
        <Route path="/newRoutine/addExercises" Component={AddExercise} />
        <Route path="/newRoutine/saveRoutine" Component={SaveRoutine} />
        <Route path="/home" Component={HomeWithRoutines} />
        <Route path="/routine/edit" Component={EditRoutine} />
      </Routes>
    </Router>
  )
}

export default AppRouter
