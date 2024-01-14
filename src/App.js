import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import CardDetails from './components/CardDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Movie/>}/>
        <Route path='/carddetail' element={<CardDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
