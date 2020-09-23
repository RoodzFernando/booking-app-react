import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    localStorage.removeItem('token');
    history.push('/login');
    // console.log(history)
    // console.log('yes log me out!');
  };
  return (
    <form>
      <button type="submit" onClick={handleSubmit}>Logout</button>
    </form>
  );
}

export default Logout;
