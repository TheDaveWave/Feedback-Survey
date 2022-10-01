import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { useDispatch } from 'react-redux';


function Comment() {
    // set a local use state.
    const [comments, setComments] = useState('');
    // get the path history.
    const history = useHistory();
    const dispatch = useDispatch();
    // handle the on click event for the 'next' button.
    const handleClick = () => {
         // dispatch the value of the selection to the reducer.
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        // push to the next page.
        history.push('/review');
    }

    return (
        <section>
            <Header />
            <h1>Any comments you want to leave?</h1>
            <label htmlFor='comment-input'>Comments</label>
            <input value={comments} onChange={evt => setComments(evt.target.value)} id='comment-input' type='text' placeholder='Insert comment'/>
            <button onClick={handleClick}>Next</button>
        </section>
    );
}

export default Comment;