import React, { useEffect, useState } from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import ExerciseBlock from './components/ExerciseBlock'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import { Cookies } from 'react-cookie'

const Exercises = () => {
  const cookie = new Cookies()
  const token = cookie.get('jwt')
  const [exercises, setExercises] = useState([])

  const fetchExercises = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: { limit: '30' },
        headers: {
          'X-RapidAPI-Key':
            'ef5ccd128bmshf4e1c4669cb9da9p143462jsn83074d878f23',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      }
      const response = await axios.request(options)
      setExercises(response.data)
    } catch (error) {
      console.error('Error fetching exercises:', error)
    }
  }
  useEffect(() => {
    fetchExercises()
  }, [token])

  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <div className="top-[8%] left-[25.25%] right-[20.25%] absolute">
        <div className="new-routine text-white   text-center">
          <h1 className="text-2xl font-semibold leading-[20px] pt-[4.5%] text-center">
            Exercise Info
          </h1>
        </div>
        <div className=" text-white  mt-[4%] pt-[0.5%] text-center flex flex-col items-center gap-10 overflow-hidden">
          <div className="w-[90%] max-h-[715px] no-scrollbar overflow-y-auto text-center">
            {exercises.map((exercise, index) => (
              <ExerciseBlock key={index} exercise={exercise} />
            ))}
          </div>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default Exercises
