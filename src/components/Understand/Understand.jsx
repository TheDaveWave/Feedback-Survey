import Header from "../Header/Header";

function Understand() {
    return (
        <section>
            <Header />
            <h1>How well are you understanding the content?</h1>
            <label htmlFor='understand-select'>Understanding?</label>
            {/* Creating a select element so there will always be a value and limited range */}
            <select id='understand-select' name='understand'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </section>
    );
}

export default Understand;