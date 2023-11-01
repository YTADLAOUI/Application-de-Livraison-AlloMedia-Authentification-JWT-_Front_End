import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import {Login} from './components/auth/login';
import { Register } from './components/auth/register';
import './index.css'
import { ForgetPass } from './components/auth/forgetPass';
import { Restpass } from './components/auth/restPass';
import Index from './components/home/Index';
import VerificationEmail from './components/auth/verificationEmail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import AuthMiddleware from './components/middelware/AuthMiddleware';

// const AuthMiddleware = ({children}) => {
//   const isAuthenticated = !!Cookies.get('token'); 
//   if (isAuthenticated){ return children}
//   else (
//     <Navigate to="/login" />
//   )
// }

function App() {
  // const isAuthenticated = !!Cookies.get('token'); 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={
                              <Register/>
                                 } />
      <Route path='/forgetPassword' element={<ForgetPass/>} />
      <Route path='/resetPassword/:token' element={<Restpass/>} />
      <Route path='/dashboard' element={
        <AuthMiddleware>
          <Index/>
        </AuthMiddleware>
        } />
      {/* <Route path='/dashboard' element={
       <Index/>}/> */}
      <Route path='/verify/:token' element={<VerificationEmail/>} />
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}
export default App;
