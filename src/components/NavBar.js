import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
function NavBar() {

  const {logout} = useLogout()
  const {user} =useAuthContext()

  return (
    <div className={styles.navbar}>
        <ul>
            <li className={styles.title}>
                myMoney
            </li>
            {!user && (
             <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup" >SignUp</Link></li>
             </>
            )}

            <li>
              {user && (
              <>
              <li>
              <li>Hello ,{user.displayName}</li>
              <button className='btn' onClick={logout} >Logout</button>
              </li>
              </>
              )}
            </li>
        </ul>
    </div>
  )
}
export default NavBar