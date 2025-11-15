import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


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
