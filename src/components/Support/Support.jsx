import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../Header/Header";

function Support() {
    // get the current value of support to the 'global state' of support.
    const currentSupport = useSelector(store => store.feedbackReducer.support);
    // set a local use state.
    const [support, setSupported] = useState(Number(currentSupport));
    // console.log(support);
    // get the path history.
    const history = useHistory();
    const dispatch = useDispatch();
    // handle the on click event for the 'next' button.
    const handleClick = () => {
         // dispatch the value of the selection to the reducer.
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: support
        });
        // push to the next page.
        history.push('/comment');
    }

    return (
        <section>
            <Header />
            <div className='form-container'>
                <div className='form'>
                    <h1>How well are you being supported?</h1>
                    <div className='flex-container'>
                        <label htmlFor='support-select'>Support?</label>
                        {/* Creating a select element so there will always be a value and limited range */}
                        <select value={support} id='support-select' name='support' onChange={evt => setSupported(evt.target.value)}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <div className='btn-container'>
                            <button onClick={() => history.push('/understand')}>Back</button>
                            <button onClick={handleClick}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Support;