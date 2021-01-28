import React from 'react';

import Widget from '../Widget';
import Button from '../Button';

export default function QuestionWidget({ question, totalDeQuestao, questionIndex, onSubmit, ...props }){
    const questionId = `question__${questionIndex}`;

    
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

            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p> {question.description}</p>
               
                <form onSubmit={(infosDoEvento) => {infosDoEvento.preventDefault(); onSubmit(); }} >
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`
                        return(
                            <Widget.Topic  as="label" htmlFor={alternativeId}>
                                
                                {alternative}
                                
                                <input 
                                // style={{display: 'none'}} 
                                value={alternativeIndex+1}
                                id={alternativeId} name={questionId} type="radio"/>
                            </Widget.Topic>
                        );
                    })}
                    <Button type="submit">
                        Confirmar
                    </Button>
                </form>
            </Widget.Content>
    </Widget>
    )
}