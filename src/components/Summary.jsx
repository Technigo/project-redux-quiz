import { useSelector } from "react-redux";

export const Summary = () => {
  const quiz = useSelector((state) => state.quiz);

  if (quiz.quizOver) {
    console.log(quiz.answers);
    return (
      <div>
        <h1>Summary</h1>
        <ol>
          {quiz.answers.map((answer, index) => (
            <li key={index}>
              <h3>{answer.question.questionText}</h3>
              <p>
                {answer.answer}
                {answer.isCorrect
                  ? "Correct!"
                  : `Wrong! Correct answer is ${
                      answer.question.options[
                        answer.question.correctAnswerIndex
                      ]
                    }`}
              </p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
};

export default Summary;
