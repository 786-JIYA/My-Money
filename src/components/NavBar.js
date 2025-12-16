import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
function NavBar() {

  const {logout} = useLogout()

  return (
    <div className={styles.navbar}>
        <ul>
            <li className={styles.title}>
                myMoney
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup" >SignUp</Link></li>
            <li>
              <button className='btn' onClick={logout} >Logout</button>
            </li>
        </ul>
    </div>
  )
}
export default NavBar