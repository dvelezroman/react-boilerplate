import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../..';
import Button from '../../components/common/Button';
import { getUrl } from '../../utils/common';

const HeroeDetail = () => {
  const history = useHistory()
  const { id } = useParams()
  const { setLoading, setAlert } = useContext(AppContext)
  const [heroe, setHeroe] = useState(null)

  const getHeroeDetail = () => {
    const url = getUrl(`id/${id}.json`)

    fetch(url, {
      headers: {}
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        setAlert({
          type: "danger",
          title: "Error",
          msg: "Algo salio mal"
        })
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      setHeroe(data)
    }).catch((error) => {
      // HANDLE ERROR
      setAlert({
        type: "warning",
        title: "Aviso",
        msg: error.message
      })
    }).finally(() => {
      setLoading(false)
    });
  }

  const goToHome = () => {
    history.push('/')
  }

  useEffect(() => {
    getHeroeDetail()
  }, [])

  return (
    <div className="card mb-3">
      <img src={heroe?.images.lg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{heroe?.name || 'Not found yet'}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <Button title="Home" onClick={goToHome} />
      </div>
    </div>
  );
}

export default HeroeDetail
