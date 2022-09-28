import './App.scss';
import Header from './components/Header';
import View from './components/View'
import Blood_bank from './components/Blood_bank';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/view' element={<View/>}></Route>
          <Route path='/bloodbank/:id' element={<Blood_bank/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
