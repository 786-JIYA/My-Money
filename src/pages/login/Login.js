import { useState } from 'react'
import styles from './Login.module.css'
function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <div onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label htmlFor='email'>
        <span>Email : </span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label htmlFor='password'>
        <span>Password : </span>
        <input
          type='password'
          onChange={(e) => setPassword((e.target.value))}
          value={password}
        />
      </label>

      <button className='btn' onClick={(e) => handleSubmit(e)} >Login</button>
    </div>
  )
}
export default Login