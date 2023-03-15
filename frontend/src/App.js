import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BmiCalculatorPage from './pages/BmiCalculatorPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/bmi' element={<BmiCalculatorPage />} />
      </Routes>
    </div>

  );
}

export default App;
