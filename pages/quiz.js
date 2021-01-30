import React from 'react';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuestionWidget';
import LoadingWidget from '../src/components/LoadingWidget';
import next from 'next';
import ResultWidget from '../src/components/ResultWidget';


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
    const [results, setResults] = React.useState([]);

    function addResult(result){
        setResults([...results,
            result]);
    }

    React.useEffect(() => {
        setTimeout(() => {
          setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
      }, []);
    

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;

        if (nextQuestion < totalDeQuestao) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    return (
        
        <QuizBackground  backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ && (
                <QuestionWidget 
                    question = {question} 
                    respota = {question.resposta}
                    totalDeQuestao={totalDeQuestao} 
                    questionIndex={questionIndex}
                    addResult={addResult}
                    onSubmit={handleSubmitQuiz}
                    /> )}

                {screenState === screenStates.LOADING && <LoadingWidget />}
                {screenState === screenStates.RESULT && <ResultWidget results={results} totalDeQuestao={totalDeQuestao} />}
            </QuizContainer>
           
        </QuizBackground>
    )
}