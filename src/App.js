import React from 'react';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import { Layout } from './styles/Layout';

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
      <Footer />
    </Layout>
  );
}

export default App;
