import './App.scss';
import Header from './components/Header';
// import Body1 from './components/Body1'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
