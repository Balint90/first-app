import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <label for="email" className="label">enter e-mail</label>
            <input type="text" id="email"/>
            <button style={{ backgroundColor: 'red', color: 'white' }}>Submit</button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));