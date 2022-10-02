import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { useDispatch, useSelector } from 'react-redux';


function Comment() {
    // get the current value of support to the 'global state' of support.
    const currentComments = useSelector(store => store.feedbackReducer.comments);
    // set a local use state.
    const [comments, setComments] = useState(currentComments);
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
            <div className='form-container'>
                <div className='form'>
                    <h1>Any comments you want to leave?</h1>
                    <div className='flex-container'>
                        <label htmlFor='comment-input'>Comments</label>
                        <input value={comments} onChange={evt => setComments(evt.target.value)} id='comment-input' type='text' placeholder='Insert comment'/>
                        <div className='btn-container'>
                            <button onClick={() => history.push('/support')}>Back</button>
                            <button onClick={handleClick}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comment;