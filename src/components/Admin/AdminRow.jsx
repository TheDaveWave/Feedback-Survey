import axios from "axios";

// creates each feedback object's table row for Admin.jsx.
function AdminRow({feedback, fetchFeedback}) {

    // Delete route to /feedback/:feedbackId
    const deleteFeedback = (feedbackId) => {
        // send delete request with id key to server.
        axios.delete(`/feedback/${feedbackId}`)
        .then(() => {
            // refresh the data through a function passed in as a prop.
            fetchFeedback();
        })
        .catch(err => {
            console.log(`Error in axios DELETE /feedback/${feedbackId}`, err);
        });
    }

    return (
        <tr>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td><button onClick={() => deleteFeedback(feedback.id)}>Delete</button></td>
        </tr>
    );
}

export default AdminRow;