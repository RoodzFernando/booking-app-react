import React, { useEffect, useState } from 'react';
import dateInLetters from '../helpers/timeInLetters';
import Navigation from './Navigation';

function TestDrive({ match, user }) {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/appointments/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setAppointments(data.data);
      });
  }, [appointments]);
  // console.log(user)
  return (
    <div className="test-body">
      <div className="nav-side">
        <Navigation />
      </div>
      <div className="appointment-table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Make</th>
              <th>Model</th>
              <th>City</th>
              <th>Date</th>
            </tr>
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
    </div>
  );
}

export default TestDrive;
