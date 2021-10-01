import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage';
import Login from './containers/LoginPage/Login';
import Register from './containers/RegisterPage/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
      </Router>
    </div>
  );
}

export default App;
