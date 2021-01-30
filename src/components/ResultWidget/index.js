import React from 'react';
import Widget from '../Widget';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animacaoParabens from '../animacoes/animacaoParabens.json';
import animacaoDerrota from '../animacoes/animacaoDerrota.json';

export default function ResultWidget({ results, totalDeQuestao }) {

  const router = useRouter();

  const acertos = results.filter((x) => x).length
  const mediaAcertos = totalDeQuestao / 2 ;
  const [foiCampeao, setFoiCampeao] = React.useState(false);
  
  function verificaSeFoiBem(){
    if(acertos > mediaAcertos){
      console.log("pq to entrando aqu")
      setFoiCampeao(true);
    }else{
      setFoiCampeao(false);
    }
  }
  React.useEffect(() => {
    verificaSeFoiBem();
  });

  const defaultOptions = (animation) => ({
    loop: true,
    autoplay: true,
    animationData: animation,
    
  });
  
  const PanelAnimation = styled.div`
    text-align:center

  `;
  
  const AnimacaoParabens = () => (
    <PanelAnimation>
      <h2> Parabéns! {router.query.name} você acertou: {acertos} perguntas . </h2>
      <p> Parece que você gosta muito de Grey's Anatomy! </p>
      <Lottie
        options={defaultOptions(animacaoParabens)}
        height={100}
        width={200}
      />
    </PanelAnimation>
  );
  
  const AnimacaoDerrota = () => (
  
    <PanelAnimation>
      <h2> Poxa! {router.query.name} você acertou: {acertos} perguntas . </h2>
      <p> Assista mais uma vez Grey's Anatomy e tente novamente! </p>
      <Lottie
        options={defaultOptions(animacaoDerrota)}
        height={100}
        width={200}
      />
    </PanelAnimation>
  );

  return (
    <div>
 
      <Widget>
        
        <Widget.Header> 
          Resultado
        </Widget.Header>

        <Widget.Content>  
          {!foiCampeao && <AnimacaoDerrota />}
          {foiCampeao && <AnimacaoParabens />}
      
        </Widget.Content> 
      </Widget>

      <Widget>             
        <Widget.Header> 
          Gabarito
        </Widget.Header>

        <Widget.Content>  
          <ul>
            {results.map((result, index) => (
              <li key={`result__${result}`}>#Pergunta número: {index+1}: {result === true ? 'Acertou' :'Errou'} </li>
            ))}
          </ul>
        </Widget.Content> 
      </Widget>
    </div>
    
  );
}