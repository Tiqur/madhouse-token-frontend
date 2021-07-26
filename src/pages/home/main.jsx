import styles from './syles.module.scss';
import { Text, Navbar, InfoIcon } from '../../components/index.js';
import { LogoPng } from '../../assets/index.js';
import { DropSvg, MoneySvg, VaultSvg } from '../../assets/index.js';

const HomePage = () => {
  return (
    <div className={styles.main_container}>
      <Navbar/>
      <div className={styles.hero_container}>
        <div className={styles.hero_text}>
          <Text family='League Spartan Bold' size={7}>Introducing:</Text>
          <Text family='League Spartan Bold' size={5.5}>The Madhouse Token</Text>
          <Text size={2} family='Inter'>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</Text>
        </div>
        <img src={LogoPng} className={styles.hero_logo} alt='hero_logo'/>
      </div>

      <div className={styles.content_container}>
        <InfoIcon src={DropSvg} info='Liquidity:' value='223,912'/>
        <InfoIcon src={MoneySvg} info='Market Cap:' value='$653,301'/>
        <InfoIcon src={VaultSvg} info='Supply:' value='1,000,000,000'/>
      </div>

      <div className={styles.content_container}>
    
      </div>

    </div>
  )
}

export default HomePage;
