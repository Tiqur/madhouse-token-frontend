import styles from './styles.module.scss';
import { Navbar, Footer } from '../../components/index.js';

const WhitepaperPage = () => {
  return (
    <div className={styles.main_container}>
      <Navbar/>

      <Footer/>
    </div>
  )
}

export default WhitepaperPage;
