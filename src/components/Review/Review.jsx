import Header from "../Header/Header";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function Review() {
    // get the redux store reducer's state.
    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    const handleClick = () => {
        // add a post route here.
        history.push('/success');
    }

    return (
        <section>
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.supported}</p>
            {feedback.comments && <p>Comments: {feedback.comments}</p>}
            <button onClick={handleClick}>Submit</button>
        </section>
    );
}

export default Review;