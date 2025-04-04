import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [message, setMessage] = useState<string | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;
        setMessage('Check your email for the confirmation link.');
      }
    } catch (error: unknown) {
        if (error instanceof Error) {
          setMessage(error.message || 'An error occurred during authentication');
        } else {
          setMessage('An unknown error occurred during authentication');
        }
        console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl mb-6">{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
      
      <form onSubmit={handleAuth} className="w-full space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Processing...' : mode === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
      
      {message && (
        <div className="mt-4 p-2 bg-blue-100 text-blue-800 rounded w-full text-center">
          {message}
        </div>
      )}
      
      <div className="mt-4 text-center w-full">
        {mode === 'login' ? (
          <p>
            Don't have an account?{' '}
            <button 
              onClick={() => setMode('signup')}
              className="text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button 
              onClick={() => setMode('login')}
              className="text-blue-600 hover:underline"
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
}