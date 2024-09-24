import React from 'react'
import Link from 'next/link'

function SectionBtn({label,clickHandler,link}) {
  return (
    <div>
        <Link href={link}>
            <button onClick={clickHandler}>{label}</button>
        </Link>
    </div>
  )
}

export default SectionBtn