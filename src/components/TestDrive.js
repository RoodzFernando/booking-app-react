/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import JwtDecode from 'jwt-decode';
import dateInLetters from '../helpers/timeInLetters';
import Navigation from './Navigation';
import Toggle from './Toggle';

function TestDrive({ match }) {
  const [appointments, setAppointments] = useState([]);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`https://pure-badlands-43483.herokuapp.com/appointments/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setAppointments(data.data);
        setUserId(JwtDecode(token).user_id);
      });
  }, [appointments]);
  return (
    <div className="test-body">
      <div className="nav-side">
        <div className="nav-side__toggle">
          <Navigation user={userId} />
        </div>
        <Toggle />
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

TestDrive.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TestDrive;
