import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Home from './pages/Homepage';
import Header from './parts/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
