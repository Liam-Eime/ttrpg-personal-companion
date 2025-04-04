import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow w-full">
      <div className="px-6 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">TTRPG Companion</h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/characters" className="text-gray-600 hover:text-gray-900">Characters</Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{user.email}</span>
              <button 
                onClick={() => signOut()}
                className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
