import React, { useState } from 'react';
import {useRouter} from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer';

export default function Home(){

  const router = useRouter();
  const [name, setName]= React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  const handleNome = (e) => {
    setName(e.target.value);
  }
 
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
          <form onSubmit={handleSubmit}>
            <Button.Input onChange={handleNome} placeholder="Diz aqui o seu nome..."  type="text" />
            <Button  type="submit" primary disabled={name.length === 0}>Iai {name} {db.botaoIniciar}</Button>
          </form>

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
