import styles from './syles.module.scss';
import { Text, Navbar, InfoIcon, Section, Footer } from '../../components/index.js';
import { LogoPng } from '../../assets/index.js';
import { DropSvg, MoneySvg, VaultSvg } from '../../assets/index.js';
import { Link } from 'react-router-dom';

const HeroButton = (props) => {
  return (
    <div className={styles.hero_button} style={{background: props.primary ? '#B0191A' : '#21272D'}}>
      <Link to={{pathname: props.to}}>
        <Text color='#D7D7D7'>{props.text}</Text>
      </Link>
    </div>
  )
}

const HomePage = () => {
  return (
    <div className={styles.main_container}>
      <Navbar/>
      <div className={styles.hero_container}>
        <div className={styles.inner_hero_container}>
          <div className={styles.hero_content}>
            <div className={styles.hero_text}>
              <Text family='League Spartan Bold' size={7}>Introducing:</Text>
              <Text family='League Spartan Bold' size={5.5}>The Madhouse Token</Text>
              <Text size={2} family='Inter'>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</Text>
            </div>
            <div className={styles.hero_buttons_container}>
              <HeroButton to='/' text='Whitepaper'/>
              <HeroButton primary to='/' text='Buy Now!'/>
            </div>
          </div>
          <img src={LogoPng} className={styles.hero_logo} alt='hero_logo'/>
        </div>
      </div>

      <Section>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <InfoIcon src={DropSvg} info='Liquidity:' value='223,912'/>
          <InfoIcon src={MoneySvg} info='Market Cap:' value='$653,301'/>
          <InfoIcon src={VaultSvg} info='Supply:' value='1,000,000,000'/>
        </div>
      </Section>

      <Section title='About'>
        <Text>Lorem ipsum damet, consectetur adipiscing Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   Phasellus iaculis consequat libero, a malesuada nulla viverra inLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   PLorem ipLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   Phasellus iaculis consequat libero, a malesuada nulla viverra insum dolor sit amet, consectetur adipiscing elit. Cras augue arcu</Text>
      </Section>

      <Footer/>
    </div>
  )
}

export default HomePage;
