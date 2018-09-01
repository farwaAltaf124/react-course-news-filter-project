import React, { Component } from 'react';

 class random extends Component {
constructor(props){
  super(props);
this.state={
  // title:'The keywords are:',
  keyword:'',
}
console.log(props)
}

inputChange=(event)=>{
this.setState({keyword :event.target.value})
this.props.findNews(event.target.value)
}

    render() {
    return (
      <div>
       
 <input type="text"onChange={this.inputChange.bind(this)} />
 <br/>
 {/* {this.state.title} */}
 
      </div>
    )
  }
}

export default random;