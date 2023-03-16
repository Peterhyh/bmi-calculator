import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BmiCalculatorPage from './pages/BmiCalculatorPage';
import Counter from './pages/Counter';
import UseReducer from './pages/UseReducer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/reducer' element={<UseReducer />} />
        <Route path='/bmi' element={<BmiCalculatorPage />} />
      </Routes>
    </div>

  );
}

export default App;
