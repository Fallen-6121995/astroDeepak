import React from 'react'
import Link from 'next/link'

function SectionBtn({label,clickHandler,link}) {
  return (
    <div className='cta-btn-com'>
        <Link href={link}>
            <button className="cta-btn" onClick={clickHandler}>{label}</button>
        </Link>
    </div>
  )
}

export default SectionBtn