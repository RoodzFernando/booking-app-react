import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function DetailPage({ match }) {
  const [model, setModel] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/cars/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setModel(data.data);
      });
  }, []);
  return (
    <div className="main-page">
      <div className="nav-section">
        <Navigation />
      </div>

      <div className="detail-right">
        <div className="model-img">
          <img src={model.image_url} alt="" />
        </div>

        <div className="model-info">
          <h2>
            {model.make}
            {' '}
            {model.model}
          </h2>

          <div>
            <table>
              <tr>
                <td>Released date</td>
                <td>{model.model_year}</td>
              </tr>

              <tr>
                <td>Price</td>
                <td>{model.price}</td>
              </tr>

              <tr>
                <td>Consommation</td>
                <td>{model.consommation}</td>
              </tr>

              <tr>
                <td>Power</td>
                <td>{model.power}</td>
              </tr>

              <tr>
                <td>Motor</td>
                <td>{model.motor}</td>
              </tr>
            </table>
          </div>

          <Link to="/book">Book a test</Link>
        </div>
      </div>
    </div>

  );
}

export default DetailPage;
