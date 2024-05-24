import React, { useState } from 'react';
import Buttons from '../components/firstpage/Buttons';
import LoginForm from '../components/firstpage/LoginForm';
import SignupForm from '../components/firstpage/SignupForm';

function FirstPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <div>
      <Buttons onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      {showLogin && <LoginForm />}
      {showSignup && <SignupForm />}
    </div>
  );
}

export default FirstPage;
