import React from 'react'

function SectionHeading({tagline,color,fontSize,fontWeight,showUnderline = true}) {
  return (
    <div className={`sectionHeadingDiv ${showUnderline && `underlineDiv`}`}>
    <h2 style={{color:color,fontSize:fontSize, fontWeight:fontWeight}}>{tagline}</h2>
    </div>
  )
}

export default SectionHeading