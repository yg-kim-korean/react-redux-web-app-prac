import React, { Component } from 'react'
import Header from './component/Header'
import NavContainers from './containers/Nav'
import ReadContainers from './containers/Read'
import ControlContainers from './containers/Control'
import CreateContainers from './containers/Create'
import UpdateContainers from './containers/Update'
import { connect } from 'react-redux'
class App extends Component{
  render(){
  var article=null;
  if (this.props.mode==='READ'){
      article=<ReadContainers/>
  }
  else if (this.props.mode==='WELCOME'){
    article=<ReadContainers/>
  }
  else if(this.props.mode==='CREATE'){
    article = <CreateContainers/>
  }
  else if(this.props.mode==='UPDATE'){
    article = <UpdateContainers/>
  }
  return (
    <div className="App">
        <Header />
        <NavContainers />
        <ControlContainers />
        {article}
    </div>
  );
 
  }
}

export default connect(
  function(state){
    return{
      mode:state.mode
    }
  }
)(App);
