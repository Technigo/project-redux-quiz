import { useSelector } from 'react-redux';
import { ButtonsMenu } from "./ButtonsMenu";
import { CurrentQuestion } from './CurrentQuestion';
import { Header } from "./Header";
import ProgressBar from './ProgressBar';
import { QuizSummary } from './QuizSummary';

export const Controller = () => {
  const quiz= useSelector((state) => state.quiz);
  console.log("QUizzzzz", quiz)
  const isQuizOver = quiz.quizOver

  if (isQuizOver) {
    return <QuizSummary />
  }

  return (
    <div className="controller-container">
        <Header/>
        <CurrentQuestion />
        <ProgressBar/>
        <ButtonsMenu/>
    </div>
  )
}
