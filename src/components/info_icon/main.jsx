import styles from './styles.module.scss';
import { Text } from '../index.js';

const InfoIcon = (props) => {
  return (
    <div className={styles.icon_container}>
      <props.src className={styles.icon} fill='#7C7C7C'/>
      <Text size={2.2} color='#D7D7D7'>{props.info}</Text>
      <Text>{props.value}</Text>
    </div>
  )
}

export default InfoIcon;
