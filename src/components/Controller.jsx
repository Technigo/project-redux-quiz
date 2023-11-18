import { CurrentQuestion } from './CurrentQuestion';
import { ProgressBar } from './ProgressBar';
import { ButtonsMenu } from "./ButtonsMenu";

export const Controller = () => {
  return (
    <div className="controller-container">
        <CurrentQuestion />
        <ProgressBar/>
        <ButtonsMenu/>
    </div>
  )
}
