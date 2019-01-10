import React, {Component} from 'react';

import Display from './Display/Display';

const styles = {
  color: 'cadetblue',
  margin: 'auto',
  marginTop: '5em',
}

class DayTwoComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      ghibli: [],
      key: 'good questions',
      style: {
        color: 'cadetblue',
        margin: '5em auto 0 auto'
      }
    }
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  componentDidMount(){
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(res => res.json())
      .then(json => this.setState({ghibli: json})) //() => console.log(this.state) this is a callback function
      //setInterval(this.playingWithState, 3000);
  }

  // playingWithState = () => {
  //   if (this.state.key === 'good questions'){
  //     this.setState({key: 'great questions'})
  //   } else {
  //     this.setState({key: 'good questions'})
  //   }
  // }

  render(){
    let movieArr = this.state.ghibli.map((movie, index) => {
      return <Display key={index} name={movie.title} />
    })
    console.log(movieArr instanceof Array, 'line 47 in our component');
    console.log(movieArr.length, 'line 48 in our component');
    return(
      <div>
        {movieArr}
      </div>
    )
  }
}

export default DayTwoComp;