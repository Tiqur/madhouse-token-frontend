import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, WhitepaperPage } from './pages/index.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/whitepaper' component={WhitepaperPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
