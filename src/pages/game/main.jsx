import styles from './styles.module.scss';
import { Navbar, Footer } from '../../components/index.js';
import { WhitepaperPdf } from '../../assets/index.js';
import Unity, { UnityContext } from 'react-unity-webgl';

const GamePage = () => {
  
  const unityContext = new UnityContext({
    loaderUrl: "build/infini.loader.js",
    dataUrl: "build/infini.data",
    frameworkUrl: "build/infini.framework.js",
    codeUrl: "build/infini.wasm",
  })


  return (
    <div className={styles.main_container}>
      <Navbar/>
      <Unity className={styles.game} unityContext={unityContext}/>
      <Footer/>
    </div>
  )
}

export default GamePage;
