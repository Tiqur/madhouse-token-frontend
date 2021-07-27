import styles from './styles.module.scss';
import { LogoPng } from '../../assets/index.js';
import { Text } from '../index.js';
import { Link } from 'react-router-dom';
import Hamburger from 'react-hamburger-menu';
import { useState } from 'react';

const NavLink = (props) => {
  return (
    <Link to={{pathname: props.to}} className={props.className}>
      <Text size={1.6}>{props.text}</Text>
    </Link>
  )
}

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <Link className={styles.title_container} to={{pathname: '/'}}>
          <img src={LogoPng} style={{height: '3em', width: '3em'}} alt='logo'/>
          <Text size={4.5} _style='italic' margin='0 0 0 0.15em' weight='bold' family='Barlow Condensed'>MADHOUSE</Text>
        </Link>
        <div className={styles.nav_links_container}>
          <NavLink to='/' text='Home'/>
          <NavLink to='/about' text='About'/>
          <NavLink to='/charts' text='Charts'/>
          <NavLink to='/whitepaper' text='Whitepaper'/>
        </div>
        <div className={styles.hamburger}>
          <Hamburger isOpen={hamburger} menuClicked={() => setHamburger(!hamburger)} color='#D7D7D7'/>
          <div className={styles.menu_overlay}/>
          <div className={styles.side_menu}>
            <NavLink className={styles.hamburger_link} to='/' text='Home'/>
            <NavLink className={styles.hamburger_link} to='/about' text='About'/>
            <NavLink className={styles.hamburger_link} to='/charts' text='Charts'/>
            <NavLink className={styles.hamburger_link} to='/whitepaper' text='Whitepaper'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
