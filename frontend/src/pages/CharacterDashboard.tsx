// src/pages/CharacterDashboard.tsx
import { Link } from 'react-router-dom';
import CharacterForm from '../components/CharacterForm';
import { useAuth } from '../contexts/useAuth';

export default function CharacterDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Character Dashboard</h1>
      
      {user ? (
        <CharacterForm />
      ) : (
        <div className="bg-blue-50 p-4 rounded border border-blue-200 text-center">
          <p className="text-blue-800 mb-4">You need to be logged in to create or manage characters.</p>
          <Link 
            to="/login" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login Now
          </Link>
        </div>
      )}
    </div>
  );
}
