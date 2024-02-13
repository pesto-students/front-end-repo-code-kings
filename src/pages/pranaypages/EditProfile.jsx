import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SettingPage from '../SettingPage'
import BaseFrameLayout from '../components/Baseframe'
import AvatarAndName from '../components/AvatarAndName'
import NavigationMenu from '../components/NavigationMenu'
import Datepicker from 'flowbite-datepicker/Datepicker'

const EditProfile = () => {
  const navigate = useNavigate()

  const onLogoutBtnContainerClick = useCallback(() => {
    navigate('/signin')
  }, [navigate])

  useEffect(() => {
    const datepicker = document.getElementById('datepickerId')
    new Datepicker(datepicker, {})
  }, [])

  return (
    <div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="bg-transparent   p-6  w-full md:w-[600px] h-[500px] md:h-[500px] ml-[2px] md:ml-[-120px] bottom-[280px] md:bottom-[160px] fixed">
          <form class="max-w-md mx-auto">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <textarea
                type="text"
                name="floating_bio"
                id="floating_bio"
                class="block mb-2 py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
                rows="4"
              />
              <label
                for="floating_bio"
                rows="4"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Describe Yourself
              </label>
            </div>
            <div class="main flex border:none overflow-hidden m-4 select-none ml-[-5px] mt-14 ">
              <div class="title py-3 my-auto px-5 border rounded-full bg-white text-black text-sm font-semibold mr-3">
                Gender
              </div>
              <label class="flex radio p-2 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="sfg"
                />
                <div class="title px-2 text-white">Male</div>
              </label>

              <label class="flex radio p-2 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="sfg"
                />
                <div class="title px-2 text-white">Female</div>
              </label>
              <label class="flex radio p-2 cursor-pointer">
                <input
                  class="my-auto transform scale-125"
                  type="radio"
                  name="sfg"
                />
                <div class="title px-2 text-white">Other</div>
              </label>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-1" />
            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                id="datepickerId"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Birthday"
              />
            </div>
            <button
              type="button"
              class="text-black bg-white  px-5 py-2 mt-8 font-medium   hover:bg-blue-700 focus:ring-4 focus:ring-black"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <button
        className="container mx-auto bg-transparent text-red-500 text-xl border border-gray-500 h-16 sm:h-20 md:h-21 lg:h-15 xl:h-40 w-full sm:w-2/3 md:w-1/2 lg:w-[55%] xl:w-1/4 fixed top-[81%]  lg:left-[25%]  hover:text-white"
        onClick={onLogoutBtnContainerClick}
      >
        Log Out
      </button>

      <BaseFrameLayout />
      <NavigationMenu />
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/datepicker.js"></script>
    </div>
  )
}

export default EditProfile
