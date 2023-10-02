import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <label for="email" class="label">enter e-mail</label>
            <input type="text" id="email"/>
            <button style="background-color: red; color: white;">Submit</button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));