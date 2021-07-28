import styles from './syles.module.scss';
import { Text, Navbar, InfoIcon, Section, Footer } from '../../components/index.js';
import { LogoPng } from '../../assets/index.js';
import { DropSvg, MoneySvg, VaultSvg, TokenomicsSvg } from '../../assets/index.js';
import { Link } from 'react-router-dom';
import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';

const roadmap_theme = createTheme(themes.default, {
  timelineTrack: {
    backgroundColor: '#686868'
  },
  date: {
    backgroundColor: '#740000'
  },
  marker: {
    borderColor: '#686868',
    backgroundColor: '#740000'
  },
  card: {
    backgroundColor: '#46454B',
    color: '#CDCDCD'
  }
})

const HeroButton = (props) => {
  return (
    <Link to={{pathname: props.to}}>
      <div className={styles.hero_button} style={{background: props.primary ? '#B0191A' : '#21272D'}}>
          <Text color='#D7D7D7'>{props.text}</Text>
      </div>
    </Link>
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
              <Text size={2} family='Inter'>MADE FOR INVESTORS, BY INVESTORS</Text>
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
        <Text>The Madhouse token is a unique token with first of its kind tokenomics. We invite you to join us in the new age of how tokenomics was meant to be. We are a team of like minded investors united by a common goal to make the crypto space more geared towards the investor. From our origins in the Markus Madhouse dogecoin youtube community we have bound together our combined brain power and unique talent pool to develop a new era of optimised smart contracts. The Madhouse Token is the first of it’s kind and will be a game changer in the cryto space. You will be able to share and spend it freely with no tax on transfers, the way tokenomics should work. Investors are only taxed when buying and selling to grow the liquidity pool and, most importantly grow their own bags. With our custom tokenomics, Madhouse Tokens can and most certainly will be used as an everyday currency in the future due to our Zero tax on transfers.</Text>
      </Section>

      <Section title='Tokenomics'>
        <div className={styles.tokenomics_container}>
          <TokenomicsSvg fill='#7C7C7C' className={styles.tokenomics_svg}/>
          <ul className={styles.tokenomics_list}>
            <li><span className={styles.dot}/>Example Tokenomic</li>
            <li><span className={styles.dot}/>Example Tokenomic</li>
            <li><span className={styles.dot}/>Example Tokenomic</li>
            <li><span className={styles.dot}/>Example Tokenomic</li>
          </ul>
        </div>
      </Section>
      
      <Section>
        <Timeline theme={roadmap_theme}>
          <Events>
            <TextEvent date='Date 1' text='Text Element 1' />
            <TextEvent date='Date 2' text='Text Element 2' />
            <TextEvent date='Date 3' text='Text Element 3' />
          </Events>
        </Timeline>
      </Section>

      <Footer/>
    </div>
  )
}

export default HomePage;
