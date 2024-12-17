import type { PropsWithChildren } from 'react'
import { Children } from 'react'

export const Grid = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid">
      {Children.map(children, (child) => (
        <div className="grid-item">{child}</div>
      ))}
    </div>
  )
}
