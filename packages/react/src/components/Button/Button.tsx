import { ComponentProps, ElementType } from 'react'
import { StyledButton } from './styles'

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  as?: ElementType
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'tertiary'
  onClick: () => void
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
)

Button.displayName = 'Button'
