import Home from './components/Home';
import Deals from './components/Deals';
import Cart from './components/Cart';
import SingleItem from './components/SingleItem';
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/deals' component={Deals} />
        <Route path='/cart' component={Cart} />
        <Route path='/item/:itemId' component={SingleItem} />
      </div>
    </Router>
  );
}

export default App;
