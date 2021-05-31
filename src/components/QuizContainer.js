import React from 'react'
import { useSelector } from 'react-redux'

import Summary from './Summary'
import CurrentQuestion from './CurrentQuestion'

const QuizContainer = () => {
	const quizOver = useSelector((store) => store.quiz.quizOver)

	return (
		<>
			{quizOver ? <Summary />
				: <CurrentQuestion />
			}
		</>	
	)
}

export default QuizContainer