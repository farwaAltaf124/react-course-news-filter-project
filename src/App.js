import React, { Component } from 'react';
import Random from './components/random';
import JSON from './db.json';
import NewsList from './components/news-list';
class App extends Component {
constructor(props){
  super(props);
  this.state={
    news:JSON,
    filtered:JSON
  }
}
newsSearch(keywords){
let filtered=this.state.news.filter((item)=>{
  return item.title.indexOf(keywords)  >-1;
})
this.setState({filtered:filtered})
}
  render() {
    return (
      <div>
   <h1 >React News Filter</h1>
      
       <Random findNews={keywords=>this.newsSearch(keywords)}/>
       <NewsList news={this.state.filtered}/>

      </div>
    );
  }
}

export default App;
