import axios from 'axios'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
const token = cookies.get('jwt')
const getUser = async () => {
  try {
    const user = await axios.get(
      'https://energia-app.vercel.app/api/v1/users/me',
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
