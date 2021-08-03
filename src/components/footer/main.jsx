import styles from './styles.module.scss';
import { Text, Section } from '../index.js';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  DiscordSvg, 
  YoutubeSvg, 
  TelegramSvg,
  TwitterSvg 
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
        <Icon icon={DiscordSvg} alt='discord link' to='https://discord.gg/vxpsRRX4jj'/>
        <Icon icon={YoutubeSvg} alt='youtube link' to='https://www.youtube.com/channel/UCNXUmJLdKoe6cAqyaseVoyA'/>
        <Icon icon={TwitterSvg} alt='twitter link' to='https://twitter.com/MadHouseToken'/>
        <Icon icon={TelegramSvg} alt='telegram link' to='https://t.me/MadHouseToken'/>
      </div>
      <div className={styles.links}>
        <BrowserRouter>
          <Text>© Copyright 2021 | Markus Madhouse</Text>
        </BrowserRouter>
      </div>
    </Section>
  )
}

export default Footer;
