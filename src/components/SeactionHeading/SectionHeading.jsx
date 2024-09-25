import React from 'react'

function SectionHeading({tagline,color,fontSize,fontWeight}) {
  return (
    <div className='sectionHeadingDiv'>
    <h2 style={{color:color,fontSize:fontSize, fontWeight:fontWeight}}>{tagline}</h2>
    </div>
  )
}

export default SectionHeading