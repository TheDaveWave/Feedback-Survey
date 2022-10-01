import Header from "../Header/Header";

function Feel() {
    return (
        <section>
            <Header />
            <h1>How are you feeling today?</h1>
            <label htmlFor='feeling-select'>Feeling?</label>
            {/* Creating a select element so there will always be a value and limited range */}
            <select id='feeling-select' name='feeling'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </section>
    );
}

export default Feel;