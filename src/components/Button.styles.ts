import styled from 'styled-components'

export type ButtonsVariants = 'default' | 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonsVariants
}

// const buttonsVariants = {
//   default: "gray",
//   primary: "purple",
//   secondary: "red"
// }

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6rem;
  height: 3rem;
  border-radius: 8px;
  border: 0;
  margin: 1rem;
  color: #fff;

  background-color: ${(props) => props.theme['green-500']};
`
/* ${props => css`background-color: ${buttonsVariants[props.variant]}`} */
