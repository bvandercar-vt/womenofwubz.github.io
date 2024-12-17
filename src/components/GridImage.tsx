export const GridImage = ({
  src,
  title,
  subtitle,
}: {
  src: string
  title: string
  subtitle: string
}) => (
  <div className="grid-image">
    <img src={src} />
    <div className="caption">
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  </div>
)
