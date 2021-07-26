import styles from './styles.module.scss';
import { Text, Section } from '../index.js';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  DiscordSvg, 
  InstaSvg, 
  TelegramSvg,
  RedditSvg,
  TwitterSvg 
} from '../../assets/index.js';

const Icon = (props) => {
  return (
    <a target='_blank' href={props.to}>
      {<props.icon fill='#7C7C7C' className={styles.icon}/>}
    </a>
  )
}

const Footer = () => {
  return (
    <Section>
      <div className={styles.socials}>
        <Icon icon={DiscordSvg} to=''/>
        <Icon icon={RedditSvg} to=''/>
        <Icon icon={TwitterSvg} to=''/>
        <Icon icon={InstaSvg} to=''/>
        <Icon icon={TelegramSvg} to=''/>
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
