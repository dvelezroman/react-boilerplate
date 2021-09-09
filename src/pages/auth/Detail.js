import React from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Superhero ID: {id}</h3>
    </div>
  );
}

export default Detail
