// src/components/CharacterForm.tsx
import { useState } from 'react';
import { useAuth } from '../contexts/useAuth';

// For local development, use:
const API_URL = 'http://localhost:3000';

// When ready for production, switch to:
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function CharacterForm() {
  // Get user from AuthContext
  const { user } = useAuth();

  // Form state for all character fields
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [subclass, setSubclass] = useState('');
  const [race, setRace] = useState('');
  const [maxHp, setMaxHp] = useState('');
  const [statStr, setStatStr] = useState('');
  const [statDex, setStatDex] = useState('');
  const [statCon, setStatCon] = useState('');
  const [statInt, setStatInt] = useState('');
  const [statWis, setStatWis] = useState('');
  const [statCha, setStatCha] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    // Check if the user is authenticated
    if (!user) {
      alert('You must be signed in to create a character.');
      setLoading(false);
      return;
    }

    // Build the new character record
    const newCharacter = {
      user_id: user.id, // This sets the character owner to the authenticated user's ID
      name,
      class: characterClass,
      subclass,
      race,
      max_hp: parseInt(maxHp, 10),
      stat_str: parseInt(statStr, 10),
      stat_dex: parseInt(statDex, 10),
      stat_con: parseInt(statCon, 10),
      stat_int: parseInt(statInt, 10),
      stat_wis: parseInt(statWis, 10),
      stat_cha: parseInt(statCha, 10),
    };

    try {
      // Call our backend API instead of Supabase directly
      const response = await fetch(`${API_URL}/api/characters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create character');
      }

      console.log('Character inserted successfully:', result.data);
      alert('Character created successfully!');
      
      // Clear form fields after success
      setName('');
      setCharacterClass('');
      setSubclass('');
      setRace('');
      setMaxHp('');
      setStatStr('');
      setStatDex('');
      setStatCon('');
      setStatInt('');
      setStatWis('');
      setStatCha('');
    } catch (error) {
      console.error('Error inserting character:', error);
      let errorMessage = 'Unknown error';
      
      if (error instanceof Error) {
        errorMessage = error.message;
        // Check if it's likely a CORS error
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Network error: Could not connect to the server. CORS issue or server is down.';
        }
      }
      
      alert(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create a New Character</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Class:</label>
          <input
            type="text"
            value={characterClass}
            onChange={(e) => setCharacterClass(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subclass:</label>
          <input
            type="text"
            value={subclass}
            onChange={(e) => setSubclass(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Race:</label>
          <input
            type="text"
            value={race}
            onChange={(e) => setRace(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Max HP:</label>
          <input
            type="number"
            value={maxHp}
            onChange={(e) => setMaxHp(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Strength:</label>
          <input
            type="number"
            value={statStr}
            onChange={(e) => setStatStr(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dexterity:</label>
          <input
            type="number"
            value={statDex}
            onChange={(e) => setStatDex(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Constitution:</label>
          <input
            type="number"
            value={statCon}
            onChange={(e) => setStatCon(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Intelligence:</label>
          <input
            type="number"
            value={statInt}
            onChange={(e) => setStatInt(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Wisdom:</label>
          <input
            type="number"
            value={statWis}
            onChange={(e) => setStatWis(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Charisma:</label>
          <input
            type="number"
            value={statCha}
            onChange={(e) => setStatCha(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Character'}
        </button>
      </form>
    </div>
  );
}
