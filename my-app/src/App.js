import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {Container, Row, Col} from 'react-bootstrap';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
      //NUMBERS FOR CALCULATOR
      // numbers.map(number =>{
      //   return <button key={number}>{number}</button>
      // })

      // // <Button name="Michael"/>

      <Container fluid="true">
        <Row className="bg-warning">
          <Col md={6}>
            <Button name="Digital Crafts" bsStyle="primary"></Button>
          </Col>

          <Col md={3}>
            Second Column
          </Col>

          <Col md={3}>
            Third Column
          </Col>
        </Row>
      </Container>

    );
  }
}


export default App;
