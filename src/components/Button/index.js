import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:  ${({ theme }) => theme.colors.primary};
  color:  ${({ theme }) => theme.colors.textos};

  font-size: 1em;
  margin: 5px 123px;
  padding: 0.25em 2em;
  border: 2px solid #1e88e5;
  border-radius: 3px;
  font-weight:bold;
`;


export default Button;