import { findFlagUrlByIso2Code } from 'country-flags-svg'
import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  const flagUrl = findFlagUrlByIso2Code('ES')
  return (
    <div>
      <div>
        <div />
        <div>
          <Image src={flagUrl} alt='spain flag icon' width={50} height={50} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
