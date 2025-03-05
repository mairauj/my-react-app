import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/api/message')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>React + Express App</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
