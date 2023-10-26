import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './components/auth/login';
import { Register } from './components/auth/register';
import './index.css'
import { ForgetPass } from './components/auth/forgetPass';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgetPassword' element={<ForgetPass/>} />
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
