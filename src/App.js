import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css';

function App() {
  const pages = ['about', 'portfolio', 'contact', 'resume'];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <Router>
      <div>
        <Nav 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
          <main>
            <Routes>
              <Route exact path = "/react_portfolio/portfolio" element={<Portfolio/>}/>
              <Route exact path='/react_portfolio/' element={<About/>}/>
              <Route exact path='/react_portfolio/contact' element={<Contact/>}/>
              <Route exact path='/react_portfolio/resume' element={<Resume/>}/>
            </Routes>
          </main>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
