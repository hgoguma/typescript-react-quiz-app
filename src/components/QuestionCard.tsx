import React from 'react';
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[]; // array 
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

// React.FC : Functional Component
const QuestionCard: React.FC<Props>  = ({
    question, answers, callback, userAnswer, questionNumber, totalQuestions
    }) => ( 
    <Wrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        {/* dangerouslySetInnerHTML :  */}
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                // ?. -> userAnswer 값이 없으면 undefined가 넘어가는듯?
                <ButtonWrapper 
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer }
                    userClicked={userAnswer?.answer === answer}
                >
                    {/* disabled={!!userAnswer} 도 가능 */}
                    <button disabled={userAnswer ? true : false } value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard;