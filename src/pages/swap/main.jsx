import styles from './styles.module.scss';
import { Navbar, Footer, Text } from '../../components/index.js';


const SwapPage = () => {
  return (
    <div className={styles.main_container}>
      <Navbar/>
        <div className={styles.inner_container}>
          <div className={styles.frame_container}>
              <Text size={2} margin='0 0 2em 0' weight={1000}>Token Address:</Text>
              <Text size={2} margin='-1em 0 2em 0' weight={1000}>0x8c4885867d30f03ad04388cee01c65d11d192e61</Text>
              <iframe src="https://poocoin.app/embed-swap?outputCurrency=0x8c4885867D30F03AD04388cee01C65D11D192e61" width="420" height="630"/> 
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default SwapPage;
