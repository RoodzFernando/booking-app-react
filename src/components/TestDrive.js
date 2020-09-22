import React, { useEffect, useState } from 'react';
import dateInLetters from '../helpers/timeInLetters';
import Navigation from './Navigation';

function TestDrive({ match }) {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/appointments/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setAppointments(data.data);
      });
  }, []);
  
  return (
    <div>
      <Navigation />
      <table>
        <thead>
          <th>
            <td>No</td>
            <td>Make</td>
            <td>Model</td>
            <td>City</td>
            <td>Date</td>
          </th>
        </thead>
        <tbody>
          {
                appointments.map((appointment, id) => (
                  <tr key={id + appointment.make}>
                    <td>{id + 1}</td>
                    <td>{appointment.make}</td>
                    <td>{appointment.model}</td>
                    <td>{appointment.city}</td>
                    <td>{dateInLetters(appointment.date)}</td>
                  </tr>
                ))
              }
        </tbody>
      </table>
    </div>
  );
}

export default TestDrive;
