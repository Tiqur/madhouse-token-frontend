import styles from './styles.module.scss';
import { Navbar, Footer } from '../../components/index.js';

const SwapPage = () => {
  return (
    <div className={styles.main_container}>
      <Navbar/>
        <div className={styles.inner_container}>
         <iframe src="https://poocoin.app/embed-swap" width="420" height="630"/>
        </div>
      <Footer/>
    </div>
  )
}

export default SwapPage;
