import React from 'react';
import Reducer from './components/Reducer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import Memo from './components/Memo';
import Input from './components/Input';

const Homepage = lazy(() => import('./pages/Homepage'));
const Services = lazy(() => import('./pages/Services'));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
     
    </div>
  );
}

export default App;
