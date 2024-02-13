import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineBlock from './components/RoutineBlock'
import RoutineMenu from './components/RoutineMenu'

const HomeWithRoutines = () => {
  const cookies = new Cookies()
  const token = cookies.get('jwt')

  const [error, setError] = useState('')
  const [routines, setRoutines] = useState([])

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/routines/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )

        setRoutines(response.data.data.data)
        console.log(response.data.data.data)
      } catch (err) {
        setError('Failed to fetch routine.')
        console.log(error)
      }
    }

    fetchRoutine()
  }, [token])

  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <RoutineMenu />
      <div className="text-white fixed w-[54.5%] max-h-screen overflow-hidden  left-[25.25%] right-[20.25%] top-[54%]">
        <div className="text-3xl pl-[40px] py-6">My Routines</div>
        <div className="items-center">
          <div className="w-[71.79%] mx-auto h-[310px] overflow-y-scroll no-scrollbar">
            {routines.map((routine, index) => (
              <RoutineBlock key={index} routine={routine} />
            ))}
          </div>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default HomeWithRoutines
