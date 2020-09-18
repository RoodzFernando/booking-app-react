import React, { useEffect, useState } from 'react';

function DetailPage({match}) {
  const [model, setModel] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/cars/${match.params.id}`)
    .then(response => response.json())
    .then(data => {
      setModel(data.data)
      console.log(data.data)
    })
  }, [])
  console.log(match)
  return (
    <div>
      <h1>Detail Page</h1>
      <div className="model-img">
        <img src={model.image_url} alt=""/>
      </div>

        <div className="model-info">
          <h2>{model.make} {model.model}</h2>
        </div>
    </div>
    
  );
}

export default DetailPage;
