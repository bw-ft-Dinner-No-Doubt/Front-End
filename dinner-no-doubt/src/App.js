import React from 'react';
import OnboardingForm from './components/SignIn';
import OnboardingFormTwo from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <OnboardingForm />
      <OnboardingFormTwo />
    </div>
  );
}

export default App;
