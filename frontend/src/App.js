import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/assets/css/font-awesome.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BmiCalculatorPage from './pages/BmiCalculatorPage';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<CounterPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/bmi' element={<BmiCalculatorPage />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
