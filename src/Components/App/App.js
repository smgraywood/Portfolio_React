import './App.css';
import NavBar from '../NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import About from '../../Pages/About/About';
import Main from '../../Pages/Main/Main';
import Projects from '../../Pages/Projects/Projects';
import Technologies from '../../Pages/Technologies/Technologies';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/technologies' element={<Technologies/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
