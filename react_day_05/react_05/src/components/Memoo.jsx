import React, { memo } from 'react'


let MyMemoo = memo(function(props) {
    return (
      <div>
          <h1>naam: {props.naam} </h1>
      </div>
    )
  })

export default MyMemoo