import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <h1>Welcome To TheDailyDrive</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
