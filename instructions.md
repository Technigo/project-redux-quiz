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

In the repo, we've defined a Redux store and a reducer with a few actions you can use to control your quiz. You need to work as a team to use the state to render the quiz questions one at a time. When rendering a question, you should render the question itself and also the possible answers. The user then clicks an answer, and you should show if it is correct or not before letting the user continue on to the next question.

We've connected the redux dots and set up a store from the reducer and passed the store into a `Provider` in `./src/App.jsx`. We've also created a starting point for you - a component which selects the current question from the store and renders the question, in `./src/components/CurrentQuestion.jsx`.

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

## **The questions array**

You can find the `quiz` store in `./src/reducers/quiz.js`. In it, there's a `questions` array with a couple of placeholder objects for you to get started with. You should replace these questions with your own ones.

You're free to restructure things if you want to, but it's recommended to stick with the current setup where each question has:

- `id` - a unique identifier for the question. You can just keep incrementing numbers for these.
- `question` - this is the text which is displayed to the user for this question. The example questions use a string of text, but you could turn this into an object if you wanted to include images or other data.
- `options` - an array of possible answers to the question which your user will choose from. Again, in the placeholder questions, we've used strings, but you can switch them to objects if you want to add additional details such as image urls.
- `correctAnswerIndex` - the index of the item in the `options` array which is the correct answer.

## **Redux actions**

In the `quiz` store, there's a few actions made for you:

### **`submitAnswer`**

Use this action when a user selects an answer to the question. You need to pass an object with a key `questionId` whose value is valid question id (from the question objects) and an `answerIndex` which is the index of the answer they chose.

Given the following question, for example:
  
        { id: 1, question: 'Who set the Olympic record for the 100m dash in 2012?', options: ['Usain Bolt', 'Justin Gatlin', 'Tyson Gay', 'Asafa Powell'], correctAnswerIndex: 0 }

If the user clicks 'Asafa Powell' (index 3 in the options array), you'd dispatch the action to redux like this:

        dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 3 }))
        

The redux state will then update the answers array and tell you if this was the correct answer or not.

### **`goToNextQuestion`**

After the user clicks an answer and you show them if they were correct or not, you should show a button to continue to the next question. When they click that button, dispatch this action.

        dispatch(quiz.actions.goToNextQuestion())
        
### **`restart`**

At the end of the quiz, if you want to start over, you can dispatch this action.

        dispatch(quiz.actions.restart())

## **Selecting from the store**

Use the redux dev tools in chrome to inspect the store and see what it contains. You can write your own selectors to fetch whatever you need from the store. We've given you one example in `./src/components/CurrentQuestion.jsx` to get you started with fetching the current question from the store:


        const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

You can build up these selector functions to use other information you have to fetch specific things. For example, you could fetch the answer to a question:

        const answer = useSelector((state) => state.quiz.answers.find((a) => ( a.questionId === question.id // question could come from the previous selector in the last example)))


### Hints and tips to complete the project 🤓
This project is quite open ended, so you should make sure to start with a sketch and make sure your team is aligned on how things should work and who's going to do what. After laying out the foundation together, it's up to you to decide how you want to work in your teams; whether you break up into smaller groups and work on specific features, or whether you continue to work as a big mob.

Whatever you do, remember to break tasks up into small chunks and don't take on too many things at once!
