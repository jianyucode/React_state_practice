import React, {Component} from 'react';

class Random extends Component {
  state = { num: 1,};

  randomNumber = (e) => {
    let randNum = Math.floor(Math.random()*10)+1;

    this.setState({num : randNum})
  }

  render(){
    // let randNum = Math.floor(Math.random()*10)+1;
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {this.state.num === 7 ? <h2>You WIN!!!</h2> : <button onClick={this.randomNumber}>Click me for random number</button>}
      </div>
    )
  }
}

export default Random;
