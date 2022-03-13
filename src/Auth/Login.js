import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()



  const handleSignIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('user login:', cred.user)

      })
      .catch((e) => console.log(e.message))
  }

  return (
    <div>


      <form className="login" onSubmit={handleSignIn}>
        <label htmlFor="email">Email:</label>
        <input type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login