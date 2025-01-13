import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleIcon } from './CircleIcon'

export const GridImage = ({
  src,
  title,
  subtitle,
}: {
  src: string
  title: string
  subtitle: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="grid-image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} />
      {isHovered && (
        <div className="links" role="group" aria-label="send links">
          <CircleIcon
            className="instagram"
            title="Instagram"
            icon={faInstagram}
            href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
          />
          <CircleIcon className="email" title="Email" icon={faEnvelope} onClick={copyEmail} />
        </div>
      )}
      <div className="caption">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  )
}
