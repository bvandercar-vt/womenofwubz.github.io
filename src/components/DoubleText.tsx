import classNames from 'classnames'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const DoubleText = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <div {...props} className={classNames('double-text-container', className)}>
    <span className="text-back" aria-hidden>
      {children}
    </span>
    <span className="text-front">{children}</span>
  </div>
)
