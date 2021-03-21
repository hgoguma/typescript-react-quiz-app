import React from 'react';
import { AnswerObject } from '../App';

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
    <div>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        {/* dangerouslySetInnerHTML :  */}
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false } value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;