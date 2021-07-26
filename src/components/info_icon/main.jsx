import styles from './styles.module.scss';
import { Text } from '../index.js';

const InfoIcon = (props) => {
  return (
    <div className={styles.icon_container}>
      <props.src style={{height: '8em', width: '8em'}} fill='#7C7C7C'/>
      <Text color='#7C7C7C'>{props.info}</Text>
      <Text>{props.value}</Text>
    </div>
  )
}

export default InfoIcon;
