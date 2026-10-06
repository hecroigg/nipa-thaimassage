import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'solid' | 'outline' | 'text'
}

export function Button({ children, variant = 'solid', className = '', ...props }: Props) {
  return (
    <a className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      <span className="button__mark" aria-hidden="true">↗</span>
    </a>
  )
}
