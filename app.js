import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
    constructor(props){
        super(props);
    }
}

render() {
    let productList = ['milk', 'cheese', 'eggs', 'ham', 'chicken']
    return (
        <div>
            <ul>
                {
                    productList.map(itemList =>{
                        return <li>{itemList}</li>
                    })
                }
            </ul>
        </div>
    );
}

ReactDOM.render
export default App;
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>