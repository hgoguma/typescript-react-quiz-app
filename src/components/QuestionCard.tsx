import React from 'react';

type Props = {
    question: string;
    answers: string[]; // array 
    callback: any;
    userAnswer: any;
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
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;