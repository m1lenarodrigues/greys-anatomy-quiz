import React from 'react';
import {useRouter} from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuestionWidget';
import LoadingWidget from '../src/components/LoadingWidget';
import next from 'next';


const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage(){
    const [screenState, setScreenState] = React.useState(screenStates.LOADING); 
    const totalDeQuestao =  db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    React.useEffect(() => {
        setTimeout(() => {
          setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
      }, []);
    
    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalDeQuestao) {
            console.log("teste", nextQuestion);
            setCurrentQuestion(nextQuestion);
            console.log(currentQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    return (
        
        <QuizBackground  backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <QuestionWidget 
                    question = {question} 
                    totalDeQuestao={totalDeQuestao} 
                    questionIndex={questionIndex}
                    onSubmit={handleSubmitQuiz}/>
            </QuizContainer>
            {screenState === screenStates.LOADING && <LoadingWidget />}

            {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
        </QuizBackground>
    )
}