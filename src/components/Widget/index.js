import styled from 'styled-components'

const Widget = styled.div`
  box-shadow: 5px 3px 9px 7px #888888;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.mainBg};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 15px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color:#1a237e;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #1a237e;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  font-color:#1a237e;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;


export default Widget;