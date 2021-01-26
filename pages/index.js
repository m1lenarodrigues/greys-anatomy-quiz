import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  float:right;
  @media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
  }
`;
export default function Home(){
  return (

   <QuizBackground  backgroundImage={db.bg}>
     <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
          <Button.Input placeholder="Diz aqui o seu nome..." defaultValue="" type="text" />
          <Button primary>{db.botaoIniciar}</Button>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>          

            <p>Aqui você vai encontrar outros quizes para testar seus conhecimentos...</p>

          </Widget.Content>
        </Widget>
      <Footer />
     </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/m1lenarodrigues" />
   </QuizBackground>
  );
}
