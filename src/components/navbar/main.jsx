import styles from './styles.module.scss';
import { LogoSvg } from '../../assets/index.js';
import { HashLink } from 'react-router-hash-link';
import { Text } from '../index.js';
import { Link } from 'react-router-dom';
import Hamburger from 'react-hamburger-menu';
import { useState, useRef } from 'react';

const NavLink = (props) => {
  const child = <Text size={1.6}>{props.text}</Text>;

  return (
    <>
      { props.to.includes('http')
        ?  <a style={{ textDecoration: 'none' }} className={props.className} target='_blank' href={props.to}>{child}</a>
        :  <HashLink to={props.to} className={props.className} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: props.to.endsWith('home') ? 'start' : 'center' })} children={child}/>
      }
    </>
  )
}

const Navbar = (props) => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div style={{paddingTop: props.contract_scroll ? '2.5em' : 'initial', zIndex: !props.contract_scroll ? '1001' : 'initial'}} className={styles.container}>
      <div className={styles.inner_container}>
        <Link className={styles.title_container} to={{pathname: '/'}}>
          <img src={LogoSvg} style={{height: '3em', width: '3em'}} alt='logo'/>
          <Text size={4.5} _style='italic' margin='0 0 0 0.15em' weight='bold' family='Barlow Condensed'>MADHOUSE</Text>
        </Link>
        <div className={styles.nav_links_container}>
          <NavLink to='/#home' text='Home'/>
          <NavLink to='/#about' text='About'/>
          <NavLink to='/#socials' text='Socials'/>
    {
      // <NavLink to='/charts' text='Charts'/>
    }
          <NavLink to='/whitepaper' text='Lite Paper'/>
          <NavLink to='https://hacken.io/wp-content/uploads/2021/08/Madhouse_20082021SCAudit_Report_2-2.pdf' text='Audit'/>
        </div>
        <div className={styles.hamburger}>
          <Hamburger isOpen={hamburger} menuClicked={() => setHamburger(!hamburger)} color='#D7D7D7'/>
          {hamburger &&  
            <>
              <div className={styles.menu_overlay} onClick={() => {setHamburger(false)}}/>
              <div className={styles.side_menu}>
                <NavLink className={styles.hamburger_link} to='/#home' text='Home'/>
                <NavLink className={styles.hamburger_link} to='/#about' text='About'/>
                <NavLink className={styles.hamburger_link} to='/#socials' text='Socials'/>
                <NavLink className={styles.hamburger_link} to='/whitepaper' text='Lite Paper'/>
                {
                  // <NavLink className={styles.hamburger_link} to='/charts' text='Charts'/>
                }
                <NavLink className={styles.hamburger_link} to='https://hacken.io/wp-content/uploads/2021/08/Madhouse_20082021SCAudit_Report_2-2.pdf' text='Audit'/>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;
