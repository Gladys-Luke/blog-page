import React from 'react'
import "./loader.css";

function loader() {
  return (
    <div>
      <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default loader