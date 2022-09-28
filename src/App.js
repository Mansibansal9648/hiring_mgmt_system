import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
