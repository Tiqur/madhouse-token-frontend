import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, WhitepaperPage, SwapPage, GamePage } from './pages/index.js';
import { GlobalProvider } from './GlobalContext.jsx';
import "@fontsource/barlow-condensed";
import "@fontsource/inter";
import "@fontsource/league-spartan/500.css";
import "@fontsource/open-sans";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/swap' component={SwapPage}/>
          <Route exact path='/whitepaper' component={WhitepaperPage}/>
          <Route exact path='/unity-game' component={GamePage}/>
        </Switch>
      </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
