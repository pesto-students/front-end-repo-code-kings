import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const SettingPage = () => {
  const navigate = useNavigate()

  const onHomeContainerClick = useCallback(() => {
    // Please sync "home page" to the project
  }, [])

  const onExercisesContainerClick = useCallback(() => {
    // Please sync "exercises page" to the project
  }, [])

  const onProfileContainerClick = useCallback(() => {
    navigate('/profile') // Please sync "profile page" to the project
  }, [])

  const onEditProfileContainerClick = useCallback(() => {
    navigate('/editprofile') // Please sync "profile page" to the project
  }, [])

  const onSettingsContainerClick = useCallback(() => {
    navigate('/setting')
  }, [navigate])

  const onEnergaLogoContainerClick = useCallback(() => {
    // Please sync "home page" to the project
  }, [])

  const onRightArrow1Click = useCallback(() => {
    navigate('/editprofile') // Please sync "edit profilepage" to the project
  }, [])

  const onRightArrow2Click = useCallback(() => {
    navigate('/account') // Please sync "edit account" to the project
  }, [])

  const onRightArrow3Click = useCallback(() => {
    navigate('/routine-help') // Please sync "routine-help" to the project
  }, [])

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
    <div className="w-full relative bg-black h-screen overflow-hidden text-center text-13xl md:text-white font-roboto">
      <div className="absolute top-[-1px] left-1/4 md:left-1/4 box-border w-0.5 h-[834px] border-r-[2px] border-solid border-gray-500 hidden md:block" />
      <div className="absolute top-[-1px] right-1/4 md:right-1/4 box-border w-0.5 h-[834px] border-r-[2px] border-solid border-gray-500 hidden md:block" />
      <div className="absolute top-[200px] left-[69px] w-56 h-[380px] text-17xl">
        <div className="absolute top-[133px] left-[9px] h-[247px] flex flex-col items-start justify-between">
          <div className="absolute top-[-253px] left-[307px] box-border w-[765px] h-0.5 border-t-[2px] border-solid border-gray-500">
            <div className="absolute top-[-50px] left-[335px] leading-[20px] capitalize text-2xl">
              Settings
            </div>
          </div>
          <div
            className="w-[149px] relative h-10 cursor-pointer"
            onClick={onHomeContainerClick}
          >
            <div className="absolute top-[30%] left-[58px] leading-[20px] capitalize hover:text-blue-500 text-2xl">
              Home
            </div>
            <img
              className="absolute h-full w-[26.85%] top-[0%] right-[73.15%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full [transform:_rotate(-0.02deg)]"
              alt=""
              src="/Home.svg"
            />
          </div>
          <div
            className="w-[215px] relative h-[25px] cursor-pointer"
            onClick={onExercisesContainerClick}
          >
            <div className="absolute h-full w-[85px] top-[0%] left-[28.84%] leading-[20px] capitalize flex items-center justify-center hover:text-blue-500 text-2xl">
              Exercises
            </div>
            <img
              className="absolute h-full w-[19.26%] top-[0%] right-[76.74%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full [transform:_rotate(-0.02deg)]"
              alt=""
              src="/Exercise-icon.svg"
            />
          </div>
          <div
            className="w-[155px] relative h-10 cursor-pointer"
            onClick={onProfileContainerClick}
          >
            <div className="absolute h-full w-[80px] top-[0%] left-[33.55%] leading-[20px] capitalize flex items-center justify-center hover:text-blue-500 text-2xl">
              Profile
            </div>
            <img
              className="absolute h-full w-[25.81%] top-[0%] right-[74.19%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full [transform:_rotate(-0.02deg)]"
              alt=""
              src="/profile-icon.svg"
            />
          </div>
          <div
            className="w-[184px] relative h-10 cursor-pointer"
            onClick={onSettingsContainerClick}
          >
            <div className="absolute h-[97.5%] w-[98px] top-[2.5%] left-[28.26%] leading-[20px] capitalize flex items-center justify-center hover:text-blue-500 text-2xl">
              Settings
            </div>
            <img
              className="absolute h-[97.5%] w-[21.74%] top-[0%] right-[78.26%] bottom-[2.5%] left-[0%] max-w-full overflow-hidden max-h-full [transform:_rotate(-0.02deg) ]"
              alt=""
              src="/settings-icon.svg"
            />
          </div>
        </div>
        <div
          className="absolute top-[0px] left-[5px] w-[210px] h-20 cursor-pointer"
          onClick={onEnergaLogoContainerClick}
        >
          <img
            className="absolute h-full w-full top-[0%] left-[0%] max-w-full overflow-hidden max-h-full [transform:_rotate(-0.02deg)]"
            alt="Energía Logo"
            src="/Energia.png"
          />
        </div>
      </div>
      <div className="absolute top-[308px] left-[340px] w-[600px] h-[78px]">
        <div className="absolute top-[77px] left-[45px] box-border w-[765px] h-0.5 border-t-[2px] border-solid border-gray-500" />
        <img
          className="absolute top-[15.2px] left-[716px] w-[30px] h-[30px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
          alt=""
          src="/right-arrow.svg"
          onClick={onRightArrow3Click}
        />
        <div
          className="absolute top-[15px] left-[223px] leading-[20px] capitalize hover:text-blue-500 text-2xl cursor-pointer"
          onClick={onRoutineHelpClick}
        >
          Routine Help
        </div>
        <img
          className="absolute top-[0px] left-[115px] w-[50px] h-[50px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
          alt=""
          src="/Routine-icon.svg"
          onClick={onRoutineHelpClick}
        />
      </div>

      <div className="absolute top-[107px] left-[340px] w-[600px] h-[73px]">
        <div className="absolute top-[72px] left-[45px] box-border w-[765px] h-0.5 border-t-[2px] border-solid border-gray-500" />
        <img
          className="absolute top-[10.2px] left-[716px] w-[30px] h-[30px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
          alt=""
          src="/right-arrow.svg"
          onClick={onRightArrow1Click}
        />
        <div
          className="absolute top-[16px] left-[223px] leading-[20px] capitalize hover:text-blue-500 text-2xl cursor-pointer"
          onClick={onEditProfileContainerClick}
        >
          Edit Profile
        </div>
        <img
          className="absolute top-[0px] left-[115px] wa-[90px] h-[50px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
          alt=""
          src="/profile-icon.svg"
          onClick={onEditProfileContainerClick}
        />
      </div>
      <div className="absolute top-[207px] left-[340px] w-[600px] h-[76px]">
        <div className="absolute top-[75px] left-[45px] box-border w-[765px] h-0.5 border-t-[2px] border-solid border-gray-500" />
        <img
          className="absolute top-[13.2px] left-[716px] w-[30px] h-[30px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
          alt=""
          src="/right-arrow.svg"
          onClick={onRightArrow2Click}
        />
        <div
          className="absolute top-[15px] left-[223px] leading-[20px] capitalize hover:text-blue-500 text-2xl cursor-pointer"
          onClick={onAccountClick}
        >
          Account
        </div>
        <img
          className="absolute top-[0px] left-[115px] w-[50px] h-[50px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
          alt=""
          src="/account-icon.svg"
          onClick={onAccountClick}
        />
      </div>
      <button
        className="absolute top-[610px] left-[384px] w-[759px] md:w-[50%] h-[100px] md:h-[60px] bg-transparent hover:bg-white-500 text-red-700 text-2xl md:text-xl font-semibold hover:text-white py-2 px-4 md:py-1 md:px-2 border border-gray-500"
        onClick={onLogoutBtnContainerClick}
      >
        Log Out
      </button>
    </div>
  )
}

export default SettingPage
