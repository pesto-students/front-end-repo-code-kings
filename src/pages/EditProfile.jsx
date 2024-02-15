import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import getUser from '../utils/getUser'

const EditProfile = () => {
  const navigate = useNavigate()
  const cookie = new Cookies()
  const token = cookie.get('jwt')
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    bio: '',
    gender: 'male',
    birthDate: '',
  })
  const [user, setUser] = useState('')

  const handleChange = (e) => {
    e.stopPropagation()
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        console.log(userData)
        setUser(userData)
        setFormData({ name: user.name, image: user.image })
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }
    fetchUser()
  }, [])

  let image = `https://ui-avatars.com/api/?name=${user.name}&background=random&length=1`

  if (user.image) {
    image = user.image
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.patch(
        `http://localhost:3000/api/v1/users/updateMe`,
        {
          name: formData.name,
          email: user.email,
          description: formData.bio,
          gender: formData.gender,
          dateOfBirth: formData.birthDate,
          file: formData.image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        navigate('/setting'),
      )
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = () => {
    cookie.remove('jwt')
    navigate('/signin')
  }
  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <div className="h-screen fixed left-[25.1%] right-[34.4%] items-center text-white">
        <div className="text-3xl text-center mt-5">Settings</div>
        {/* Edit Profile tag */}
        <div className="mt-[50px]">
          <div className=" flex items-center justify-between">
            <div className="w-fit flex gap-8 items-center pl-10">
              <div className="h-fit w-fit ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 20.0001C18.1666 20.0001 16.5972 19.3473 15.2916 18.0417C13.9861 16.7362 13.3333 15.1667 13.3333 13.3334C13.3333 11.5001 13.9861 9.93064 15.2916 8.62508C16.5972 7.31953 18.1666 6.66675 20 6.66675C21.8333 6.66675 23.4027 7.31953 24.7083 8.62508C26.0138 9.93064 26.6666 11.5001 26.6666 13.3334C26.6666 15.1667 26.0138 16.7362 24.7083 18.0417C23.4027 19.3473 21.8333 20.0001 20 20.0001ZM6.66663 33.3334V28.6667C6.66663 27.7223 6.90996 26.8545 7.39663 26.0634C7.88329 25.2723 8.52885 24.6679 9.33329 24.2501C11.0555 23.389 12.8055 22.7434 14.5833 22.3134C16.3611 21.8834 18.1666 21.6679 20 21.6667C21.8333 21.6667 23.6388 21.8823 25.4166 22.3134C27.1944 22.7445 28.9444 23.3901 30.6666 24.2501C31.4722 24.6667 32.1183 25.2712 32.605 26.0634C33.0916 26.8556 33.3344 27.7234 33.3333 28.6667V33.3334H6.66663ZM9.99996 30.0001H30V28.6667C30 28.3612 29.9238 28.0834 29.7716 27.8334C29.6194 27.5834 29.4177 27.389 29.1666 27.2501C27.6666 26.5001 26.1527 25.9379 24.625 25.5634C23.0972 25.189 21.5555 25.0012 20 25.0001C18.4444 25.0001 16.9027 25.1879 15.375 25.5634C13.8472 25.939 12.3333 26.5012 10.8333 27.2501C10.5833 27.389 10.3816 27.5834 10.2283 27.8334C10.075 28.0834 9.99885 28.3612 9.99996 28.6667V30.0001ZM20 16.6667C20.9166 16.6667 21.7016 16.3406 22.355 15.6884C23.0083 15.0362 23.3344 14.2512 23.3333 13.3334C23.3333 12.4167 23.0072 11.6323 22.355 10.9801C21.7027 10.3279 20.9177 10.0012 20 10.0001C19.0833 10.0001 18.2988 10.3267 17.6466 10.9801C16.9944 11.6334 16.6677 12.4179 16.6666 13.3334C16.6666 14.2501 16.9933 15.0351 17.6466 15.6884C18.3 16.3417 19.0844 16.6679 20 16.6667Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-3xl w-fit">Edit Profile</div>
            </div>
            <div className="h-fit w-fit pr-14 cursor-pointer">
              <Link to="edit-profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 13 22"
                  fill="none"
                >
                  <path
                    d="M0.969379 0.377764C0.805787 0.545149 0.714162 0.769887 0.714092 1.00394C0.714023 1.23799 0.805513 1.46278 0.969005 1.63026L10.1031 11.0061L0.963418 20.3746C0.799826 20.542 0.708202 20.7668 0.708132 21.0008C0.708062 21.2349 0.799553 21.4597 0.963045 21.6271C1.04251 21.7088 1.13754 21.7737 1.24251 21.8181C1.34748 21.8624 1.46027 21.8853 1.57422 21.8853C1.68817 21.8853 1.80097 21.8625 1.90597 21.8183C2.01097 21.774 2.10603 21.7091 2.18554 21.6275L11.9048 11.661C12.0755 11.486 12.171 11.2512 12.1711 11.0067C12.1712 10.7622 12.0758 10.5274 11.9052 10.3523L2.19188 0.380004C2.11241 0.298336 2.01739 0.233416 1.91242 0.189076C1.80745 0.144736 1.69466 0.121874 1.5807 0.12184C1.46675 0.121806 1.35395 0.144601 1.24895 0.188878C1.14396 0.233156 1.0489 0.298019 0.969378 0.37964L0.969379 0.377764Z"
                    fill="#60A5FA"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="h-0.5 w-full bg-neutral-500 mt-6"></div>
        </div>
        {/* Account tab */}
        <div className="mt-6">
          <div className=" flex items-center justify-between">
            <div className="w-fit flex gap-8 items-center pl-10">
              <div className="h-fit w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 34 42"
                  fill="none"
                >
                  <path
                    d="M27.3686 14.6192L27.3698 10.4526C27.3707 7.6899 26.274 5.04005 24.3211 3.08596C22.3681 1.13188 19.7189 0.0336199 16.9563 0.032797C14.1936 0.031974 11.5438 1.12865 9.58967 3.08157C7.63559 5.0345 6.53733 7.68369 6.53651 10.4464L6.53526 14.613C4.87766 14.6125 3.28775 15.2705 2.1153 16.4423C0.94285 17.614 0.283896 19.2036 0.283402 20.8612L0.279055 35.4445C0.278561 37.1021 0.936568 38.692 2.10832 39.8645C3.28007 41.0369 4.86959 41.6959 6.52719 41.6964L27.3605 41.7026C29.0181 41.7031 30.608 41.0451 31.7805 39.8733C32.9529 38.7015 33.6119 37.112 33.6124 35.4544L33.6167 20.8711C33.6172 19.2135 32.9592 17.6236 31.7875 16.4511C30.6157 15.2787 29.0262 14.6197 27.3686 14.6192ZM10.7032 10.4476C10.7037 8.79 11.3626 7.20048 12.5351 6.02873C13.7075 4.85698 15.2974 4.19897 16.955 4.19946C18.6126 4.19996 20.2022 4.85891 21.3739 6.03136C22.5457 7.20381 23.2037 8.79372 23.2032 10.4513L23.2019 14.618L10.7019 14.6143L10.7032 10.4476ZM29.4457 35.4532C29.4456 36.0057 29.2259 36.5356 28.8351 36.9261C28.4443 37.3167 27.9143 37.5361 27.3618 37.5359L6.52843 37.5297C5.9759 37.5295 5.44606 37.3099 5.05548 36.9191C4.66489 36.5282 4.44556 35.9983 4.44572 35.4457L4.45007 20.8624C4.45023 20.3099 4.66988 19.78 5.0607 19.3894C5.45152 18.9989 5.98149 18.7795 6.53402 18.7797L27.3674 18.7859C27.9199 18.7861 28.4497 19.0057 28.8403 19.3965C29.2309 19.7874 29.4502 20.3173 29.4501 20.8699L29.4457 35.4532Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-3xl w-fit">Account</div>
            </div>
            <div className="h-fit w-fit pr-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 13 22"
                fill="none"
              >
                <path
                  d="M0.969379 0.377764C0.805787 0.545149 0.714162 0.769887 0.714092 1.00394C0.714023 1.23799 0.805513 1.46278 0.969005 1.63026L10.1031 11.0061L0.963418 20.3746C0.799826 20.542 0.708202 20.7668 0.708132 21.0008C0.708062 21.2349 0.799553 21.4597 0.963045 21.6271C1.04251 21.7088 1.13754 21.7737 1.24251 21.8181C1.34748 21.8624 1.46027 21.8853 1.57422 21.8853C1.68817 21.8853 1.80097 21.8625 1.90597 21.8183C2.01097 21.774 2.10603 21.7091 2.18554 21.6275L11.9048 11.661C12.0755 11.486 12.171 11.2512 12.1711 11.0067C12.1712 10.7622 12.0758 10.5274 11.9052 10.3523L2.19188 0.380004C2.11241 0.298336 2.01739 0.233416 1.91242 0.189076C1.80745 0.144736 1.69466 0.121874 1.5807 0.12184C1.46675 0.121806 1.35395 0.144601 1.24895 0.188878C1.14396 0.233156 1.0489 0.298019 0.969378 0.37964L0.969379 0.377764Z"
                  fill="#60A5FA"
                />
              </svg>
            </div>
          </div>
          <div className="h-0.5 w-full bg-neutral-500 mt-6"></div>
        </div>
        {/* Routine Help tab */}
        <div className="mt-6">
          <div className=" flex items-center justify-between">
            <div className="w-fit flex gap-8 items-center pl-10">
              <div className="h-fit w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M49.5 23.4875V8.0625C49.4837 7.41035 49.2131 6.79041 48.746 6.335C48.2789 5.87959 47.6524 5.6248 47 5.625H12.9375C12.2854 5.64131 11.6654 5.91188 11.21 6.37897C10.7546 6.84605 10.4998 7.47265 10.5 8.125V52C10.4998 52.6524 10.7546 53.2789 11.21 53.746C11.6654 54.2131 12.2854 54.4837 12.9375 54.5H47.0625C47.7255 54.5 48.3614 54.2366 48.8303 53.7678C49.2991 53.2989 49.5625 52.663 49.5625 52V30.6125M19.025 15.875H40.9625M40.9625 25.2875H19.025M19.025 34.7125H31.2125M19.025 44.125H26.3375"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.5 41.05V44.125H35.5C35.8192 44.1172 36.1234 43.9875 36.35 43.7625L55.7375 24.375L52.175 20.8125L32.7875 40.2C32.5898 40.438 32.4873 40.7409 32.5 41.05Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M58.475 21.6125C58.6505 21.4367 58.7492 21.1984 58.7492 20.95C58.7492 20.7015 58.6505 20.4632 58.475 20.2875L56.3125 18.075C56.1367 17.8994 55.8984 17.8008 55.65 17.8008C55.4015 17.8008 55.1633 17.8994 54.9875 18.075L52.175 20.825L55.7375 24.3875L58.475 21.6125Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl w-fit">Routine Help</div>
            </div>
            <div className="h-fit w-fit pr-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 13 22"
                fill="none"
              >
                <path
                  d="M0.969379 0.377764C0.805787 0.545149 0.714162 0.769887 0.714092 1.00394C0.714023 1.23799 0.805513 1.46278 0.969005 1.63026L10.1031 11.0061L0.963418 20.3746C0.799826 20.542 0.708202 20.7668 0.708132 21.0008C0.708062 21.2349 0.799553 21.4597 0.963045 21.6271C1.04251 21.7088 1.13754 21.7737 1.24251 21.8181C1.34748 21.8624 1.46027 21.8853 1.57422 21.8853C1.68817 21.8853 1.80097 21.8625 1.90597 21.8183C2.01097 21.774 2.10603 21.7091 2.18554 21.6275L11.9048 11.661C12.0755 11.486 12.171 11.2512 12.1711 11.0067C12.1712 10.7622 12.0758 10.5274 11.9052 10.3523L2.19188 0.380004C2.11241 0.298336 2.01739 0.233416 1.91242 0.189076C1.80745 0.144736 1.69466 0.121874 1.5807 0.12184C1.46675 0.121806 1.35395 0.144601 1.24895 0.188878C1.14396 0.233156 1.0489 0.298019 0.969378 0.37964L0.969379 0.377764Z"
                  fill="#60A5FA"
                />
              </svg>
            </div>
          </div>
          <div className="h-0.5 w-full bg-neutral-500 mt-6"></div>
        </div>
        {/* Logout */}
        <div className="mt-6 ">
          <div
            className="text-3xl text-center  text-red-500 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="new-routine text-white ml-[65.5%]  text-center">
        <h1 className="text-2xl font-semibold leading-[20px] pt-[4.5%] text-center">
          Edit Profile
        </h1>
        <div className="h-0.5 bg-neutral-500 fixed top-[8%]  w-full"></div>
      </div>
      <div className=" text-white ml-[65.5%] mt-[4%] pt-[0.5%] text-center  items-center  overflow-hidden">
        <form
          className="flex flex-col gap-5 w-[86.36%] mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3 items-center">
            <div className="avatar w-[100px]  h-[100px] rounded-full  overflow-hidden border-white">
              <img
                src={image}
                className="h-[100%] w-[100%] object-cover"
                alt="profile logo"
              />
            </div>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                document.getElementById('image').click()
              }}
              className="text-blue-500"
            >
              Change Avatar
            </button>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <label htmlFor="name" className="text-2xl font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent w-full"
              />
            </div>
            <div className="h-0.5 w-full bg-neutral-500 mt-4"></div>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <label htmlFor="bio" className="text-2xl font-medium ">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                placeholder="Your Bio"
                onChange={handleChange}
                className="bg-transparent w-full"
              />
            </div>
            <div className="h-0.5 w-full bg-neutral-500 mt-4"></div>
          </div>
          <div>
            <div className="text-2xl font-medium text-left mb-3">Gender</div>
            <div className="flex gap-4 items-center">
              <label className="flex gap-2 text-xl items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="w-6 h-6"
                />
                Male
              </label>
              <label className="flex gap-2 text-xl items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="w-6 h-6"
                />
                Female
              </label>
            </div>
            <div className="h-0.5 w-full bg-neutral-500 mt-4"></div>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <label htmlFor="birthday" className="text-2xl font-medium ">
                Birthdate
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                placeholder="dd/mm/yyyy"
                value={formData.birthDate}
                onChange={handleChange}
                className="bg-transparent"
              />
            </div>
            <div className="h-0.5 w-full bg-neutral-500 mt-4"></div>
          </div>
          <button
            type="submit"
            className="w-[200px] h-[45px] bg-blue-500 hover:bg-blue-600 cursor-pointer mx-auto"
          >
            Save
          </button>
        </form>
      </div>
    </BaseFrameLayout>
  )
}

export default EditProfile
