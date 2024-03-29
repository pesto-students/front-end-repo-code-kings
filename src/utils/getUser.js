import axios from 'axios'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
const token = cookies.get('jwt')
// console.log(token)
const getUser = async () => {
  try {
    const user = await axios.get(
      'https://energia-backend.onrender.com/api/v1/users/me',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return user.data.data.data
  } catch (error) {
    console.log(error)
  }
}

export default getUser
