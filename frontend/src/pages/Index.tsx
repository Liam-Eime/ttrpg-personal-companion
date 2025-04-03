import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 py-12">
      <div className="max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-800">Your Ultimate Tabletop RPG Sidekick</h2>
        <p className="text-xl mb-10 text-gray-600">
          Manage characters, track combat, and roll dice – all in one place.
        </p>
        <Link
          to="/characters"
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
