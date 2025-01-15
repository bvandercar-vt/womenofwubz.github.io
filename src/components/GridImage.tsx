import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { ReactNode } from 'react'
import { useId, useState } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleLink } from './CircleLink'
import { DoubleText } from './DoubleText'

export const GridImage = ({
  src,
  title,
  subtitle,
  number,
  price,
  soldOut,
}: {
  src: string
  title?: ReactNode
  subtitle?: ReactNode
  number?: ReactNode
  price?: ReactNode
  soldOut?: boolean
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
      <div className="upper-right">
        {soldOut ? (
          <DoubleText className="sold-out">Sold!</DoubleText>
        ) : (
          isHovered && (
            <div className="links" role="group" aria-label="send links">
              <CircleLink
                className="instagram"
                title="Instagram"
                icon={faInstagram}
                href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
              />
              <CircleLink className="email" title="Email" icon={faEnvelope} onClick={copyEmail} />
            </div>
          )
        )}
      </div>
      <div className="bottom-left">
        <div className="number circle">
          <span className="number-content">{number}</span>
        </div>
        <div className="caption">
          <DoubleText>
            {title && (
              <p className="title" id={titleId}>
                {title}
              </p>
            )}
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </DoubleText>
        </div>
      </div>
      <div className="bottom-right price">{price && <DoubleText>${price}</DoubleText>}</div>
    </div>
  )
}
