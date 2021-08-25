import styles from './styles.module.scss';
import { Navbar, Footer, Text } from '../../components/index.js';


const SwapPage = () => {
  const telemgram_link = <a target='_blank' href='https://t.me/MadHouseToken'>telegram</a>
  const presale_link = <a target='_blank' href='http://dxsale.app/app/v2_9/defipresale?saleID=2884&chain=BSC'>presale</a>

  return (
    <div className={styles.main_container}>
      <Navbar/>
        <div className={styles.inner_container}>
          <Text size={2.5}>We are currently in the {presale_link} whitelisting phase.  Please join our {telemgram_link} for more information!</Text>
          { /* 
          <div className={styles.frame_container}>
              <Text size={2} margin='0 0 2em 0' weight={1000}>Contract Address:</Text>
              <Text size={2} margin='-1em 0 2em 0' weight={1000}>-----------------------------------</Text>
              <iframe src="https://poocoin.app/embed-swap" width="420" height="630"/> 
          </div>
          */ }
        </div>
      <Footer/>
    </div>
  )
}

export default SwapPage;
