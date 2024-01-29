import BaseFrameLayout from './components/Baseframe'
import NavigationMenu from './components/NavigationMenu'
import RoutineMenu from './components/RoutineMenu'

const Home = () => {
  return (
    <BaseFrameLayout>
      <NavigationMenu />
      <RoutineMenu />
    </BaseFrameLayout>
  )
}

export default Home
