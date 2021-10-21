import './App.css';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Addition from './components/Addition/Addition';
import Substraction from './components/substraction/substraction';
import Multiplication from './components/multiplication/multiplication';
import Division from './components/division/division';
import Header from '../src/components/Nav/Navbar';
import Main from './main'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path='/' component={Header}/>

          <Route exact path='/addition' component={Addition}/>
          <Route exact path='/substraction' component={Substraction}/>
          <Route exact path='/Main' component={Main}/>
          <Route exact path='/multiplication' component={Multiplication}/>
          <Route exact path='/division' component={Division}/>

        </Switch>
      </div>

    </BrowserRouter>

  );
}

export default App;
