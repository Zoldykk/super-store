import Home from './components/Home';
import Deals from './components/Deals';
import Cart from './components/Cart';
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/deals' component={Deals} />
        <Route path='/cart' component={Cart} />
      </div>
    </Router>
  );
}

export default App;
