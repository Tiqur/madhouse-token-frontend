import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, WhitepaperPage, SwapPage } from './pages/index.js';
import "@fontsource/barlow-condensed";
import "@fontsource/inter";
import "@fontsource/league-spartan/500.css";
import "@fontsource/open-sans";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/swap' component={SwapPage}/>
        <Route exact path='/whitepaper' component={WhitepaperPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
