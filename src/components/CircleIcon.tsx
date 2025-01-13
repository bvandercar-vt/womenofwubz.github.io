import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export const CircleIcon = ({
  icon,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & Pick<FontAwesomeIconProps, 'icon'>) => (
  <a
    className={classNames('circle', 'circle-icon', className)}
    aria-label={props['aria-label'] ?? props['title']}
    target="_blank"
    {...props}
  >
    <FontAwesomeIcon icon={icon} />
  </a>
)
