import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'

const Home = () => {
  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <div className="flex flex-col justify-evenly top-[20%] left-[32%] absolute  gap-[30px]  items-center">
        <div className="text-white text-4xl font-semibold  ">Routines</div>
        <div className="h-200 w-200 bg-neutral-600  flex flex-col justify-center items-center  cursor-pointer">
          <div className="relative w-16 h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M49.5 23.4875V8.0625C49.4837 7.41035 49.2131 6.79041 48.746 6.335C48.2789 5.87959 47.6524 5.6248 47 5.625H12.9375C12.2854 5.64131 11.6654 5.91188 11.21 6.37897C10.7546 6.84605 10.4998 7.47265 10.5 8.125V52C10.4998 52.6524 10.7546 53.2789 11.21 53.746C11.6654 54.2131 12.2854 54.4837 12.9375 54.5H47.0625C47.7255 54.5 48.3614 54.2366 48.8303 53.7678C49.2991 53.2989 49.5625 52.663 49.5625 52V30.6125M19.025 15.875H40.9625M40.9625 25.2875H19.025M19.025 34.7125H31.2125M19.025 44.125H26.3375"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.5 41.05V44.125H35.5C35.8192 44.1172 36.1234 43.9875 36.35 43.7625L55.7375 24.375L52.175 20.8125L32.7875 40.2C32.5898 40.438 32.4873 40.7409 32.5 41.05Z"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58.475 21.6125C58.6505 21.4367 58.7492 21.1984 58.7492 20.95C58.7492 20.7015 58.6505 20.4632 58.475 20.2875L56.3125 18.075C56.1367 17.8994 55.8984 17.8008 55.65 17.8008C55.4015 17.8008 55.1633 17.8994 54.9875 18.075L52.175 20.825L55.7375 24.3875L58.475 21.6125Z"
                stroke="#60A5FA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-white font-normal text-2xl">New Routine</div>
        </div>
        <div className="h-200 w-200 bg-neutral-600  flex flex-col justify-center items-center cursor-pointer ">
          <div className="relative w-16 h-16 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M43.75 43.7499L34.7021 34.702M34.7021 34.702C36.2498 33.1543 37.4775 31.317 38.3151 29.2948C39.1527 27.2727 39.5838 25.1054 39.5838 22.9166C39.5838 20.7279 39.1527 18.5605 38.3151 16.5384C37.4775 14.5162 36.2498 12.6789 34.7021 11.1312C33.1544 9.58351 31.317 8.35582 29.2949 7.51822C27.2727 6.68062 25.1054 6.24951 22.9167 6.24951C20.7279 6.24951 18.5606 6.68062 16.5384 7.51822C14.5163 8.35582 12.6789 9.58351 11.1313 11.1312C8.00557 14.2569 6.24957 18.4962 6.24957 22.9166C6.24957 27.337 8.00557 31.5763 11.1313 34.702C14.2569 37.8277 18.4963 39.5837 22.9167 39.5837C27.3371 39.5837 31.5764 37.8277 34.7021 34.702Z"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-white font-normal text-2xl">Explore Routine</div>
        </div>
      </div>
    </BaseFrameLayout>
  )
}

export default Home
