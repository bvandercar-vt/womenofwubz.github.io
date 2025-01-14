import classNames from 'classnames'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const DoubleText = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <div {...props} className={classNames('double-text-container', props['className'])}>
    <span className="text-back" aria-hidden>
      {children}
    </span>
    <span className="text-front">{children}</span>
  </div>
)
