import './App.css';
import {CityProvider} from './context/CityContext';
import Navbar from './layouts/Navbar';
import LandingPage from './pages/landing page/LandingPage';

function App() {

  return (
    <>
    <CityProvider>
      <Navbar />
      <LandingPage />
    </CityProvider>
    </>
  )
}

export default App
