import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../Header/Header";
import { useState } from "react";

function Understand() {
    // get the updated value of understanding for when the user wants to change the option later.
    const currentUnderstanding = useSelector(store => store.feedbackReducer.understanding);
    // set a local use state. Putting currentUnderstanding in Number() so when you highlight
    // understanding state variable it shows that it should be defined as a number data type.
    const [understanding, setUnderstanding] = useState(Number(currentUnderstanding));
    // get the path history.
    const history = useHistory();
    const dispatch = useDispatch();
    // handle the on click event for the 'next' button.
    const handleClick = () => {
        // dispatch the value of the selection to the reducer.
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        });
        // push to the next page.
        history.push('/support');
    }

    return (
        <section>
            <Header />
            <div className='form-container'>
                <div className='form'>
                    <h1>How well are you understanding the content?</h1>
                    <div className='flex-container'>
                        <p>Terrible: 1 to Excellent: 5</p>
                        <label htmlFor='understand-select'>Understanding?</label>
                        {/* Creating a select element so there will always be a value and limited range */}
                        <select value={understanding} id='understand-select' name='understand' onChange={evt => setUnderstanding(evt.target.value)}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <div className='btn-container'>
                            <button onClick={() => history.push('/')}>Back</button>
                            <button onClick={handleClick}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Understand;