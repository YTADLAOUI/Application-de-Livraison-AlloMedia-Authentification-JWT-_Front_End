import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './components/auth/login';
import { Register } from './components/auth/register';
import './index.css'
import { ForgetPass } from './components/auth/forgetPass';
import { Restpass } from './components/auth/restPass';
import Index from './components/home/Index';
import VerificationEmail from './components/auth/verificationEmail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgetPassword' element={<ForgetPass/>} />
      <Route path='/resetPassword/:token' element={<Restpass/>} />
      <Route path='/dashboard' element={<Index/>} />
      <Route path='/verify/:token' element={<VerificationEmail/>} />
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}
export default App;
