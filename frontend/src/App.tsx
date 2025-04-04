import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import CharacterDashboard from './pages/CharacterDashboard';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen w-full bg-gray-100 text-gray-800">
          <Header />

          {/* Main area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/characters" element={<CharacterDashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
