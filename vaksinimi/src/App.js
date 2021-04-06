import logo from './logo.svg';
import './App.css';

import {Personi} from './Personi';
import {Vendi} from './Vendi';
import {Navigation} from './Navigation';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Navigation/>
    <Switch>
      <Route path='/' component={Personi} exact/>
      <Route path='/Vendi' component={Vendi} exact/>
    </Switch>
    </BrowserRouter>
    </div>
  );

}

export default App;
