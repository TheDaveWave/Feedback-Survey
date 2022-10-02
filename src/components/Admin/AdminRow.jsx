// creates each feedback object's table row for Admin.jsx.
function AdminRow({feedback}) {
    return (
        <tr>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default AdminRow;