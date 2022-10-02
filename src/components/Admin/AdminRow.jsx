import axios from "axios";

// creates each feedback object's table row for Admin.jsx.
function AdminRow({feedback, fetchFeedback}) {


    // need confirmation popup!!!!!
    // Delete route to /feedback/:feedbackId
    const deleteFeedback = () => {
        // send delete request with id key to server.
        axios.delete(`/feedback/${feedback.id}`)
        .then(() => {
            // refresh the table through a function passed in as a prop.
            fetchFeedback();
        })
        .catch(err => {
            console.log(`Error in axios DELETE /feedback/${feedback.id}`, err);
        });
    }

    // PUT request to flag a feedback 'row' for further review.
    const flagFeedback = () => {
        // send a PUT request with the id key to server.
        axios.put(`/feedback/${feedback.id}`)
        .then(() => {
            // refresh the table.
            fetchFeedback();
        })
        .catch(err => {
            console.log(`Error in axios PUT /feedback/${feedback.id}`, err);
        });
    }

    return (
        <tr>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td>
                <button onClick={() => deleteFeedback()}>Delete</button>
                {' '}<button onClick={() => flagFeedback()}>Flag</button>
                {/* temporary condition to check if row is flagged. */}
                {feedback.flagged && <p>Flagged</p>}
            </td>
        </tr>
    );
}

export default AdminRow;