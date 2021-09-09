import React from "react"
import { useHistory } from "react-router-dom"
import { addHeroeToMyLocal } from "../utils/storage"
import Button from "./common/Button"

const CardSimple = (props) => {
  const history = useHistory()

  const saveToMyHeroes = () => {
    addHeroeToMyLocal(props.id)
  }

  const goToHeroeDetail = () => {
    history.push(`/heroe/${props.id}`)
  }

  return (
    <div className="card col">
      <img src={props.images?.sm} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.biography?.['full-name'] || 'Nombre Real no conocido'}</li>
          <li className="list-group-item">{props.appearance?.['gender'] || 'Genero no conocido'}</li>
          <li className="list-group-item">{props.appearance?.['race'] || 'Raza no conocida'}</li>
          <li className="list-group-item">{props.biography?.['alignment'] || 'No alineado'}</li>
        </ul>
        <Button title="Unir a Equipo" onClick={saveToMyHeroes} />
        <Button title="Ver Detalle" onClick={goToHeroeDetail} />
      </div>
    </div>
  )
}

export default CardSimple
