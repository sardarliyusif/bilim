import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, About, Contact, NotFound } from './pages';

function App() {
  return (
    <div className="bilim">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
