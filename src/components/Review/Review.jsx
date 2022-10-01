import Header from "../Header/Header";
import { useSelector } from 'react-redux';

function Review() {
    // get the redux store reducer's state.
    const feedback = useSelector(store => store.feedbackReducer);

    return (
        <section>
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.supported}</p>
            <p>Comments: {feedback.comments}</p>
            <button>Submit</button>
        </section>
    );
}

export default Review;