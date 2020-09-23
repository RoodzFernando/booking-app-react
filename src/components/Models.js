import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import JwtDecode from 'jwt-decode';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

function Models() {
  const [cars, setCars] = useState([]);
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 3 },
  ]);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('https://pure-badlands-43483.herokuapp.com/cars')
      .then(response => response.json())
      .then(data => {
        setCars(...cars, data.data);
        setUserId(JwtDecode(token).user_id);
      });
  }, []);
  // console.log(userId);
  return (
    <div className="model-page">
      <div className="navigation-side">
        <Navigation user={userId} />
      </div>

      <div className="right-side">
        <h1>Latest Models</h1>
        <h3>Please select a model for more details</h3>
        <div className="img-card">
          <Carousel breakPoints={breakPoints}>
            {
                cars.map(car => (
                  <Link to={`/detail/${car.slug}`}>
                    <div className="model-detail">
                      <img src={car.image_url} alt="" />
                      <div className="model-info">
                        <h2>
                          {car.make}
                          {' '}
                          {car.model}
                        </h2>
                        <p>{car.description}</p>
                      </div>
                      <hr />
                      <div className="model-footer">
                        <SocialLinks />
                      </div>
                    </div>
                  </Link>
                ))
              }
          </Carousel>
        </div>
      </div>

    </div>
  );
}

export default Models;
