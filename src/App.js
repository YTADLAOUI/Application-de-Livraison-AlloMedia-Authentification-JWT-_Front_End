import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './components/auth/login';
import { Register } from './components/auth/register';
import './index.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
