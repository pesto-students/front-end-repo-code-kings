import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import NewRoutine from '../pages/NewRoutine'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/exercises" Component={Exercises} />
        <Route path="/profile" Component={Profile} />
        <Route path="/setting" Component={Settings} />
        <Route path="/newRoutine" Component={NewRoutine} />
      </Routes>
    </Router>
  )
}

export default AppRouter
