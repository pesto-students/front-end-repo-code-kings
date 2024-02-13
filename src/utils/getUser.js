import axios from 'axios'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
const token = cookies.get('jwt')
const getUser = async () => {
  try {
    const user = await axios.get('localhost:3000/api/v1/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return user
  } catch (error) {
    console.log(error)
  }
}

export default getUser
