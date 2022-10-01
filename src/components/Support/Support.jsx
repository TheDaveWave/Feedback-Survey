import Header from "../Header/Header";

function Support() {
    return (
        <section>
            <Header />
            <h1>How well are you being supported?</h1>
            <label htmlFor='support-select'>Feeling?</label>
            {/* Creating a select element so there will always be a value and limited range */}
            <select id='support-select' name='support'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </section>
    );
}

export default Support;