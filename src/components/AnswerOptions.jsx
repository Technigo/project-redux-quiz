import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import "./AnswerOptions.css";

export const AnswerOptions = () => {
  // get global state
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  // function to save selected answer and hide color for correct/incorrect
  const handleClick = (e) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: parseInt(e.target.value),
      })
    );
  };

  // function to submit answer, go to next question on clicking next btn
  const handleNext = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  return (
    <div className="multiChoiceContainer">
      <ol type="A">
        {question.options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={
              answer && question.correctAnswerIndex === index
                ? "correct multiChoice"
                : "multiChoice"
            }
            name={option}
            value={index}
            style={{
              backgroundColor: answer?.answerIndex === index ? "pink" : null,
            }}
            onClick={handleClick}
            disabled={answer ? true : false}
          >
            <li value={index}>{option}</li>
          </button>
        ))}
      </ol>

      <button
        type="button"
        className="nextBtn"
        onClick={handleNext}
        disabled={answer ? false : true}
      >
        Next
      </button>
    </div>
  );
};
