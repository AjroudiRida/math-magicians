import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import Home from './components/home/Home';
import Quotes from './components/quote/Quotes';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
