// // import { useCallback } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import SettingPage from '../SettingPage'
// // import BaseFrameLayout from '../components/Baseframe'
// // import AvatarAndName from '../components/AvatarAndName'
// // import NavigationMenu from '../components/NavigationMenu'

// // const EditProfile = () => {
// //   const navigate = useNavigate()

// //   const onLogoutBtnContainerClick = useCallback(() => {
// //     navigate('/signin')
// //   }, [navigate])

// //   return (
// //     <div>
// //       <div class="absolute inset-0 flex items-center justify-center">
// //         <div class="bg-transparent  bg-opacity-50 p-6 shadow-md w-full md:w-[600px] h-[500px] md:h-[500px] ml-[2px] md:ml-[-120px] bottom-[280px] md:bottom-[160px] fixed">
// //           <form>
// //             <div class="mb-10 flex items-center ">
// //               <label class="mr-6 text-2xl text-white">Name</label>
// //               <input
// //                 class="w-full px-4 py-1 bg-transparent placeholder-gray-500  text-white focus:outline-none"
// //                 type="text"
// //                 placeholder="Your Name"
// //               />
// //             </div>
// //             <hr class="border-gray-300 w-full absolute top-full -mt-5" />

// //             <div class="mb-10 flex items-center ">
// //               <label class="mr-14 text-2xl text-white">Bio</label>
// //               <textarea
// //                 class="w-full px-4 py-4 placeholder-gray-500 bg-transparent	text-white resize-none focus:outline-none ; "
// //                 placeholder="Describe Yourself"
// //               ></textarea>
// //             </div>
// //             <hr class="border-gray-300 w-full mb-1" />
// //             <div class="mb-10 ">
// //               <span class="text-white text-2xl">Gender</span>
// //               <div class="mt-2">
// //                 <label class="inline-flex items-center ml-6">
// //                   <input
// //                     type="radio"
// //                     class="form-radio"
// //                     name="gender"
// //                     value="male"
// //                   />
// //                   <span class="ml-3 text-2xl  text-white">Male</span>
// //                 </label>
// //                 <label class="inline-flex items-center ml-6">
// //                   <input
// //                     type="radio"
// //                     class="form-radio"
// //                     name="gender"
// //                     value="female"
// //                   />
// //                   <span class="ml-3 text-2xl text-white">Female</span>
// //                 </label>
// //               </div>
// //             </div>
// //             <hr class="border-gray-300 w-full mb-1 " />
// //             <div class="mb-24 flex items-center ">
// //               <label class="block text-white text-2xl">Birthday</label>
// //               <input
// //                 datepicker
// //                 datepicker-autohide
// //                 type="text"
// //                 class="w-[300px] px-5 py-2 ml-3 bg-transparent text-white placeholder-gray-500  uppercase focus:outline-none"
// //                 placeholder="DD/MM/YYYY"
// //               />
// //             </div>
// //             <hr class="border-gray-300 w-full mb-1 mt-[-65px]" />
// //             <button class="absolute bottom-[10px] right-[210px] lg:bottom-[10px] lg:right-[130px] md:bottom-[120px] md:right-[15px] sm:bottom-[110px] sm:right-[12px] w-[150px] py-2 px-3 text-xl text-white bg-blue-600 hover:bg-blue-700">
// //               Save
// //             </button>
// //             <button
// //               className="container mx-auto bg-transparent text-red-500 text-xl border border-gray-500 bottom-0 left-0 h-16 sm:h-20 md:h-21 lg:h-15 xl:h-40 w-full sm:w-2/3 md:w-1/2 lg:w-[55%] xl:w-1/4 fixed top-[81%]  lg:left-[25%] mr-8 hover:text-white"
// //               onClick={onLogoutBtnContainerClick}
// //             >
// //               Log Out
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       <BaseFrameLayout />
// //       <NavigationMenu />
// //       <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
// //     </div>
// //   )
// // }

// // export default EditProfile

// ;<div class="relative z-0 w-full mb-5 group">
//   <input type="radio" name="gender" value="male" />
//   <label class="text-white" for="male">
//     Male
//   </label>
//   <input type="radio" name="gender" value="female" />
//   <label class="text-white" for="female">
//     Female
//   </label>
// </div>
