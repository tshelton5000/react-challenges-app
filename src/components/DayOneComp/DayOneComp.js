import React, {Component} from 'react';

import DayOneFunctional from './DayOneFunctional/DayOneFunctional';

class DayOneComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Paul OConnor',
      age: 44,
      favColor: 'blue',
    }
  }

  printState = () => {
    console.log(this.state);
  }

  render(){
    console.log(this.props);
    let compArr = Object.keys(this.state).map(key => {
      return <DayOneFunctional key={key} prop={this.state[key]} />
    })
    return(
      <div>
        {compArr}
      </div>
    )
  }
}

export default DayOneComp;

/*
Tyler's Bronze Solution:
...
...
*/

/*
Tyler's Silver Solution:*/