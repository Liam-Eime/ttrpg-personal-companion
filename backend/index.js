// index.js
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',  // Local frontend
    'https://ttrpg-personal-companion.vercel.app',  // Your actual deployed frontend URL
    // Add any other origins from which you might be accessing the backend
  ],
  credentials: true
}));

// Create Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// API endpoint for character creation
app.post('/api/characters', async (req, res) => {
  try {
    const character = req.body;
    
    // Insert the character into Supabase
    const { data, error } = await supabase
      .from('characters')
      .insert([character]);
    
    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
    
    return res.status(201).json({ 
      success: true, 
      message: 'Character created successfully', 
      data 
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Base endpoint
app.get('/', (req, res) => {
  res.send('TTRPG Companion API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});