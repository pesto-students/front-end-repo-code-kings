import { useCallback } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
  const navigate = useNavigate()

  const onHomeContainerClick = useCallback(() => {
    navigate('/home')
    // Please sync "home page" to the project
  }, [navigate])

  const onExercisesContainerClick = useCallback(() => {
    navigate('/exercises')
    // Please sync "exercises page" to the project
  }, [])

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
    navigate('/home')
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

  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    sex: '',
    birthday: '',
  })

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save the profile data
    console.log(profile)
  }

  return (
    <div className="w-full relative bg-black h-screen overflow-hidden text-center text-13xl md:text-white font-roboto">
      <div className="absolute top-[-1px] left-1/4 md:left-1/4 box-border w-0.5 h-[834px] border-r-[2px] border-solid border-gray-500 hidden md:block" />
      <div className="absolute top-[-1px] right-1/4 md:right-1/3 box-border w-0.5 h-[834px] border-r-[2px] border-solid border-gray-500 hidden md:block" />
      <div className="absolute top-[200px] left-[69px] w-56 h-[380px] text-17xl">
        <div className="absolute top-[133px] left-[9px] h-[247px] flex flex-col items-start justify-between">
          <div className="absolute top-[-253px] left-[307px] box-border w-[638px] h-0.5 border-t-[2px] border-solid border-gray-500">
            <div className="absolute top-[-50px] left-[270px] leading-[20px] capitalize text-2xl">
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
        <div className="absolute top-[77px] left-[45px] box-border w-[638px] h-0.5 border-t-[2px] border-solid border-gray-500" />
        <img
          className="absolute top-[15.2px] left-[600px] w-[30px] h-[30px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
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
        <div className="absolute top-[72px] left-[45px] box-border w-[638px] h-0.5 border-t-[2px] border-solid border-gray-500" />
        <img
          className="absolute top-[10.2px] left-[600px] w-[30px] h-[30px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
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
        <div className="absolute top-[75px] left-[45px] box-border w-[638px] h-0.5 border-t-[2px] border-solid border-gray-500" />
        <img
          className="absolute top-[13.2px] left-[600px] w-[30px] h-[30px] overflow-hidden [transform:_rotate(-0.02deg)] cursor-pointer"
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
        className="absolute top-[610px] left-[385px] w-[759px] md:w-[41.5%] h-[100px] md:h-[60px] bg-transparent hover:bg-white-500 text-red-700 text-2xl md:text-xl font-semibold hover:text-white py-2 px-4 md:py-1 md:px-2 border border-gray-500"
        onClick={onLogoutBtnContainerClick}
      >
        Log Out
      </button>

      {/* Edit Profile section starts below  */}

      <div className="absolute top-[90px] left-[1100px] w-full max-w-xs bg-transparent">
        <div className="absolute bottom-[152.5px] w-[170%] left-[-76px] border-b border-gray-500 border-solid border-t-[1.5px] ">
          <div className="absolute top-[-45px] left-[210px] leading-[20px] capitalize text-2xl">
            Edit Profile
          </div>
        </div>
        <div className="absolute bottom-[50px] w-[130%] left-[-35px] border-b border-gray-500 border-solid border-t-[1.5px] "></div>
        <div className="absolute bottom-[-90px] w-[130%] left-[-35px] border-b border-gray-500 border-solid border-t-[1.5px] "></div>
        <div className="absolute bottom-[-210px] w-[130%] left-[-35px] border-b border-gray-500 border-solid border-t-[1.5px] "></div>
        <div className="absolute bottom-[-320px] w-[130%] left-[-35px] border-b border-gray-500 border-solid border-t-[1.5px] "></div>
        <form
          onSubmit={handleSubmit}
          className="bg-transparent shadow-md rounded px-8 pt-6 pb-12 mb-4"
        >
          <div className="mb-4">
            <div className="mb-4 flex items-center">
              <label
                className="absolute right-[280px] bottom-[70px] block text-white text-2xl mb-2 mr-3"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="absolute bottom-[75px] bg-transparent appearance-none w-full py-2 px-8 text-white text-xl leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={profile.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <label
              className="absolute right-[310px] bottom-[-27px] block text-white text-2xl mb-2 mr-3 pt-2"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              className="absolute bottom-[-65px] resize-none  bg-transparent pt-8 pb-5 pr-12 ml-6 font-sans text-xl font-normal  text-white outline-0 "
              type="text"
              aria-label="Full name"
              name="bio"
              placeholder="Describe Yourself"
              required
              value={profile.bio}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="absolute bottom-[-150px] right-[275px] block text-white text-2xl  font-roboto  mb-2">
              Gender
            </span>
            <div className="mt-2">
              <label className="absolute bottom-[-181px] right-[278px] text-2xl  font-roboto inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="sex"
                  value="Male"
                  checked={profile.sex === 'Male'}
                  onChange={handleChange}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="absolute bottom-[-181.5px] right-[150px] text-2xl  font-roboto inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="sex"
                  value="Female"
                  checked={profile.sex === 'Female'}
                  onChange={handleChange}
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          <div className="mb-6 flex item-start">
            <label
              className="absolute bottom-[-285px] left-[-30px] block text-white text-2xl mr-2 pt-2 mb-2"
              htmlFor="birthday"
            >
              Birthday
            </label>
            <input
              className="absolute bottom-[-280px] left-[70px] shadow appearance-none bg-transparent  py-2 px-3 text-white uppercase leading-tight focus:outline-none focus:shadow-outline"
              placeholder="DD/MM/YYYY"
              id="birthday"
              type="text"
              name="birthday"
              value={profile.birthday}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="absolute top-[515px] left-[100px] w-[120px] h-[30px] bg-blue-500 hover:bg-white hover:text-black text-white  font-roboto py-1 px-1 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
