export const Header = () => {
  return (
    <header>
      <div id="header-center">
        <img src="/Logo.png" alt="Womanhood of Wubz" id="header-logo-img" />
        <div id="bio">
          <p>📍Denver, CO</p>
          <p>
            Bringing you the accessories that celebrate the magic of good music and the power of
            connection ✨
          </p>
        </div>
      </div>
      <div id="header-right">
        <p>Connect with us!</p>
        <div id="social-links" role="region" aria-label="links and social media">
          <a
            className="circle fa fa-instagram"
            title="Instagram"
            href="https://www.instagram.com/womanhoodofwubz/"
            target="_blank"
          />
          <a
            className="circle fa fa-envelope"
            title="Email"
            onClick={() => {
              const EMAIL = 'WomanhoodOfWubz1@gmail.com'
              navigator.clipboard.writeText(EMAIL)
              alert('Copied to clipboard: ' + EMAIL)
            }}
          />
          <a
            className="circle fa fa-soundcloud"
            title="SoundCloud"
            href="https://soundcloud.com/marisa-kerstanski"
            target="_blank"
          />
        </div>
      </div>
    </header>
  )
}
