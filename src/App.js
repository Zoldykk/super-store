import Home from './components/Home';
import Deals from './components/Deals';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SingleItem from './components/SingleItem';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {MovieProvider} from './Contexts/ProductContext'


function App() {
  return (
    <Router>
      <MovieProvider>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Route path='/deals' component={Deals} />
          <Route path='/cart' component={Cart} />
          <Route path='/item/:itemId' component={SingleItem} />
          <Route path='/checkout' component={Checkout} />
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
