import React from 'react'

export default function buscador() {
  return (
    <div className="buscador__top__area">
      <div className="buscador__text__field">
        <input type="text" placeholder="Buscar" />
      </div>
      <div className="buscador__user__name">
        <i class="fas fa-user"></i>
        <p>Francisco M.</p>
      </div>
    </div>
  )
}
