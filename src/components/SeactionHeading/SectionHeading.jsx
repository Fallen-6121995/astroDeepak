import React from 'react'

function SectionHeading({tagline,color,fontSize,fontWeight}) {
  return (
    <h2 style={{color:color,fontSize:fontSize, fontWeight:fontWeight}}>{tagline}</h2>
  )
}

export default SectionHeading