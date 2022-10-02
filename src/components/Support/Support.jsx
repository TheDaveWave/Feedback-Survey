import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Header from "../Header/Header";

function Support() {
    // set a local use state.
    const [supported, setSupported] = useState(1);
    // console.log(supported);
    // get the path history.
    const history = useHistory();
    const dispatch = useDispatch();
    // handle the on click event for the 'next' button.
    const handleClick = () => {
         // dispatch the value of the selection to the reducer.
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supported
        });
        // push to the next page.
        history.push('/comment');
    }

    return (
        <section>
            <Header />
            <h1>How well are you being supported?</h1>
            <label htmlFor='support-select'>Support?</label>
            {/* Creating a select element so there will always be a value and limited range */}
            <select id='support-select' name='support' onChange={evt => setSupported(evt.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button onClick={handleClick}>Next</button>
            <button onClick={() => history.push('/understand')}>Back</button>
        </section>
    );
}

export default Support;