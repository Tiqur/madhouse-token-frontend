import styles from './styles.module.scss';
import { Text, Section } from '../index.js';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  DiscordSvg, 
  YoutubeSvg, 
  TelegramSvg,
  TwitterSvg,
  RedditSvg,
  NomicsSvg
} from '../../assets/index.js';

const Icon = (props) => {
  return (
    <a rel="noopener" target='_blank' aria-label={props.alt} href={props.to}>
      {<props.icon fill='#7C7C7C' alt={props.alt} className={styles.icon}/>}
    </a>
  )
}

const Footer = () => {
  return (
    <Section id='socials'>
      <div className={styles.socials}>
        <Icon icon={DiscordSvg} alt='discord link' to='https://discord.gg/YPfUq7wv7f'/>
    { /*
        <Icon icon={YoutubeSvg} alt='youtube link' to=''/>
    */ }
        <Icon icon={TwitterSvg} alt='twitter link' to='https://twitter.com/MadHouseToken'/>
        <Icon icon={RedditSvg} alt='reddit link' to='https://www.reddit.com/r/MadHouseToken'/>
        <Icon icon={TelegramSvg} alt='telegram link' to='https://t.me/MadHouseToken'/>
        <Icon icon={NomicsSvg} alt='nomics link' to='https://nomics.com/assets/mhtc-madhouse-token'/>
      </div>
      <div className={styles.links}>
        <BrowserRouter>
          <Text>© Copyright 2021 | Madhouse Team</Text>
        </BrowserRouter>
      </div>
    </Section>
  )
}

export default Footer;
