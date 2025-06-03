import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories'; // <-- Make sure this import is present

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories /> {/* <-- Ensure this line is present */}
    </div>
  );
};

export default App;