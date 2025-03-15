import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Link from 'next/link';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
}