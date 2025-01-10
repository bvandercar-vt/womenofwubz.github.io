import { useId, useRef } from 'react'

export const SoundcloudPlayer = ({
  href,
  src,
  title,
}: {
  href: string
  src: string
  title: string
}) => {
  const id = useId()
  const iFrameElement = useRef(null)

  return (
    <div className="sc-player" role="group" aria-label="soundcloud player">
      <a className="sc-title" href={href} target="_blank" title="SoundCloud playlist">
        <i className="fa fa-soundcloud" />
        {title}
      </a>
      <div className="sc-iframe-wrapper">
        <iframe
          width="100%"
          height="350"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={src}
          id={id}
          ref={iFrameElement}
        />
      </div>
    </div>
  )
}
