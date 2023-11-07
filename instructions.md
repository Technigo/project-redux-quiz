# Instructions

# State Management Quiz - Redux

This week, the task is to build a quiz game using `Redux` for state management. It's a multiple-choice quiz, so you'll need to define your own questions and a bunch of possible answers to present to your users.

It's up to you to decide what your quiz should be about! Maybe you want to test your user's general knowledge with trivia questions? Additionally, as you design your quiz application, you'll need to make an important decision regarding state management. You can choose between using Redux or the Context API, each offering its own set of advantages and considerations. Ensure you research both options to determine which best suits your project's needs.

## Requirements

- Your quiz should have at least 5 questions.

- When the user selects an answer, it should show if they were correct or not.

- While going through the quiz, it should show which question you're on, or how many are left - for example 'Question 5 / 15' or '10 questions left'.

- When the user has answered all the questions, they should get to a summary screen that tells them how many they got correct or incorrect.

- Don't forget CSS! Your quiz should be well-styled.

## Stretch goals

- After selecting an answer, highlight the correct answer if they chose incorrectly.

- Create a visual progress bar showing how many questions are left to be answered.

- Use images or videos to make your questions and answers look richer.

- Give a score for correct answers and deduct points for incorrect answers. If the user goes below a certain score, they lose!

- Enrich the summary with information about what questions they got correct and what questions they should practice more.

- Implement a countdown timer to answer the question - if the user doesn't answer in time, they get the question wrong.

- Implement a timer to show the user how long it took to complete the quiz.

## Getting started 🤓

In this project setup, we've provided the state management approach for your quiz game: Redux. Your task is to collaborate as a team and utilize these state management techniques to render the quiz questions sequentially. Each question should display the question text and its associated options. Upon selecting an answer, the application should indicate whether the chosen answer is correct or incorrect, and then guide the user to the subsequent question.

- The starting point for the Redux approach is the `./src/components/CurrentQuestion.jsx` component. This component retrieves the current question from the Redux store and renders it.

Your main objective is to ensure a smooth quiz experience for the user by rendering the questions, presenting the possible answers, and providing feedback on the user's selection before progressing to the next question. For this project, you should commit to just one to maintain clarity and consistency in your codebase.

## Planning

### You should discuss these questions before you fork and clone the repo:
- Will you use a planning tool (Jamboard, Figma) to plan your design/app structure?
- How are you going to work in the team? E.g. Laying out the foundation together and then splitting up? Mob program approach all the way? Smaller groups / pairs / solo?
- What is your quiz about?
- Which are your (at least) 5 questions and answers? (Remember, multiple choices are required)
- How are you going to show the progress? i.e 1 / 5, 20%, 4 questions left.
- How will the user select the answer? Dropdown, selecting with keyboard commands, buttons, images?
- What will the summary screen look like?
- What components do you need?
- How are you dealing with the styling?
- What stretch goals are you aiming for?


### Hints and tips to complete the project 🤓
This project is quite open ended, so you should make sure to start with a sketch and make sure your team is aligned on how things should work and who's going to do what. After laying out the foundation together, it's up to you to decide how you want to work in your teams; whether you break up into smaller groups and work on specific features, or whether you continue to work as a big mob.

Whatever you do, remember to break tasks up into small chunks and don't take on too many things at once!
