
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/SignIn';

function App() {
  return (
    <Router>
      
      
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/SignIn' component={SignInPage} exact />
        </Switch>

    </Router>
  );
}

export default App;
