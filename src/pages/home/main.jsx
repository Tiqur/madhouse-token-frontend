import styles from './styles.module.scss';
import { useState, useRef, useEffect } from 'react';
import { Text, Navbar, InfoIcon, Section, Footer } from '../../components/index.js';
import { LogoSvg } from '../../assets/index.js';
import { DropSvg, MoneySvg, VaultSvg, TokenDistribution } from '../../assets/index.js';
import { Link } from 'react-router-dom';
import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';
import {
  DiscordSvg, 
  TwitterSvg,
  LinkedinSvg,
  AltmanWebp,
  BenzolioWebp,
  ChichiWebp,
  LucidWebp,
  MadfozWebp,
  MarkusWebp,
  TiqurWebp,
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
      <div>
      <img className={styles.team_card_image} src={props.image}/>
        <Text size={1.2} weight='bold' color='#D4D4D4'>{props.name}</Text>
        <Text size={1} color='#AFAFAF'>{props.title}</Text>
      </div>
      <div className={styles.team_card_socials}>
        {props.children}
      </div>
    </div>
  )
}

const TeamSocial = (props) => {
  return (
    <a target='_blank' className={styles.team_card_social} href={props.to}>
      <props.icon fill='#929292'/>
    </a>
  )
}

const HomePage = () => {
  const [contract_scroll, set_contract_scroll] = useState(false);
  const contract_ref = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (contract_ref.current) {
        const scroll_pos = contract_ref.current.getBoundingClientRect().top;
        set_contract_scroll(scroll_pos);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, [])

  return (
    <div id='home' className={styles.main_container}>
      <Navbar contract_scroll={contract_scroll === 0}/>
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

      <div ref={contract_ref} className={styles.contract_address}>
        <Text color='#9a989a' weight='bold'>Binance Smart Chain Contract: 0x8c4885867d30f03ad04388cee01c65d11d192e61</Text>
      </div>

      <Section>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <InfoIcon src={DropSvg} info='Liquidity:' value='N/A'/>
          <InfoIcon src={MoneySvg} info='Market Cap:' value='N/A'/>
          <InfoIcon src={VaultSvg} info='Supply:' value='1,000,000,000'/>
        </div>
      </Section>

      <Section id='about' title='About'>
        <Text>The Madhouse Token is a unique token with a revolutionary system of Deflationomics which incorporates true burning of tokens from the supply and our proprietary liquidity protection protocol.</Text>
        <Text>From our origins in the Markus Madhouse dogecoin YouTube community we have bound together our combined brain power and unique talent pool to develop a new era of optimised smart contracts.</Text>
        <Text>The Madhouse Token is the first of it’s kind and will be a game changer in the crypto space. You will be able to share and spend it freely with no tax on transfers, the way it should be. Investors are only taxed when buying and selling to protect the liquidity pool and, most importantly, grow their own bags.
With our custom Deflationomics Madhouse Tokens can, and most certainly will be, used as an everyday currency going forward.</Text>
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
      
      <Section title='Roadmap'>
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

      <Section title='Meet the team'>
        <div className={styles.team_container}>
          <TeamCard name='Markus' title='Creator / Founder' image={MarkusWebp}>
            <TeamSocial to='https://discord.com/users/144837105082826752' icon={DiscordSvg}/>
            <TeamSocial to='https://www.linkedin.com/in/nick-munson-28591615a/' icon={LinkedinSvg}/>
          </TeamCard>
          <TeamCard name='Benzolio' title='Creator / Smart Contract Developer' image={BenzolioWebp}>
            <TeamSocial to='https://discord.com/users/352999571833749504' icon={DiscordSvg}/>
            <TeamSocial to='https://twitter.com/benzolio' icon={TwitterSvg}/>
          </TeamCard>
          <TeamCard name='Tiqur' title='Web Developer' image={TiqurWebp}>
            <TeamSocial to='https://discord.com/users/197010373050761216' icon={DiscordSvg}/>
            <TeamSocial to='https://www.linkedin.com/in/trevor-brage-8b6865217' icon={LinkedinSvg}/>
          </TeamCard>
          <TeamCard name='Lucid' title='Graphic Designer' image={LucidWebp}>
            <TeamSocial to='https://discord.com/users/197010373050761216' icon={DiscordSvg}/>
            <TeamSocial to='https://twitter.com/LucidToxic02' icon={TwitterSvg}/>
          </TeamCard>
          <TeamCard name='Altman' title='Telegram Coordinator / PR Manager' image={AltmanWebp}>
            <TeamSocial to='https://discord.com/users/701178867079184546' icon={DiscordSvg}/>
            <TeamSocial to='https://twitter.com/Altman420' icon={TwitterSvg}/>
          </TeamCard>
          <TeamCard name='Madfoz' title='Telegram Coordinator / PR Manager' image={MadfozWebp}>
            <TeamSocial to='https://discord.com/users/491203044101586975' icon={DiscordSvg}/>
            <TeamSocial to='' icon={TwitterSvg}/>
          </TeamCard>
          <TeamCard name='Chichi' title='Social media manager' image={ChichiWebp}>
            <TeamSocial to='https://discord.com/users/731087373177192451' icon={DiscordSvg}/>
            <TeamSocial to='https://twitter.com/ImJustMe_3300' icon={TwitterSvg}/>
          </TeamCard>
        </div>
      </Section>

      <Footer/>
    </div>
  )
}

export default HomePage;
