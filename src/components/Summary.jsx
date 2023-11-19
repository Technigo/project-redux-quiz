import { useSelector } from "react-redux";
import "./Summary.css";

export const Summary = () => {
  const quiz = useSelector((state) => state.quiz);

  if (quiz.quizOver) {
    console.log(quiz.answers);
    const correctAnswers = quiz.answers.filter((answer) => answer.isCorrect);
    const score = (correctAnswers.length / quiz.answers.length) * 100; // Calculate percentage score

    return (
      <div className="summary">
        <h1>Summary</h1>
        <h2>
          You Scored: {score}% in a total time of {quiz.totalTime} seconds.
        </h2>

        <ol>
          {quiz.answers.map((answer, index) => (
            <li key={index}>
              <h4>{answer.question.questionText}</h4>
              <p>
                Answer: {answer.answer} -{" "}
                {answer.isCorrect
                  ? "Correct!"
                  : `Wrong! The correct answer is ${
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
