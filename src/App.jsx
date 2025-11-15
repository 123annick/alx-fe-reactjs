import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile
        name="Annick Ujeneza"
        age={28}
        bio="Audit consultant, proposal strategist, and emerging software developer based in Kigali."
      />
      <Footer />
    </>
  );
}

export default App;
