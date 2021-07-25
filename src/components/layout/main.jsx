import styles from './styles.module.scss';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
