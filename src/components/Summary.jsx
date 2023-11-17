import { useSelector } from "react-redux";
import "./Summary.css";

export const Summary = () => {
  const quiz = useSelector((state) => state.quiz);

  if (quiz.quizOver) {
    console.log(quiz.answers);
    return (
      <div className="Summary">
        <h1>Summary</h1>
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
