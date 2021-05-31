import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'

import Button from './Button'

const Options = () => {
	const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
	const answer = useSelector((store) => store.quiz.answers).find((a) => a.questionId === question.id)

	const [disabled, setDisabled] = useState()

	const dispatch = useDispatch()

	useEffect(() => {
			setDisabled(false)
	}, [question])

	const handleOnClickOption = (option) => {
		dispatch(quiz.actions.submitAnswer({
			questionId: question.id,
			answerIndex: question.options.indexOf(option)
		}))
		setDisabled(true)
	}

	return (
		<>
			{question.options.map((option, index) => {
				return (
					<div className="options-container" key={option}>
						<Button
							className="option-button"
							onClick={() => handleOnClickOption(option)}
							style={{ background: 
								!answer ? '#cadefc' 
								: index === question.correctAnswerIndex ? '#d5ecc2' 
								: '#ffb6b9' 
							}}
							type="button"
							disabled={disabled}
							buttonText={option}
						/>
					</div>
				)
			})}	
		</>
	)
}

export default Options