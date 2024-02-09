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
import CreateAccountPage from '../pages/CreateAccountPage'
import EditProfile from '../pages/EditProfile'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import SignInPage from '../pages/SignInPage'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" Component={Home} />
        <Route path="/home" Component={HomeWithRoutines} />
        <Route path="/exercises" Component={Exercises} />
        <Route path="/profile" Component={Profile} />
        <Route path="/setting" Component={Settings} />
        <Route path="/newRoutine" Component={NewRoutine} />
        <Route path="/routine/:id/add-exercises" Component={AddExercise} />
        <Route path="/routine/:id/save-routine" Component={SaveRoutine} />
        <Route path="/routine/edit" Component={EditRoutine} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
