import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const Routes: React.FC = () => (
  <Router>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Router>
);

export default Routes;
