import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import Data from './pages/Data';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/data" element={<Data />} />
        </Routes>
    </div>
  );
}

export default App;