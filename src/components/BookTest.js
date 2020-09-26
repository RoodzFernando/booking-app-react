import Axios from 'axios';
import JwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import currentTime from '../helpers/currentTime';
import { northAmerica, southAmerica, europe } from '../helpers/cities';

function BookTest({ match }) {
  const [model, setModel] = useState({});
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    city: '',
    bookDate: '',
  });

  useEffect(() => {
    // fetch(`https://pure-badlands-43483.herokuapp.com/cars/${match.params.id}`)
    fetch(`http://localhost:3001/cars/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setModel(data.data);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const { city, bookDate } = inputValues;
    const token = localStorage.getItem('token');
    const decodeToken = JwtDecode(token);
    const { user_id: userId } = decodeToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = {
      city,
      date: bookDate,
      car_id: model.id,
      user_id: userId,
    };
    Axios.post('https://pure-badlands-43483.herokuapp.com/appointments', data, {
      headers,
    }).then(history.push(`/test-drive/${userId}`));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const imgStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(150,191,1,0.8883928571428571) 0%, rgba(150,191,1,0.8883928571428571) 0%, rgba(150,191,1,0.8435749299719888) 0%), url(${model.image_url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="book-page" style={imgStyle}>
      <div className="test-info">
        <h2>
          Book a
          {` ${model.make} ${model.model}`}
          {' '}
          test-drive
        </h2>
      </div>
      <form>

        <select onChange={handleChange} name="city" required>
          <option>City</option>
          <optgroup label="NORTH AMERICA">
            {
            northAmerica.map(country => (
              <option key={country} value={country}>{country}</option>
            ))
          }
          </optgroup>

          <optgroup label="SOUTH AMERICA">
            {
            southAmerica.map(country => (
              <option key={country} value={country}>{country}</option>
            ))
          }
          </optgroup>

          <optgroup label="EUROPE">
            {
            europe.map(country => (
              <option key={country} value={country}>{country}</option>
            ))
          }
          </optgroup>
        </select>
        <input
          type="datetime-local"
          onChange={handleChange}
          name="bookDate"
          id="book-date"
          min={currentTime()}
          max={currentTime(3)}
        />
        <button type="submit" onClick={handleSubmit}>Book Now</button>
      </form>

    </div>
  );
}

BookTest.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BookTest;
