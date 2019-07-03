import React from 'react';
import logo from './logo.svg';
import './App.css';

//JSX tags may contain children
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here</h2>
//    </div>
// );


// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// )

//React.createElement essentially creates an object like this in the background
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// //~~~~~~~~~~~~~~~~INTRODUCTION TO JSX~~~~~~~~~~~~~~~~
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//   if(user){
//     return <h1> Hello, {formatName(user)}!</h1>
//   }
//   return <h1>Hello, stranger!</h1>
// }

// const user = {
//   firstName: 'Michael',
//   lastName: 'Veloso'
// };

// const element = (
//   <h1> 
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// //~~~~~~~~~~~~~~RENDERING ELEMENTS~~~~~~~~~~~~~~~~
// const element = <h1> Hello, world!</h1>;

// function tick(){
//   const element = (
//     <div>
//       <h1> Hello, world!</h1>
//       <h2> It is {new Date().toLocaleTimeString()}.</h2>
//      </div>
  
//   );
//   //Remember that react elements are immutable
//   //once you create an element, you can't change its children or attributes
//   //So...the only way to update the UI is to create a new element and pass it to ReactDOM
//   ReactDOM.render(element, document.getElementById('root'));
// }

// //this calls ReactDOM every second from the setInterval callback
// setInterval(tick, 1000);

// //React DOM compares the element and its children to the previous one 
// //and only applies the DOM updates necessary to bring the DOM to the desired date

// //~~~~~~~~~~~~~~~~~~~~COMPONENTS AND PROPS~~~~~~~~~~~~~~~~~~~~~
// //components let you spit the UI into independent, reusable pieces and think about each piece in isolation

// //simple way to define components is a javascript function

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }

// //props stands for properties in react
// //this returns a react element

// //USING ES6 CLASS TO DEFINE COMPONENT
// //Classes have some additional features
// class Welcome extends React.Component {
//   render(){
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// //RENDERING A COMPONENT
// //elements can also represetn user-defined components
// const element = <Welcome name="Sara" />;
// //it passes JSX attributes to this component as a single object
// //call it "props"

// function Welcome(props){
//   return<h1>Hello, {props.name}</h1>
  
// }

// const element = <Welcome name="Sara" />;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// //recalling what happens
// //1. calls ReactDOM render with the Welcome name="sara" element
// //2. React calls the Welcome component with {name: Sara} as the props
// //3. Welcome component returns <h1> Hello, Sara</h1> element as the result
// //4. React DOM efficiently updates the DOM to match <h1> Hello, Sara</h1>

// //COMPOSING COMPONENTS
// //components can refer to other components in their output

// //we can create an App component that renders Welcome many times:

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }


// //EXTRACTING COMPONENTS
// //don't be afraid to split components into smaller components
// function App(){
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Chris" />
//       <Welcome name="Kevin" />
//     </div>
//   );
// }


// //These added functions makes the Comment component much simpler and easier to reuse individual parts
// function formatDate(date){
//   return date.toLocaleDateString();
// }

// function Avatar(props){
//   return(
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//       />
//   );
// }

// function UserInfo(props){
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//      </div> 
//   );
// }

// function Comment(props){
//   return(
//   <div classNAme="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//   </div>  
//   );
// }

// //extracting components helps with reusing components
// //good rule of thumb is that if a part of the UI is used several times:
// //button, panel, avatar
// //or is complex enough on its own: 
// //App, FeedStory, Comment
// //then it is a good candidate to be a reusable component

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name:'Bon Jovi',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   <Comment 
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//     />,
//   document.getElementById('root')
// );

//PROPS ARE READ ONLY
//whether you declare a component as a function or as a class it must never modify its own props
//this is a pure function because it does not attempt to change their inputs and always returns the same results for the same inputs
function sum(a, b){
  return a+b;
}
//this is impure because it changes its own inputs
function withdraw(account, amount){
  account.total -= amount;
}

//STRICT RULE:
//All REACT COMPONENTS MUST ACT LIKE PURE FUNCTIONS WITH RESPECTS TO THEIR PROPS

export default App;
