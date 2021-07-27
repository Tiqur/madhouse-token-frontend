import styles from './styles.module.scss';
import { Navbar, Footer } from '../../components/index.js';
import { WhitepaperPdf } from '../../assets/index.js';

const WhitepaperPage = () => {
  return (
    <div className={styles.main_container}>
      <Navbar/>
        <div className={styles.inner_container}>
          <iframe className={styles.pdf_container} src={WhitepaperPdf}/>
        </div>
      <Footer/>
    </div>
  )
}

export default WhitepaperPage;
