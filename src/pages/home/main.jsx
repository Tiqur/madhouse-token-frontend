import styles from './styles.module.scss';
import { Text, Navbar, InfoIcon, Section, Footer } from '../../components/index.js';
import { LogoSvg } from '../../assets/index.js';
import { DropSvg, MoneySvg, VaultSvg, TokenDistribution } from '../../assets/index.js';
import { Link } from 'react-router-dom';
import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';
import {
  DiscordSvg, 
  TwitterSvg,
} from '../../assets/index.js';

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
    <Link to={props.to}>
      <div className={styles[props.primary ? 'primary_button' : 'secondary_button']}>
          <Text color='#D7D7D7'>{props.text}</Text>
      </div>
    </Link>
  )
}

const TeamCard = (props) => {
  return (
    <div className={styles.team_card}>
      <img className={styles.team_card_image} src={props.image}/>
      <Text size={1.2} weight='bold' color='#D4D4D4'>{props.name}</Text>
      <Text size={1} color='#AFAFAF'>{props.title}</Text>
      <div className={styles.team_card_socials}>
        <DiscordSvg fill='#929292'/>
        <TwitterSvg fill='#929292'/>
      </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <div id='home' className={styles.main_container}>
      <Navbar/>
      <div className={styles.hero_container}>
        <div className={styles.inner_hero_container}>
          <div className={styles.hero_content}>
            <div className={styles.hero_text}>
              <Text family='League Spartan' size={9}>Introducing:</Text>
              <Text family='League Spartan' size={7.5}>The Madhouse Token</Text>
              <Text size={2} family='Inter'>MADE FOR INVESTORS, BY INVESTORS</Text>
            </div>
            <div className={styles.hero_buttons_container}>
              <HeroButton to='/whitepaper' text='Lite Paper'/>
              <HeroButton primary to='/swap' text='Buy Now!'/>
            </div>
          </div>
          <img src={LogoSvg} className={styles.hero_logo} alt='hero_logo'/>
        </div>
      </div>

      <Section>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <InfoIcon src={DropSvg} info='Liquidity:' value='N/A'/>
          <InfoIcon src={MoneySvg} info='Market Cap:' value='N/A'/>
          <InfoIcon src={VaultSvg} info='Supply:' value='1,000,000,000'/>
        </div>
      </Section>

      <Section id='about' title='About'>
        <Text>The Madhouse token is a unique token with first of its kind tokenomics. We invite you to join us in the new age of how tokenomics was meant to be. We are a team of like minded investors united by a common goal to make the crypto space more geared towards the investor. From our origins in the Markus Madhouse dogecoin youtube community we have bound together our combined brain power and unique talent pool to develop a new era of optimized smart contracts. The Madhouse Token is the first of it’s kind and will be a game changer in the cryto space. You will be able to share and spend it freely with no tax on transfers. We call it deflationomics, and it works the way tokenomics should work. Investors are only taxed when buying and selling to grow the liquidity pool and, most importantly grow their own bags. With our deflationomics, Madhouse Tokens can and most certainly will be used as an everyday currency in the future due to our Zero tax on transfers.</Text>
      </Section>

      <Section title='Deflationomics'>
        <div className={styles.tokenomics_container}>
          <img src={TokenDistribution} fill='#7C7C7C' alt='token distribution graph' className={styles.token_distribution}/>
          <ul className={styles.tokenomics_list}>
            <li><span className={styles.dot}/>Purchases: 3% ( 2.5% Holders, 0.5% LPP )</li>
            <li><span className={styles.dot}/>Sales: 25% ( 20% Holders, 5% LPP )</li>
            <li><span className={styles.dot}/>Low gas fees</li>
            <li><span className={styles.dot}/>0% TRANSFER FEE!!</li>
          </ul>
        </div>
      </Section>
      
      <Section>
        <Timeline theme={roadmap_theme}>
          <Events>
            <TextEvent date='Q3 2021' text="Launch presale and token, marketing with reddit tiktok, youtubers. Participate in AMA's, Launch website, Start an AD campaign, Shill on coinsniper, telegram, and various other areas.  Do free audit while searching for paid audit.  Look into paid marketing with a marketing agency"/>
            <TextEvent date='Q4 2021' text='Work on gaining over 2.5k wallet holders.  Get logo on trust wallet and bscscan.  Do paid marketing via banners.  Change sales tax TBD.  Get listed on Coinmarketcap and Coingecko.' />
            <TextEvent date='Q1 2022' text='Change sales tax TBD. Get listed on Bitmart.  Second big marketing push.' />
            <TextEvent date='Q2 2022' text='Change sales tax TBD, get listed with other exchanges.' />
            <TextEvent date='Q3 2022' text='Reach out to Binance, Coinbase, Hitbtc, and other popular exchanges.' />
            <TextEvent date='Q4 2022' text='Welcome to the moon!' />
          </Events>
        </Timeline>
      </Section>

      <Section>
        <div className={styles.team_container}>
          <TeamCard name='Markus' title='Mastermind' image='https://cdn.discordapp.com/avatars/144837105082826752/206185a5bc2fbf1bd1e7bb2f8197dec7.png?size=128'/>
          <TeamCard name='Markus' title='Mastermind' image='https://cdn.discordapp.com/avatars/144837105082826752/206185a5bc2fbf1bd1e7bb2f8197dec7.png?size=128'/>
          <TeamCard name='Markus' title='Mastermind' image='https://cdn.discordapp.com/avatars/144837105082826752/206185a5bc2fbf1bd1e7bb2f8197dec7.png?size=128'/>
          <TeamCard name='Markus' title='Mastermind' image='https://cdn.discordapp.com/avatars/144837105082826752/206185a5bc2fbf1bd1e7bb2f8197dec7.png?size=128'/>
          <TeamCard name='Markus' title='Mastermind' image='https://cdn.discordapp.com/avatars/144837105082826752/206185a5bc2fbf1bd1e7bb2f8197dec7.png?size=128'/>
        </div>
      </Section>

      <Footer/>
    </div>
  )
}

export default HomePage;
