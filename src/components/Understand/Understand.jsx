import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Header from "../Header/Header";
import { useState } from "react";

function Understand() {
    // set a local use state.
    const [understanding, setUnderstanding] = useState(1);
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

    }

    return (
        <section>
            <Header />
            <h1>How well are you understanding the content?</h1>
            <label htmlFor='understand-select'>Understanding?</label>
            {/* Creating a select element so there will always be a value and limited range */}
            <select id='understand-select' name='understand' onChange={evt => setUnderstanding(evt.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button onClick={handleClick}>Next</button>
        </section>
    );
}

export default Understand;