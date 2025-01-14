import type { PropsWithChildren } from 'react'

export const DoubleText = ({ children }: PropsWithChildren) => (
  <div className="text-container">
    <span className="text-back" aria-hidden>
      {children}
    </span>
    <span className="text-front">{children}</span>
  </div>
)
