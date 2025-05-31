import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CareerProvider } from './context/CareerContext';
import { HistoryProvider } from './context/HistoryContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SafeHome from './components/pages/SafeHome';
import History from './components/pages/History';
import Popular from './components/pages/Popular';
import About from './components/pages/About';
import CareerDetails from './components/pages/CareerDetails';

function App() {
  return (
    <CareerProvider>
      <HistoryProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<SafeHome />} />
                <Route path="/history" element={<History />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/about" element={<About />} />
                <Route path="/career/:id" element={<CareerDetails />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </HistoryProvider>
    </CareerProvider>
  );
}

export default App;
