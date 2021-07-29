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
    <a rel="noopener" target='_blank' href={props.to}>
      {<props.icon fill='#7C7C7C' className={styles.icon}/>}
    </a>
  )
}

const Footer = () => {
  return (
    <Section id='socials'>
      <div className={styles.socials}>
        <Icon icon={DiscordSvg} to='https://discord.gg/vxpsRRX4jj'/>
        <Icon icon={YoutubeSvg} to='https://www.youtube.com/channel/UCNXUmJLdKoe6cAqyaseVoyA'/>
        <Icon icon={TwitterSvg} to='https://twitter.com/MadHouseToken'/>
        <Icon icon={TelegramSvg} to='https://t.me/MadHouseToken'/>
      </div>
      <div className={styles.links}>
        <BrowserRouter>
          <Link>
            <Text>Terms of Service</Text>
          </Link>
          <Link>
            <Text>Privacy Policy</Text>
          </Link>
        </BrowserRouter>
      </div>
    </Section>
  )
}

export default Footer;
