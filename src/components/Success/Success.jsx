import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Success() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch a reset request
        dispatch({
            type: 'CLEAR_FEEDBACK',
        });
        history.replace('/');
    }

    return (
        <section>
            <h1>Form Submitted!</h1>
            <button onClick={handleClick}>Leave New Feedback</button>
        </section>
    );
}

export default Success;