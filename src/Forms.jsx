import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Forms.css';

function Forms() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(`https://tuf-backend-rouge.vercel.app/api/v1/forms`);
        if (Array.isArray(response.data)) {
          setForms(response.data);
        } else {
          console.error('Data received from /api/v1/forms is not an array:', response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="form-grid">
      {Array.isArray(forms) && forms.map((form, index) => (
        <div key={form._id} className={`form-submission ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <h2>{form.username}</h2>
          <p>{form.preferredLanguage}</p>
          <p>{form.stdin}</p>
          <pre>{form.sourceCode.substring(0, 100)}</pre>
          <p>Submitted at: {new Date(form.createdAt).toLocaleString()}</p>
        </div>
      ))}
      <button className="submit-button" onClick={() => {window.location.href = '/submit'}}>Submit</button>
    </div>
  );
}

export default Forms;