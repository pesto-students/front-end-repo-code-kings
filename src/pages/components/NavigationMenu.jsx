import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const NavigationMenu = () => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const isExercisesRoute = location.pathname === '/exercises'
  const isProfileRoute = location.pathname === '/profile'
  const isSettingsRoute = location.pathname === '/setting'

  return (
    <div className="text-white">
      <div className="absolute max-sm:h-full max-sm:w-full w-fit lg:top-[25%] lg:left-[5%] ">
        <Logo />
        <nav className="max-sm:bottom-[1.75%] max-sm:w-full max-sm:fixed max-sm:justify-around  flex  lg:flex-col lg:gap-[30px]">
          {isHomePage ? (
            <div className="Home lg:flex items-center text-4xl gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M6.66663 35V15L20 5L33.3333 15V35H23.3333V23.3333H16.6666V35H6.66663Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <div className=" text-blue-500 max-sm:hidden">
                <Link to="/">Home</Link>
              </div>
            </div>
          ) : (
            <div className="Home  lg:flex items-center text-4xl gap-3">
              <div>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M6.66663 35V15L20 5L33.3333 15V35H23.3333V23.3333H16.6666V35H6.66663Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="max-sm:hidden">
                <Link to="/">Home</Link>
              </div>
            </div>
          )}
          {isExercisesRoute ? (
            <div className="Exercises  lg:flex items-center text-4xl gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="25"
                  viewBox="0 0 50 25"
                  fill="none"
                >
                  <path
                    d="M50 10.7143V14.2857H46.4286V21.4286H42.8571V25H37.5V14.2857H12.5V25H7.14286V21.4286H3.57143V14.2857H0V10.7143H3.57143V3.57143H7.14286V0H12.5V10.7143H37.5V0H42.8571V3.57143H46.4286V10.7143H50Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <div className=" text-blue-500 max-sm:hidden">
                <Link to="/exercises">Exercise</Link>
              </div>
            </div>
          ) : (
            <div className="Exercises  lg:flex items-center text-4xl gap-3">
              <div>
                <Link to="/exercises">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="25"
                    viewBox="0 0 50 25"
                    fill="none"
                  >
                    <path
                      d="M50 10.7143V14.2857H46.4286V21.4286H42.8571V25H37.5V14.2857H12.5V25H7.14286V21.4286H3.57143V14.2857H0V10.7143H3.57143V3.57143H7.14286V0H12.5V10.7143H37.5V0H42.8571V3.57143H46.4286V10.7143H50Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="max-sm:hidden">
                <Link to="/exercises">Exercise</Link>
              </div>
            </div>
          )}
          {isProfileRoute ? (
            <div className="Profile  lg:flex items-center text-4xl gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 20.0001C18.1666 20.0001 16.5972 19.3473 15.2916 18.0417C13.9861 16.7362 13.3333 15.1667 13.3333 13.3334C13.3333 11.5001 13.9861 9.93064 15.2916 8.62508C16.5972 7.31953 18.1666 6.66675 20 6.66675C21.8333 6.66675 23.4027 7.31953 24.7083 8.62508C26.0138 9.93064 26.6666 11.5001 26.6666 13.3334C26.6666 15.1667 26.0138 16.7362 24.7083 18.0417C23.4027 19.3473 21.8333 20.0001 20 20.0001ZM6.66663 33.3334V28.6667C6.66663 27.7223 6.90996 26.8545 7.39663 26.0634C7.88329 25.2723 8.52885 24.6679 9.33329 24.2501C11.0555 23.389 12.8055 22.7434 14.5833 22.3134C16.3611 21.8834 18.1666 21.6679 20 21.6667C21.8333 21.6667 23.6388 21.8823 25.4166 22.3134C27.1944 22.7445 28.9444 23.3901 30.6666 24.2501C31.4722 24.6667 32.1183 25.2712 32.605 26.0634C33.0916 26.8556 33.3344 27.7234 33.3333 28.6667V33.3334H6.66663ZM9.99996 30.0001H30V28.6667C30 28.3612 29.9238 28.0834 29.7716 27.8334C29.6194 27.5834 29.4177 27.389 29.1666 27.2501C27.6666 26.5001 26.1527 25.9379 24.625 25.5634C23.0972 25.189 21.5555 25.0012 20 25.0001C18.4444 25.0001 16.9027 25.1879 15.375 25.5634C13.8472 25.939 12.3333 26.5012 10.8333 27.2501C10.5833 27.389 10.3816 27.5834 10.2283 27.8334C10.075 28.0834 9.99885 28.3612 9.99996 28.6667V30.0001ZM20 16.6667C20.9166 16.6667 21.7016 16.3406 22.355 15.6884C23.0083 15.0362 23.3344 14.2512 23.3333 13.3334C23.3333 12.4167 23.0072 11.6323 22.355 10.9801C21.7027 10.3279 20.9177 10.0012 20 10.0001C19.0833 10.0001 18.2988 10.3267 17.6466 10.9801C16.9944 11.6334 16.6677 12.4179 16.6666 13.3334C16.6666 14.2501 16.9933 15.0351 17.6466 15.6884C18.3 16.3417 19.0844 16.6679 20 16.6667Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <div className=" text-blue-500 max-sm:hidden">
                <Link to="/profile">Profile</Link>
              </div>
            </div>
          ) : (
            <div className="Profile  lg:flex items-center text-4xl gap-3">
              <div>
                <Link to="/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20 20.0001C18.1666 20.0001 16.5972 19.3473 15.2916 18.0417C13.9861 16.7362 13.3333 15.1667 13.3333 13.3334C13.3333 11.5001 13.9861 9.93064 15.2916 8.62508C16.5972 7.31953 18.1666 6.66675 20 6.66675C21.8333 6.66675 23.4027 7.31953 24.7083 8.62508C26.0138 9.93064 26.6666 11.5001 26.6666 13.3334C26.6666 15.1667 26.0138 16.7362 24.7083 18.0417C23.4027 19.3473 21.8333 20.0001 20 20.0001ZM6.66663 33.3334V28.6667C6.66663 27.7223 6.90996 26.8545 7.39663 26.0634C7.88329 25.2723 8.52885 24.6679 9.33329 24.2501C11.0555 23.389 12.8055 22.7434 14.5833 22.3134C16.3611 21.8834 18.1666 21.6679 20 21.6667C21.8333 21.6667 23.6388 21.8823 25.4166 22.3134C27.1944 22.7445 28.9444 23.3901 30.6666 24.2501C31.4722 24.6667 32.1183 25.2712 32.605 26.0634C33.0916 26.8556 33.3344 27.7234 33.3333 28.6667V33.3334H6.66663ZM9.99996 30.0001H30V28.6667C30 28.3612 29.9238 28.0834 29.7716 27.8334C29.6194 27.5834 29.4177 27.389 29.1666 27.2501C27.6666 26.5001 26.1527 25.9379 24.625 25.5634C23.0972 25.189 21.5555 25.0012 20 25.0001C18.4444 25.0001 16.9027 25.1879 15.375 25.5634C13.8472 25.939 12.3333 26.5012 10.8333 27.2501C10.5833 27.389 10.3816 27.5834 10.2283 27.8334C10.075 28.0834 9.99885 28.3612 9.99996 28.6667V30.0001ZM20 16.6667C20.9166 16.6667 21.7016 16.3406 22.355 15.6884C23.0083 15.0362 23.3344 14.2512 23.3333 13.3334C23.3333 12.4167 23.0072 11.6323 22.355 10.9801C21.7027 10.3279 20.9177 10.0012 20 10.0001C19.0833 10.0001 18.2988 10.3267 17.6466 10.9801C16.9944 11.6334 16.6677 12.4179 16.6666 13.3334C16.6666 14.2501 16.9933 15.0351 17.6466 15.6884C18.3 16.3417 19.0844 16.6679 20 16.6667Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="max-sm:hidden">
                <Link to="/profile">Profile</Link>
              </div>
            </div>
          )}
          {isSettingsRoute ? (
            <div className="Settings  lg:flex items-center text-4xl gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                >
                  <path
                    d="M28.0671 17.512C28.0671 20.1168 27.0065 22.615 25.1185 24.4569C23.2306 26.2988 20.6699 27.3336 18 27.3336C15.33 27.3336 12.7694 26.2988 10.8815 24.4569C8.9935 22.615 7.93286 20.1168 7.93286 17.512C7.93286 14.9072 8.9935 12.409 10.8815 10.5671C12.7694 8.7252 15.33 7.69043 18 7.69043C20.6699 7.69043 23.2306 8.7252 25.1185 10.5671C27.0065 12.409 28.0671 14.9072 28.0671 17.512ZM28.0671 17.512H18M18 17.512L12.9664 9.00488M18 17.512L12.9664 26.0191"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 28.9707C19.5423 28.9707 21.0696 28.6743 22.4946 28.0985C23.9195 27.5226 25.2143 26.6786 26.3049 25.6146C27.3955 24.5506 28.2607 23.2874 28.8509 21.8972C29.4411 20.507 29.7449 19.017 29.7449 17.5122C29.7449 16.0075 29.4411 14.5174 28.8509 13.1272C28.2607 11.737 27.3955 10.4738 26.3049 9.40983C25.2143 8.34581 23.9195 7.50178 22.4946 6.92594C21.0696 6.35009 19.5423 6.05371 18 6.05371C14.885 6.05371 11.8976 7.26094 9.69503 9.40983C7.49242 11.5587 6.255 14.4732 6.255 17.5122C6.255 20.5512 7.49242 23.4657 9.69503 25.6146C11.8976 27.7635 14.885 28.9707 18 28.9707Z"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 33.8814C27.2667 33.8814 34.7785 26.5529 34.7785 17.5121C34.7785 8.47135 27.2667 1.14282 18 1.14282C8.73318 1.14282 1.22144 8.47135 1.22144 17.5121C1.22144 26.5529 8.73318 33.8814 18 33.8814Z"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 22.4229C19.335 22.4229 20.6153 21.9055 21.5593 20.9846C22.5032 20.0636 23.0335 18.8145 23.0335 17.5121C23.0335 16.2097 22.5032 14.9606 21.5593 14.0397C20.6153 13.1187 19.335 12.6013 18 12.6013C16.665 12.6013 15.3847 13.1187 14.4407 14.0397C13.4967 14.9606 12.9664 16.2097 12.9664 17.5121C12.9664 18.8145 13.4967 20.0636 14.4407 20.9846C15.3847 21.9055 16.665 22.4229 18 22.4229Z"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className=" text-blue-500 max-sm:hidden">
                <Link to="/setting">Settings</Link>
              </div>
            </div>
          ) : (
            <div className="Settings  lg:flex items-center text-4xl gap-3">
              <div>
                <Link to="/setting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                  >
                    <path
                      d="M28.0671 17.512C28.0671 20.1168 27.0065 22.615 25.1185 24.4569C23.2306 26.2988 20.6699 27.3336 18 27.3336C15.33 27.3336 12.7694 26.2988 10.8815 24.4569C8.9935 22.615 7.93286 20.1168 7.93286 17.512C7.93286 14.9072 8.9935 12.409 10.8815 10.5671C12.7694 8.7252 15.33 7.69043 18 7.69043C20.6699 7.69043 23.2306 8.7252 25.1185 10.5671C27.0065 12.409 28.0671 14.9072 28.0671 17.512ZM28.0671 17.512H18M18 17.512L12.9664 9.00488M18 17.512L12.9664 26.0191"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 28.9707C19.5423 28.9707 21.0696 28.6743 22.4946 28.0985C23.9195 27.5226 25.2143 26.6786 26.3049 25.6146C27.3955 24.5506 28.2607 23.2874 28.8509 21.8972C29.4411 20.507 29.7449 19.017 29.7449 17.5122C29.7449 16.0075 29.4411 14.5174 28.8509 13.1272C28.2607 11.737 27.3955 10.4738 26.3049 9.40983C25.2143 8.34581 23.9195 7.50178 22.4946 6.92594C21.0696 6.35009 19.5423 6.05371 18 6.05371C14.885 6.05371 11.8976 7.26094 9.69503 9.40983C7.49242 11.5587 6.255 14.4732 6.255 17.5122C6.255 20.5512 7.49242 23.4657 9.69503 25.6146C11.8976 27.7635 14.885 28.9707 18 28.9707Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 33.8814C27.2667 33.8814 34.7785 26.5529 34.7785 17.5121C34.7785 8.47135 27.2667 1.14282 18 1.14282C8.73318 1.14282 1.22144 8.47135 1.22144 17.5121C1.22144 26.5529 8.73318 33.8814 18 33.8814Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 22.4229C19.335 22.4229 20.6153 21.9055 21.5593 20.9846C22.5032 20.0636 23.0335 18.8145 23.0335 17.5121C23.0335 16.2097 22.5032 14.9606 21.5593 14.0397C20.6153 13.1187 19.335 12.6013 18 12.6013C16.665 12.6013 15.3847 13.1187 14.4407 14.0397C13.4967 14.9606 12.9664 16.2097 12.9664 17.5121C12.9664 18.8145 13.4967 20.0636 14.4407 20.9846C15.3847 21.9055 16.665 22.4229 18 22.4229Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="max-sm:hidden">
                <Link to="/setting">Settings</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
      <div className="max-sm:mr-[2%] max-sm:right-[1%] flex absolute lg:right-[21%] top-[1%] items-center w-fit gap-5">
        <div className="max-min:hidden lg:text-2xl">Profile Name</div>
        <div className="avatar w-[50px]  h-[50px] rounded-full  overflow-hidden border-white">
          <img
            src="/pimage.jpg"
            className="h-[100%] w-[100%] object-cover"
            alt="profile logo"
          />
        </div>
      </div>
    </div>
  )
}

export default NavigationMenu
