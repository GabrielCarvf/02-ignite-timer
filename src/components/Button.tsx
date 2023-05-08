import { ButtonContainer, ButtonsVariants } from './Button.styles'

interface ButtonProps {
  variant?: ButtonsVariants
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Teste</ButtonContainer>
}
