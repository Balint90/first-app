import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return {text: 'submit'};
}

const App = () => {

    return (
        <div>
            <label htmlFor="email" className="label">enter e-mail</label>
            <input type="text" id="email"/>
            <button style={{ backgroundColor: 'red', color: 'white' }}>
                { getButtonText().text }
            </button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));