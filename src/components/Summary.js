import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

import Button from './Button'

const Summary = () => {
	const answers = useSelector((store) => store.quiz.answers)
	
	const dispatch = useDispatch()

	let counter = 0

	answers.forEach((response) => {
		if (response.isCorrect) {
			return counter += 1
		}
	})

	return (
		<div className="summary-container">
			<h1 className="summary-title">Summary</h1>
			{answers.map((answer) => {
				return (
					<div className="answer-details" key={answer.questionId}>
						<div className="answer">
							<p>Your answer: {answer.answer} {answer.isCorrect ? "✅" : "❌"}</p>
						</div>
						<div className="answer">
							<p>Correct answer: {answer.question.options[answer.question.correctAnswerIndex]}</p>
						</div>
					</div>
				)
			})}
			<h1 className="score">You scored {counter} points!</h1>
			<Button 
				className="button"
				onClick={() => dispatch(quiz.actions.restart())}
				style={{ background: '#c3bef0'}}
				type="button"
				buttonText="Restart Quiz"		
			/>
		</div>
	)
}

export default Summary