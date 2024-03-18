import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import the CSS file

function Form() {
  const [username, setUsername] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [sourceCode, setSourceCode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`https://tuf-backend-rouge.vercel.app/api/v1/submit`, {
        username,
        preferredLanguage,
        stdin,
        sourceCode,
      });
      if (response.status === 200) {
        window.location.href = '/forms';
      }

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="top-row">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <select value={preferredLanguage} onChange={(e) => setPreferredLanguage(e.target.value)}>
            <option value="">Preferred Language</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="c++">C++</option>
          </select>
        </div>
        <div className="bottom-row">
          <textarea value={sourceCode} onChange={(e) => setSourceCode(e.target.value)} placeholder="Source Code" />
          <input type="text" value={stdin} onChange={(e) => setStdin(e.target.value)} placeholder="Stdin" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
