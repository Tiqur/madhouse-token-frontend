import styles from './styles.module.scss';
import { Navbar } from '../index.js';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
