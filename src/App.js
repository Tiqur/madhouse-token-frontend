import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './components/index.js';
import { HomePage } from './pages/index.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
