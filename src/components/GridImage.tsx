import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useId, useState } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleLink } from './CircleLink'

export const GridImage = ({
  src,
  title,
  subtitle,
}: {
  src: string
  title?: string
  subtitle?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const titleId = useId()

  return (
    <div
      className="grid-image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} aria-labelledby={titleId} />
      {isHovered && (
        <div className="links" role="group" aria-label="send links">
          <CircleLink
            className="instagram"
            title="Instagram"
            icon={faInstagram}
            href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
          />
          <CircleLink className="email" title="Email" icon={faEnvelope} onClick={copyEmail} />
        </div>
      )}
      <div className="caption">
        {title && (
          <p className="title" id={titleId}>
            {title}
          </p>
        )}
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}
