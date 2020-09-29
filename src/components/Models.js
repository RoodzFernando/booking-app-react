import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import Toggle from './Toggle';
import { modelRequest } from '../services/apis';

function Models() {
  const [cars, setCars] = useState([]);
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 3 },
  ]);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    modelRequest(token, cars, setCars, setUserId);
  }, []);
  return (
    <div className="model-page">
      <div className="nav-top">
        <Toggle />
      </div>

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
                  <Link key={car.slug} to={`/detail/${car.slug}`}>
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
