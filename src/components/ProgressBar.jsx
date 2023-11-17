import { useSelector } from "react-redux";

export const ProgressBar = () => {
    const totalPages = useSelector((state) => state.quiz.questions.length);
    const currentPage = useSelector(
        (state) => state.quiz.currentQuestionIndex
    );

    return (
        <span>
            <p>{currentPage + 1} of {totalPages} questions</p>
        </span>
    )
}