import axios from "axios";
import { useEffect, useState } from "react";
import AdminRow from "./AdminRow";

function Admin() {
    // set a local state to store the data from the database.
    const [feedbackData, setFeedbackData] = useState([]);
    // GET request to receive feedback data from the database.
    const fetchFeedback = () => {
        // axios GET request.
        axios.get('/feedback')
        .then(response => {
            // console.log(response.data);
            // set the received data to feedbackData in the local state.
            setFeedbackData(response.data);
        })
        .catch(err => {
            console.log('Error getting feedback in Admin', err);
        });
    }

    // call fetchFeedback on load and only once every load of page.
    useEffect(() => {
        fetchFeedback();
    }, []);

    return (
        <section>
            <h1>Feedback Results!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* loop over feedbackData and display each feedback objects keys on the DOM */}
                    {feedbackData.map(feedback => (
                        <AdminRow key={feedback.id} feedback={feedback}/>
                    ))}
                </tbody>
                <tfoot></tfoot>
            </table>
        </section>
    );
}

export default Admin;