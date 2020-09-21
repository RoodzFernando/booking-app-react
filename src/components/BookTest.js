import React, { useState, useEffect } from 'react';
import currentTime from '../helpers/currentTime';
import store from '../helpers/store';

function BookTest({ match }) {
  const north_america = ['Calgary', 'Chicago', 'Dallas', 'Guadalajara', 'Houston', 'Mexico', 'Ottawa', 'Tijuana', 'Toronto'];
  const south_america = ['Belo Horizonte', 'Calama', 'Cordova', 'El Savador', 'Mendoza', 'Recife', 'Rio de Janeiro', 'Rosario', 'Santiago'];
  const europe = ['Lyon', 'Marseille', 'Nice', 'Norwich', 'Norwich', 'Winchester'];
  const [model, setModel] = useState({});
  const [inputValues, setInputValues] = useState({
    city: '',
    bookDate: '',
  });

  useEffect(() => {
    fetch(`http://localhost:3001/cars/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setModel(data.data);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('i am working');
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
  console.log(currentTime());
  return (
    <div className="book-page" style={imgStyle}>
      <div className="test-info">
        <h2>
          Book a
          {`${model.make} ${model.model}`}
          {' '}
          test-drive
        </h2>
      </div>
      <form>

        <select onChange={handleChange} name="city" required>
          <option>City</option>
          <optgroup label="North America">
            {
            north_america.map(country => (
              <option value={country}>{country}</option>
            ))
          }
          </optgroup>

          <optgroup label="South America">
            {
            south_america.map(country => (
              <option value={country}>{country}</option>
            ))
          }
          </optgroup>

          <optgroup label="Europe">
            {
            europe.map(country => (
              <option value={country}>{country}</option>
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
        // // value = {currentTime(0)}
          max={currentTime(3)}
        />
        <button type="submit" onClick={handleSubmit}>Book Now</button>
      </form>

    </div>
  );
}

export default BookTest;
