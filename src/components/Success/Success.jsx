import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Success.css';
// just a little bit of fun here.
function Success() {

    const history = useHistory();
    // learned how to make it so you can not go back to other pages.
    const noBack = () => {
        window.addEventListener('popstate', evt => (
            history.replace(null)
        ));
    }

    useEffect(() => {
        noBack();
    },[]);

    return (
        <main id='success-page'></main>
    );
}

export default Success;