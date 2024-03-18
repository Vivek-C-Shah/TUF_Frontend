import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form.jsx';
import Forms from './Forms.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/submit" element={<Form />} />
        <Route path="/forms" element={<Forms />} />
        {/* other routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;