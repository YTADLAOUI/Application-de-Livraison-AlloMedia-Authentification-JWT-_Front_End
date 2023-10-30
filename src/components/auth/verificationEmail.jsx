import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setRes } from '../../features/VerficationSlice';

function VerificationEmail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();

  // const tokenDot = token.replace(/-/g, '.');

  useEffect(() => {
    async function verifyEmail() {
      try {
        const response = await axios.get(`http://localhost:8000/api/auth/verify/${token}`);
         console.log(response.data);
        dispatch(setRes(response.data));
        navigate("/login");
      } catch (error) {
        console.error('Error:', error);
      }
    }

    verifyEmail();
  }, [token]);

  return (
    <div>
      <p>VerificationEmail</p>
    </div>
  );
}

export default VerificationEmail;
