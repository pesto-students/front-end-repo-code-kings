import { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import NavigationMenu from './components/NavigationMenu'
import BaseFrame from './components/Baseframe'
import Datepicker from 'flowbite-datepicker/Datepicker'

const SettingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const onHomeContainerClick = useCallback(() => {
    // Please sync "home page" to the project
    navigate('/home')
  }, [navigate])

  const onExercisesContainerClick = useCallback(() => {
    // Please sync "exercises page" to the project
    navigate('/exercises')
  }, [navigate])

  const onProfileContainerClick = useCallback(() => {
    navigate('/profile') // Please sync "profile page" to the project
  }, [navigate])

  const onEditProfileContainerClick = useCallback(() => {
    navigate('/editprofile') // Please sync "profile page" to the project
  }, [navigate])

  const onSettingsContainerClick = useCallback(() => {
    navigate('/setting')
  }, [navigate])

  const onEnergaLogoContainerClick = useCallback(() => {
    // Please sync "home page" to the project
  }, [navigate])

  const onRightArrow1Click = useCallback(() => {
    navigate('/editprofile') // Please sync "edit profilepage" to the project
  }, [navigate])

  const onRightArrow2Click = useCallback(() => {
    navigate('/account') // Please sync "edit account" to the project
  }, [navigate])

  const onRightArrow3Click = useCallback(() => {
    navigate('/routine-help') // Please sync "routine-help" to the project
  }, [navigate])

  const onRoutineHelpClick = useCallback(() => {
    navigate('/routine-help') // Update the path to your routine help page
  }, [navigate])

  const onAccountClick = useCallback(() => {
    navigate('/account') // Update the path to your account page
  }, [navigate])

  const onLogoutBtnContainerClick = useCallback(() => {
    navigate('/signin')
  }, [navigate])

  return (
    <div>
      <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[76%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
      <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[60%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
      <div className="max-sm:w-full h-0.5 bg-neutral-500  fixed bottom-[44%] w-[55%] lg:left-[25%] md:left-[25%]"></div>
      <div className="container mx-auto bg-transparent h-16 sm:h-20 md:h-21 lg:h-15 xl:h-40 w-full sm:w-2/3 md:w-1/2 lg:w-[50%] xl:w-1/4 fixed top-[12%] sm:top-[10.5%] lg:left-[27.5%] flex items-center justify-between text-white ">
        <div className="flex items-center">
          <img
            className="h-20 w-16 mr-14 cursor-pointer"
            src="/profile-icon.svg"
            alt=""
            onClick={onEditProfileContainerClick}
          />
          <div
            className="text-2xl ml-30 cursor-pointer  hover:text-blue-500"
            onClick={onEditProfileContainerClick}
          >
            Edit Profile
          </div>
        </div>
        <img
          className="h-10 w-16 mr-14 cursor-pointer "
          alt=""
          src="/right-arrow.svg"
          onClick={onRightArrow1Click}
        />
      </div>
      <div className="container mx-auto bg-transparent h-16 sm:h-20 md:h-21 lg:h-15 xl:h-40 w-full sm:w-2/3 md:w-1/2 lg:w-[50%] xl:w-1/4 fixed top-[28%] sm:top-[26.5%] lg:left-[27.5%] flex items-center justify-between text-white">
        <div className="flex items-center">
          <img
            className="h-20 w-16 cursor-pointer hover:to-blue-400"
            alt=""
            src="/account-icon.svg"
            onClick={onAccountClick}
          />
          <div
            className="text-2xl ml-14 cursor-pointer  hover:text-blue-500"
            onClick={onAccountClick}
          >
            Account
          </div>
        </div>
        <img
          className="h-10 w-16 mr-14 cursor-pointer"
          alt=""
          src="/right-arrow.svg"
          onClick={onRightArrow2Click}
        />
      </div>
      <div className="container mx-auto bg-transparent h-16 sm:h-20 md:h-21 lg:h-15 xl:h-40 w-full sm:w-2/3 md:w-1/2 lg:w-[50%] xl:w-1/4 fixed top-[44%] sm:top-[42.5%] lg:left-[27.5%] flex items-center justify-between text-white">
        <div className="flex items-center">
          <img
            className="h-20 w-16 cursor-pointer"
            src="Routine-icon.svg"
            alt=""
            onClick={onRoutineHelpClick}
          />
          <div
            className="text-2xl ml-14 cursor-pointer  hover:text-blue-500"
            onClick={onRoutineHelpClick}
          >
            Routine Help
          </div>
        </div>

        <img
          className="h-10 w-16 mr-14 cursor-pointer"
          src="/right-arrow.svg"
          alt=""
          onClick={onRightArrow3Click}
        />
      </div>
      <button
        className="container mx-auto bg-transparent text-red-500 text-xl border border-gray-500 h-16 sm:h-20 md:h-21 lg:h-15 xl:h-40 w-full sm:w-2/3 md:w-1/2 lg:w-[55%] xl:w-1/4 fixed top-[81%]  lg:left-[25%]  hover:text-white"
        onClick={onLogoutBtnContainerClick}
      >
        Log Out
      </button>

      <BaseFrame />
      <NavigationMenu />
    </div>
  )
}

export default SettingPage
