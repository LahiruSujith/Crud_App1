import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentComponent from './Student';
import CreateStudent from './CreateStudent';

function App() {
  return (
    <div className="App">
      <h1>Student Management</h1>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<StudentComponent />} />
        <Route path="/Create" element={<CreateStudent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
