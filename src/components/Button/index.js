import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:  ${({ theme }) => theme.colors.primary};
  color:  ${({ theme }) => theme.colors.textos};

  font-size: 1em;
  margin: 5px 37px;
  padding: 0.25em 2em;
  border: 2px solid #1e88e5;
  border-radius: 3px;
  font-weight:bold;
  width:80%;
`;

Button.Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: #e3f2fd;
  border: 1px solid #1e88e5;
  border-radius: 3px;
  margin: 1px 35px;
  width:80%;
  

`;


export default Button;