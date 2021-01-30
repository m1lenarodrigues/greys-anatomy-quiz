import React from 'react';
import styled from 'styled-components';

import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm/'
import Lottie from 'react-lottie';

import animacaoErrada from '../animacoes/animacaoErro.json';
import animacaoCorreta from '../animacoes/animacaoCorreto.json';

export default function QuestionWidget({ question, totalDeQuestao, questionIndex, onSubmit, addResult, }){
    const questionId = `question__${questionIndex}`;
    const [alternativaSelecionada, setAlternativaSelecionada] = React.useState(undefined);
    const [alternativaEnviada, setAlternativaEnviada] = React.useState(false);
    const alternativeCorreta = alternativaSelecionada === question.answer;    

    const defaultOptions = (animation) => ({
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });
      
      const PanelAnimation = styled.div`
        width: 350px;
        height: 150px;
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
      `;
      
      const AnimacaoCorreta = () => (
        <PanelAnimation>
          <Lottie
            options={defaultOptions(animacaoCorreta)}
            height={100}
            width={200}
          />
        </PanelAnimation>
      );
      
      const AnimacaoErrada = () => (
        <PanelAnimation>
          <Lottie
            options={defaultOptions(animacaoErrada)}
            height={100}
            width={200}
          />
        </PanelAnimation>
      );
       
    
    return (
        <Widget>
            <Widget.Header>
                <h3>
                    { `Pergunta ${questionIndex + 1} de   ${totalDeQuestao}`}
                </h3>
            </Widget.Header>

           
            <img 
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover'
                }}alt="Descrição"
                src={question.image}
            />
             {alternativaEnviada && !alternativeCorreta && <AnimacaoErrada />}
             {alternativaEnviada && alternativeCorreta && <AnimacaoCorreta />}

            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p> {question.description}</p>
               
                <AlternativesForm onSubmit={(infosDoEvento) => {
                    infosDoEvento.preventDefault(); 
                        setAlternativaEnviada(true);
                        setTimeout(() =>{ 
                            addResult(alternativeCorreta);
                            onSubmit();
                            setAlternativaEnviada(false);
                            setAlternativaSelecionada(undefined);
                    }, 3 * 1000)
                }} >

                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const statusAlternativa =  alternativeCorreta ? 'SUCESS': 'ERROR';
                        const isSelected = alternativaSelecionada === alternativeIndex+1;
                        return(
                            <Widget.Topic  
                                key={alternativeId} 
                                as="label" 
                                htmlFor={alternativeId} 
                                data-selected={isSelected}
                                data-status={alternativaEnviada && statusAlternativa}>                                
                                                                 
                                    <input 
                                        style={{ display: 'none' }}
                                        id={alternativeId} 
                                        name={questionId} 
                                        type="radio"                                        
                                        onChange={() => setAlternativaSelecionada(alternativeIndex+1)}
                                        />
                                        {alternative}  
                            </Widget.Topic>
                        );
                    })}
                    <Button type="submit" disabled={alternativaSelecionada == undefined}>
                        Confirmar
                    </Button>
                </AlternativesForm>
            </Widget.Content>
    </Widget>
    )
}