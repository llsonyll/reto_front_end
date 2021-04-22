import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function buscador() {
  return (
    <div className="buscador__top__area">
      <div className="buscador__text__field">
        <input
          type="text"
          placeholder="Buscar"
          onKeyPress={(e) => {
            if (e.code === 'Enter') {
              // Al enter... pasa algo
              console.log('enter');
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
