import React from 'react'
import { useState } from 'react'

const ExerciseBlock = () => {
  const [overlayVisible, setOverlayVisible] = useState(false)

  const handleIconClick = () => {
    setOverlayVisible(true)
  }

  const handleClickOutside = (event) => {
    setOverlayVisible(false)
  }

  return (
    <>
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 w-fit">
            <div className="h-[75px] w-[75px] overflow-hidden rounded-full">
              <img
                src="/Hip-Bridge.webp"
                alt="exerciseImage"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="w-fit gap-4 flex flex-col">
              <div className=" font-[500] text-2xl">Exercise Name</div>
              <div className=" text-neutral-400 text-xl text-start">
                body part
              </div>
            </div>
          </div>
          <div className="cursor-pointer" onClick={handleIconClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M21.6667 31.6667C21.1944 31.6667 20.7989 31.5067 20.48 31.1867C20.1611 30.8667 20.0011 30.4711 20 30V16.6667H6.66667C6.19444 16.6667 5.79889 16.5067 5.48 16.1867C5.16111 15.8667 5.00111 15.4711 5 15C5 14.5278 5.16 14.1322 5.48 13.8133C5.8 13.4944 6.19556 13.3344 6.66667 13.3333H21.6667C22.1389 13.3333 22.535 13.4933 22.855 13.8133C23.175 14.1333 23.3344 14.5289 23.3333 15V30C23.3333 30.4722 23.1733 30.8683 22.8533 31.1883C22.5333 31.5083 22.1378 31.6678 21.6667 31.6667ZM30 23.3333C29.5278 23.3333 29.1322 23.1733 28.8133 22.8533C28.4944 22.5333 28.3344 22.1378 28.3333 21.6667V8.33333H15C14.5278 8.33333 14.1322 8.17333 13.8133 7.85333C13.4944 7.53333 13.3344 7.13778 13.3333 6.66667C13.3333 6.19444 13.4933 5.79889 13.8133 5.48C14.1333 5.16111 14.5289 5.00111 15 5H30C30.4722 5 30.8683 5.16 31.1883 5.48C31.5083 5.8 31.6678 6.19556 31.6667 6.66667V21.6667C31.6667 22.1389 31.5067 22.535 31.1867 22.855C30.8667 23.175 30.4711 23.3344 30 23.3333Z"
                fill="#60A5FA"
              />
            </svg>
          </div>
        </div>
        <div className="h-0.5 bg-neutral-500 mt-5"></div>
      </div>
      {overlayVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center"
          onClick={handleClickOutside}
        >
          <div className="bg-neutral-600 w-[40%] h-[70%] text-white">
            <div className="h-[42%] w-full">
              <img
                src="/Hip-Bridge.webp"
                alt="exerciseImage"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left ml-[5%]">
              <div className="font-semibold text-xl pb-[1%]">Exercise Name</div>
              <div className="text-[14px]">Description</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ExerciseBlock
