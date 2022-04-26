import React, { useEffect } from 'react';
import {
  Routes as Router,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

// import Route from './Routes';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate('/');
    } else if (!user || location.pathname === '/') {
      navigate('/signin');
    }
  }, [user]);

  return (
    <Router>
      {user ? (
        <Route path="/" element={<Dashboard />} />
      ) : (
        <>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      )}

      <Route path="*" element={<SignIn />} />
    </Router>
  );
};

export default Routes;
