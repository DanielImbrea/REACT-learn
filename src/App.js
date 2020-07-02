import React from 'react';
import Person from './Person'
import './App.css';

class App extends React.Component {

  state = {
    persons: [
      {name:'Max', age: 28},
      {name: "Stephanie", age:26}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons:[
        {name: 'Maximilian', age: 22},
        {name: 'Albert', age: 29}
      ]
    })
  }
render() {


  return (
    <div className="App">
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
     <button onClick={this.switchNameHandler}>Click here</button>
    </div>
  );
}
}

export default App;
