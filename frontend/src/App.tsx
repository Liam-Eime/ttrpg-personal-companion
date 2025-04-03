import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-gray-100 text-gray-800">
        <Header />

        {/* Ensure the main area expands to fill available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}