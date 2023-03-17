import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/assets/css/font-awesome.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BmiCalculatorPage from './pages/BmiCalculatorPage';
import Counter from './pages/Counter';
import UseReducer from './pages/UseReducer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/todo' element={<UseReducer />} />
        <Route path='/bmi' element={<BmiCalculatorPage />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
