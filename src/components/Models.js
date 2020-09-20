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
      });
  }, []);
  return (
    <div className="model-page">
      <div className="navigation-side">
        <Navigation />
      </div>

      <div className="right-side">
        <h1>Latest Models</h1>
        <h3>Please select a model for more details</h3>
        <div className="img-card">
          {
              cars.map(car => (
                <Link to={`/detail/${car.slug}`}>
                  <div>
                    <img src={car.image_url} alt="" />
                    <h2>{car.make} {car.model}</h2>
                  </div>
                </Link>
              ))
            }
        </div>
      </div>

    </div>
  );
}

export default Models;
