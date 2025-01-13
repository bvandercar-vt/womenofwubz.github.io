import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleIcon } from './CircleIcon'

export const Header = () => {
  return (
    <header>
      <div id="header-center">
        <img src="/Logo.png" alt="Womanhood of Wubz" id="header-logo-img" />
        <div id="bio">
          <span>
            <p>📍 Denver, CO 📍</p>
            <p>
              ✨ Bringing you the accessories that celebrate the magic of good music and the power
              of connection ✨
            </p>
          </span>
        </div>
      </div>
      <div id="header-right">
        <span>
          <p>Connect with us!</p>
        </span>
        <div id="social-links" role="region" aria-label="links and social media">
          <CircleIcon
            className="instagram"
            title="Instagram"
            icon={faEnvelope}
            href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
            target="_blank"
          />
          <CircleIcon className="email" title="Email" icon={faInstagram} onClick={copyEmail} />
          <CircleIcon
            className="soundcloud"
            title="SoundCloud"
            icon={faSoundcloud}
            href="https://soundcloud.com/marisa-kerstanski"
            target="_blank"
          />
        </div>
      </div>
    </header>
  )
}
