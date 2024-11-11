import React, { useContext } from 'react';
import { AuthContext } from '../App';

function Logout() {
  const { logout } = useContext(AuthContext);

  return <button onClick={logout}>Logout</button>;
}

export default Logout;
