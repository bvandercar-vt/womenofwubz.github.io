import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleLink } from './CircleLink'
import { DoubleText } from './DoubleText'

export const Header = () => {
  return (
    <header>
      <div id="header-center">
        <img src="/Logo.png" alt="Womanhood of Wubz" id="header-logo-img" />
        <div id="bio">
          <DoubleText>
            <p>📍 Denver, CO 📍</p>
            <p>
              ✨ Bringing you the accessories that celebrate the magic of good music and the power
              of connection ✨
            </p>
          </DoubleText>
        </div>
      </div>
      <div id="header-right">
        <div id="social-links-wrapper" role="region" aria-label="links and social media">
          <span id="connect">
            <DoubleText>Connect with us!</DoubleText>
          </span>
          <div id="social-links">
            <CircleLink
              className="instagram"
              title="Instagram"
              icon={faInstagram}
              href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
            />
            <CircleLink className="email" title="Email" icon={faEnvelope} onClick={copyEmail} />
            <CircleLink
              className="soundcloud"
              title="SoundCloud"
              icon={faSoundcloud}
              href="https://soundcloud.com/marisa-kerstanski"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
