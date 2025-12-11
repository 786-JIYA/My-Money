import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className={styles.navbar}>
        <ul>
            <li className={styles.title}>
                myMoney
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup" >SignUp</Link></li>
        </ul>
    </div>
  )
}
export default NavBar