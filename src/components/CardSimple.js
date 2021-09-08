import React from "react"

const CardSimple = (props) => {
  return (
    <div className="card col">
      <img src={props.image?.url} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{props.biography?.['full-name'] || 'Nombre Real no conocido'}</li>
          <li class="list-group-item">{props.appearance?.['gender'] || 'Genero no conocido'}</li>
          <li class="list-group-item">{props.appearance?.['race'] || 'Raza no conocida'}</li>
          <li class="list-group-item">{props.biography?.['alignment'] || 'No alineado'}</li>
        </ul>
        <a href="#" className="btn btn-primary">Ver Detalle</a>
      </div>
    </div>
  )
}

export default CardSimple
