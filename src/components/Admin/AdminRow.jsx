import axios from "axios";
import swal from "sweetalert";

// creates each feedback object's table row for Admin.jsx.
function AdminRow({feedback, fetchFeedback}) {

    // Delete route to /feedback/:feedbackId
    const deleteFeedback = () => {
        // using sweet alert to confirm delete.
        swal({
            title: 'Delete entry?',
            text: 'Once deleted, it will be gone forever.',
            // changing the text on the confirm button.
            buttons: {
                cancel: true,
                confirm: 'Delete'
            },
            dangerMode: true
        })
        .then(ok => {
            // check if delete button on modal was select and if so delete row.
            if(ok) {
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
        <>
        <tr className={feedback.flagged ? 'flagged' : ''}>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            {/* <th>Comments</th> */}
            <th>Flag</th>
            <th>Del</th>
        </tr>
        <tr className={feedback.flagged ? 'flagged' : ''}>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            {/* <td>{feedback.comments}</td> */}
            <td>
                <button onClick={() => flagFeedback()}>Flag</button>
            </td>
            <td>
                <button onClick={() => deleteFeedback()}>X</button>
            </td>
        </tr>
        <tr className={feedback.flagged ? 'flagged' : ''}>
            <th colSpan={5}>Comments</th>
        </tr>
        <tr className={feedback.flagged ? 'flagged' : ''}>
            <td colSpan={5}>{feedback.comments !== '' ? feedback.comments : 'None'}</td>
        </tr>
        </>
    );
}

export default AdminRow;