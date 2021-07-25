import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <Link to={{pathname: props.to}}>
      <a>{props.text}</a>
    </Link>
  )
}

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <p>MADHOUSE</p>
      </div>
      <div className={styles.nav_links_container}>
        <NavLink to='/home' text='Home'/>
        <NavLink to='/about' text='About'/>
        <NavLink to='/charts' text='Charts'/>
        <NavLink to='/whitepaper' text='Whitepaper'/>
      </div>
    </div>
  )
}

export default Navbar;
