import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../reducers/quiz";
import { ProgressBar } from '../components/ProgressBar';
import { ButtonsMenu } from "./ButtonsMenu";
import { FaRegCheckCircle } from "react-icons/fa";


export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const dispatch = useDispatch();

  const handleAnswerClick = (answerIndex, questionId) => {
    dispatch(submitAnswer({
      answerIndex,
      questionId,
    }))
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-question">Question: {question.questionText}</h1>
      <div className="answers-container">
        {/* answer options*/}
        {question.options.map((option, index) => (
          <button className="answers" key={index} onClick={() => handleAnswerClick(index, question.id)}>
            <FaRegCheckCircle /> {option}
          </button>
        ))}
      </div>
      {/* for implementation add the flip-card with img and correct answer explanation. Now hidden class, display is set to none. */}
      <div className="flip-card-container">
        <img className="img hidden"></img>
        <p className="explanation hidden">{question.explanation}</p>
      </div>
      {answer ? (<div className="correct-answer">
        {answer.isCorrect ? "Correct!" : "Incorrect"}
      </div>) : (
      <div></div>)}
      {/* add question counter */}
      <ProgressBar/>
      <ButtonsMenu/>
    </div>
  );
};
