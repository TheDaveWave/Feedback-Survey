import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../Header/Header";
import { useState } from "react";

function Feel() {
    // get the current value of feeling so on load the value of inputs is set correctly.
    // this will be used for when a user goes back in the form to update their submission.
    const currentFeeling = useSelector(store => store.feedbackReducer.feeling);
    // console.log(currentFeeling);
    // set a local use state make default to the current corresponding reducer value. 
    // use number method to ensure that it is a number.
    const [feeling, setFeeling] = useState(Number(currentFeeling));
    // get the path history.
    const history = useHistory();
    const dispatch = useDispatch();
    // handle the on click event for the 'next' button.
    const handleClick = () => {
        // dispatch the value of the selection to the reducer.
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        });
        // move to the next page.
        history.push('/understand');
    }

    return (
        <section>
            <Header />
            <div className='form-container'>
                <div className='form'>
                    <h1>How are you feeling today?</h1>
                    <div className='flex-container'>
                        <p>Terrible: 1 to Excellent: 5</p>
                        <label htmlFor='feeling-select'>Feeling?</label>
                        {/* Creating a select element so there will always be a value and limited range */}
                        <select value={feeling} id='feeling-select' name='feeling' onChange={evt => setFeeling(evt.target.value)}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <button onClick={handleClick}>Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feel;