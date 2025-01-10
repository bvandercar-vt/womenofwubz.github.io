import { useState } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'

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
          <a
            className="circle fa fa-instagram"
            title="Instagram Message"
            href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
            target="_blank"
          >
            <span className="fa fa-comment" />
          </a>
          <a className="circle fa fa-envelope" title="Email" onClick={copyEmail} />
        </div>
      )}
      <div className="caption">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  )
}
