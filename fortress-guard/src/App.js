import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesContainer from './components/FeaturesContainer';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesContainer />
        <AboutUs />
        <Team />
        <SignupForm />
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
