import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { getSearchAlbum } from './../../API/api_call'

export default function buscador(props) {

  const procesarBusqueda = async () => {
    const input = document.getElementById('search_box');
    var resp = await getSearchAlbum(input.value);
    var decodedResp = Object.values(resp.data)
    console.log(resp);
    console.log(typeof (resp));
    if (resp) {
      props.firstAlbum(decodedResp[0]);
    }

  }

  return (
    <div className="buscador__top__area">
      <div className="buscador__text__field">
        <input
          id="search_box"
          type="text"
          placeholder="Buscar"
          onKeyPress={(e) => {
            if (e.code === 'Enter') {
              procesarBusqueda();
            }
          }}
        />
        {/*  TO DO => Cambiar resultados */}
        <FontAwesomeIcon icon={faSearch} onClick={() => console.log('click')} />
      </div>
      <div className="buscador__user__name">
        <FontAwesomeIcon icon={faUser} />
        <p>Francisco M.</p>
      </div>
    </div>
  )
}
