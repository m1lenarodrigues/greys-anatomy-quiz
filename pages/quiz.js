import React from 'react';
import {useRouter} from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import ImagemPerguntaQuiz from '../src/components/ImagemPerguntaQuiz';


export default function QuizPage(){

    const informacoesRota = useRouter();
    const nomeJogador = informacoesRota.query.name;

    const nomeUsuario = useRouter();
    return (
        
        <QuizBackground  backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <Widget>
                    <Widget.Header>
                    {nomeJogador} escolha a alternativa correta
                    </Widget.Header>
                    <Widget.Content>
                        <ImagemPerguntaQuiz backgroundImage={db.bgPergunta01} />


                    </Widget.Content>
                </Widget>
            </QuizContainer>
        </QuizBackground>
    )
}