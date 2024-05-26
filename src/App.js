import React, {useEffect} from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contacts from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  )
}

export default App