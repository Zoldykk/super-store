import Home from './components/Home';
import Deals from './components/Deals';
import Cart from './components/Cart';
import SingleItem from './components/SingleItem';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {MovieProvider} from '../src/components/Contexts/ProductContext'


function App() {
  return (
    <Router>
      <MovieProvider>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Route path='/deals' component={Deals} />
          <Route path='/cart' component={Cart} />
          <Route path='/item/:itemId' component={SingleItem} />
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
