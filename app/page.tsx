import {redirect} from 'next/navigation'

const Home = () => {
  redirect('/characters')
  return null
}

export default Home
