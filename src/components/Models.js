import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Models() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(data => {
        setCars(...cars, data.data);
      // console.log(data.data)
      });
  }, []);
  console.log(cars);
  return (
    <div>
      <Navigation />
      <h1>Latest Models</h1>
      <h3>Please select a model for more details</h3>
      {
          cars.map(car => (
            <Link to={`/detail/${car.slug}`}>
              <div>
                <h2>{car.make}</h2>
                <img src={car.image_url} alt="" />
              </div>
            </Link>
          ))
        }
    </div>
  );
}

export default Models;
