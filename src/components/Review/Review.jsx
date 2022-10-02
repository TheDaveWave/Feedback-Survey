import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

function Review() {
    // get the redux store reducer's state.
    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    const handleClick = () => {
        // use sweetalert to confirm submission.
        swal({
            title: 'Submit?',
            text: 'Once submitted you will not be able to edit feedback.',
            buttons: {
                cancel: true,
                confirm: 'Submit'
            }
        })
        .then(ok => {
            if(ok) {
                // post route to server.
                axios.post('/feedback', {
                    feeling: feedback.feeling,
                    understanding: feedback.understanding,
                    support: feedback.support,
                    comments: feedback.comments
                })
                .then((result) => {
                    // console.log(result.data);
                })
                .catch(err => {
                    console.log('Error in axios /feedback', err);
                });
                // have a cool success pop up appear.
                swal({
                    icon: 'success'
                })
                .then(value => {
                    if(value) {
                        // push to next page.
                        history.push('/success');
                    }
                });
            }
        });
    }

    return (
        <section>
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            {feedback.comments && <p>Comments: {feedback.comments}</p>}
            <button onClick={handleClick}>Submit</button>
            <button onClick={() => history.push('/comment')}>Back</button>
        </section>
    );
}

export default Review;