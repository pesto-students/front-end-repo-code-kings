import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OverlayFrame from './OverlayFrame'

const RoutineBlock = () => {
  const navigate = useNavigate()

  const [subMenuVisible, setSebMenuVisible] = useState(false)
  const [overLayVisible, setOverLayVisible] = useState(false)
  const [isIconSelected, setIcon] = useState(false)
  const [time, setTime] = useState(0)

  const startClock = () => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }

  const stopClock = () => {
    setTime(0)
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  const handleIconClick = () => {
    setSebMenuVisible(!subMenuVisible)
  }

  const handleEditClick = () => {
    navigate('/routine/edit')
  }

  const handleStartRoutineClick = () => {
    setOverLayVisible(true)
    startClock()
  }

  const handleClickOutside = (event) => {
    if (!event.target.closest('.your-overlay-content-class')) {
      setOverLayVisible(false)
    }
    stopClock()
  }

  const handleCheckIcon = (e) => {
    e.stopPropagation()
    setIcon(true)
  }

  useEffect(() => {
    let intervalId

    if (overLayVisible) {
      intervalId = startClock()
    } else {
      stopClock()
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [overLayVisible])

  return (
    <>
      <div className="bg-neutral-600 items-center text-center h-32 mb-5 ">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold capitalize pl-4 pt-3">
            Routine Name
          </div>
          <div className="pr-6 cursor-pointer" onClick={handleIconClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M16.4063 15C16.4063 15.2781 16.3238 15.55 16.1693 15.7813C16.0147 16.0125 15.7951 16.1928 15.5381 16.2992C15.2812 16.4056 14.9984 16.4335 14.7257 16.3792C14.4529 16.325 14.2023 16.191 14.0056 15.9944C13.809 15.7977 13.675 15.5471 13.6208 15.2743C13.5665 15.0016 13.5944 14.7188 13.7008 14.4619C13.8072 14.2049 13.9875 13.9853 14.2187 13.8307C14.45 13.6762 14.7219 13.5938 15 13.5938C15.373 13.5938 15.7306 13.7419 15.9944 14.0056C16.2581 14.2694 16.4063 14.627 16.4063 15ZM22.9688 13.5938C22.6906 13.5938 22.4187 13.6762 22.1875 13.8307C21.9562 13.9853 21.776 14.2049 21.6695 14.4619C21.5631 14.7188 21.5353 15.0016 21.5895 15.2743C21.6438 15.5471 21.7777 15.7977 21.9744 15.9944C22.171 16.191 22.4216 16.325 22.6944 16.3792C22.9672 16.4335 23.2499 16.4056 23.5069 16.2992C23.7639 16.1928 23.9835 16.0125 24.138 15.7813C24.2925 15.55 24.375 15.2781 24.375 15C24.375 14.627 24.2268 14.2694 23.9631 14.0056C23.6994 13.7419 23.3417 13.5938 22.9688 13.5938ZM7.03125 13.5938C6.75312 13.5938 6.48124 13.6762 6.24998 13.8307C6.01872 13.9853 5.83848 14.2049 5.73205 14.4619C5.62561 14.7188 5.59776 15.0016 5.65202 15.2743C5.70628 15.5471 5.84021 15.7977 6.03688 15.9944C6.23355 16.191 6.48412 16.325 6.75691 16.3792C7.02969 16.4335 7.31244 16.4056 7.5694 16.2992C7.82636 16.1928 8.04598 16.0125 8.20051 15.7813C8.35503 15.55 8.4375 15.2781 8.4375 15C8.4375 14.627 8.28934 14.2694 8.02562 14.0056C7.7619 13.7419 7.40421 13.5938 7.03125 13.5938Z"
                fill="#3B82F6"
              />
            </svg>
          </div>
        </div>
        <div className="font-light text-xs h-fit pl-4 pt-1 text-left">
          Jorem ipsum dolor sit amet, (Exercise name) adipiscing elit.
        </div>
        <button
          className="bg-blue-500 w-[90%] text-xl h-[30px] mt-[4%]"
          onClick={handleStartRoutineClick}
        >
          Start Routine
        </button>
      </div>
      {subMenuVisible && (
        <div className="bg-gray-600 absolute left-[61%] top-[20%]  h-44 w-64 text-xl text-center">
          <div
            className="text-white my-4 cursor-pointer"
            onClick={handleEditClick}
          >
            Edit Routine
          </div>
          <div className="w-full h-0.5 bg-neutral-500"></div>
          <div className="text-red-500 my-4 cursor-pointer">Delete Routine</div>
          <div className="w-full h-0.5 bg-neutral-500"></div>
          <div
            className="text-red-500 my-2.5 cursor-pointer"
            onClick={handleIconClick}
          >
            Cancel
          </div>
        </div>
      )}
      <OverlayFrame onClose={handleClickOutside} visible={overLayVisible}>
        <div className="bg-neutral-900 w-[40%] h-[70%] text-white text-center z-10">
          <div className="flex justify-between items-center mt-[2%]">
            <div className="w-fit text-2xl font-medium pl-8">Log Workout</div>
            <div className="flex flex-col items-center pr-16">
              <div className="w-fit text-[16px] font-normal">Duration</div>
              <div className="w-fit text-xl">{formatTime(time)}</div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-neutral-500 mt-[2%]"></div>
          <div className="w-fit pl-7 pt-7 no-scrollbar overflow-y-auto text-center flex flex-col gap-8">
            <div className="flex gap-5  items-center">
              <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                <img
                  src="/Hip-Bridge.webp"
                  alt="exerciseImage"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="w-fit font-[500] text-xl">Exercise Name</div>
            </div>
            <div className="text-neutral-400 text-center flex gap-11 text-2xl font-medium items-center">
              <div className="w-fit">
                <div>SET</div>
                <input
                  type="text"
                  name="set"
                  defaultValue={1}
                  className="bg-transparent max-w-[25px] text-center text-white  focus:outline-none "
                />
              </div>
              <div className="w-fit">
                <div>KG</div>
                <input
                  type="text"
                  name="kg"
                  defaultValue={1}
                  className="bg-transparent max-w-[25px] text-center text-white  focus:outline-none "
                />
              </div>
              <div className="w-fit">
                <div>REPS</div>
                <input
                  type="text"
                  name="reps"
                  defaultValue={1}
                  className="bg-transparent max-w-[25px] text-center text-white  focus:outline-none "
                />
              </div>
              <div onClick={handleCheckIcon}>
                {isIconSelected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <rect width="50" height="50" fill="#22C55E" />
                    <path
                      d="M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z"
                      fill="#DCFCE7"
                    />
                    <path
                      d="M23 32.3998L14.3 23.6998L15.7 22.2998L23 29.5998L34.3 18.2998L35.7001 19.6998L23 32.3998Z"
                      fill="#DCFCE7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20 33.5999C12.48 33.5999 6.40002 27.5199 6.40002 19.9999C6.40002 12.4799 12.48 6.3999 20 6.3999C27.52 6.3999 33.6 12.4799 33.6 19.9999C33.6 27.5199 27.52 33.5999 20 33.5999ZM20 7.9999C13.36 7.9999 8.00002 13.3599 8.00002 19.9999C8.00002 26.6399 13.36 31.9999 20 31.9999C26.64 31.9999 32 26.6399 32 19.9999C32 13.3599 26.64 7.9999 20 7.9999Z"
                      fill="white"
                    />
                    <path
                      d="M18.4 25.9201L11.44 18.9601L12.56 17.8401L18.4 23.6801L27.44 14.6401L28.56 15.7601L18.4 25.9201Z"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="items-center mt-10 text-2xl">
            <button className="bg-neutral-800  w-[90%]  h-[45px] ">
              + Add Set
            </button>
            <button
              className="bg-blue-500 w-[90%]  h-[45px] mt-[2%]"
              onClick={stopClock}
            >
              Finish
            </button>
            <button className="bg-neutral-800 text-red-500  w-[90%]  h-[45px] mt-[2%]">
              Discard Workout
            </button>
          </div>
        </div>
      </OverlayFrame>
    </>
  )
}

export default RoutineBlock
