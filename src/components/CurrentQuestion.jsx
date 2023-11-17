import { useSelector } from "react-redux";

export const CurrentQuestion = () => {
  const quiz = useSelector((state) => state.quiz);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>
        Question {quiz.currentQuestionIndex}/{quiz.questions.length}:{" "}
        {question.questionText}
      </h1>
    </div>
  );
};
