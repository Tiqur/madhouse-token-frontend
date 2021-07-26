import styles from './styles.module.scss';
import { Text } from '../index.js';

const Section = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.section_container}>
        {props.title && 
          <Text margin='0 0 1.5em 0' size={4}>{props.title}</Text>
        }
        {props.children}
      </div>
    </div>
  )
}

export default Section;
