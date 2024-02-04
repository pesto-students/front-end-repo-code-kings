import React from 'react'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'
import RoutineBlock from './components/RoutineBlock'

const EditRoutine = () => {
  return (
    <>
      <BaseFrameLayout>
        <NavigationMenu />
        <RoutineMenu />
        <div className="text-white fixed  max-h-screen overflow-hidden  left-[25.25%] right-[34.4%] top-[54%]">
          <div className="text-3xl pl-[40px] py-6">My Routines</div>
          <div className="items-center">
            <div className="w-[71.79%] mx-auto h-[310px] overflow-y-scroll no-scrollbar">
              <RoutineBlock />
              <RoutineBlock />
              <RoutineBlock />
            </div>
          </div>
        </div>
        <div className="new-routine text-white ml-[65.5%]  text-center">
          <h1 className="text-2xl font-semibold leading-[20px] pt-[4.5%] text-center">
            Create Routine
          </h1>
          <div className="h-0.5 bg-neutral-500 fixed top-[8%]  w-full"></div>
        </div>
        <div className=" text-white ml-[65.5%] mt-[4%] pt-[0.5%] text-center flex flex-col items-center gap-10 overflow-hidden">
          <input
            type="text"
            value=""
            placeholder="Routine Name"
            className="bg-transparent border-neutral-700 border-2 text-neutral-400 w-[90%] pl-3 text-2xl"
          />
          <div className="w-[90%] no-scrollbar overflow-y-auto text-center flex flex-col gap-8">
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
            <div className="text-neutral-300 text-center flex gap-11 pl-[5%]">
              <div className="w-fit">
                <div>SET</div>
                <input
                  type="text"
                  name="set"
                  defaultValue={1}
                  className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                />
              </div>
              <div className="w-fit">
                <div>KG</div>
                <input
                  type="text"
                  name="kg"
                  defaultValue={1}
                  className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                />
              </div>
              <div className="w-fit">
                <div>REPS</div>
                <input
                  type="text"
                  name="reps"
                  defaultValue={1}
                  className="bg-transparent max-w-[25px] text-center  focus:outline-none "
                />
              </div>
            </div>
          </div>
          <div className="w-[90%]">
            <button className="bg-neutral-600  w-[90%] text-xl h-[45px] ">
              + Add Set
            </button>
            <button className="bg-blue-500 w-[90%] text-xl h-[45px] mt-[2%]">
              + Add Exercises
            </button>
            <button className="bg-neutral-600  w-[90%] text-xl h-[45px] mt-[2%]">
              Save
            </button>
          </div>
        </div>
      </BaseFrameLayout>
    </>
  )
}
export default EditRoutine