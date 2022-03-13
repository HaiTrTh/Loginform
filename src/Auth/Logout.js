import {
  signOut
} from 'firebase/auth'
import { auth } from '../firebase'

function Logout() {
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log('the user signed out')
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <div>
      <button onClick={handleSignout}>Logout</button>
    </div>
  )
}

export default Logout