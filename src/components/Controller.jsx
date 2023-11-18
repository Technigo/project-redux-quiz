import { CurrentQuestion } from './CurrentQuestion';
import { ProgressBar } from './ProgressBar';
import { ButtonsMenu } from "./ButtonsMenu";
import { Header } from "./Header";

export const Controller = () => {
  return (
    <div className="controller-container">
        <Header/>
        <CurrentQuestion />
        <ProgressBar/>
        <ButtonsMenu/>
    </div>
  )
}
