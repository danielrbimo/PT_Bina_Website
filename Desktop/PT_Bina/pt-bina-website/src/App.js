import './App.css';
import Home from './pages';
import {BrowserRouter as Router} from 'react-router-dom';
import ContactPage from './pages/contact';


/**
 * React router dom is for connecting buttons to next page
 *  
 */

function App() {
  return (
    <>
    <Router basename="/">
      <Home />
    </Router>
    </>
  );
}

export default App;
